#!/usr/bin/env bash
# LAND A WAVE ON MAIN — every step a landing used to repeat by hand, once, in order, stopping at the first failure.
#
#   npm run land -- -m <message-file> [--add <new-path>]… [--gate <npm-script>]… [--no-deploy]
#
# 1. The checkout lock (.git/ceccec-checkout.lock), taken and released by absolute path on any exit. A lock this script
#    wrote whose process is gone is cleared and reported; any other lock stops the landing — another session may hold it
#    between its commands with a shell that has already exited, so only the owner may judge it stale.
# 2. The gates, chosen from the paths that changed: always the type check and the structure / import / path gates; the
#    movie gates when a painter or the canvas changed; the Lean gates when a .lean file or the sealed-registry table
#    changed; the manifest when package.json changed; the site build when .vitepress or src/ui changed.
# 3. The bootstrap verify the pre-commit hook runs, BEFORE staging — it regenerates the README abstract and the svg, and a
#    file regenerated after staging would be left out of the commit.
# 4. Commit from the message file (the pre-commit hook runs; it is never bypassed), push, and the push output in full.
#    GitHub's "Bypassed rule violations … Cannot update this protected ref" is the main ruleset logging the owner's
#    bypass, not a refusal — the landing is judged by HEAD equalling origin/main afterwards.
# 5. The Pages deploy for that exact SHA, found by SHA and watched to its conclusion.
set -uo pipefail
ROOT=$(git rev-parse --show-toplevel) || exit 1
cd "$ROOT" || exit 1
LOCK="$ROOT/.git/ceccec-checkout.lock"
LOGS="$ROOT/.vitepress/cache/land"
MSG=""; ADD=(); EXTRA=(); DEPLOY=1
while [ $# -gt 0 ]; do
  case "$1" in
    -m) MSG="${2:-}"; shift 2 ;;
    --add) ADD+=("${2:-}"); shift 2 ;;
    --gate) EXTRA+=("${2:-}"); shift 2 ;;
    --no-deploy) DEPLOY=0; shift ;;
    *) echo "land: unknown argument $1"; exit 2 ;;
  esac
done
[ -n "$MSG" ] && [ -s "$MSG" ] || { echo "land: -m <message-file> is required and must not be empty"; exit 2; }
[ "$(git rev-parse --abbrev-ref HEAD)" = main ] || { echo "land: not on main"; exit 1; }

# 1 — the lock
if [ -e "$LOCK" ]; then
  held=$(cat "$LOCK")
  pid=$(awk '{print $1}' "$LOCK")
  if [ "$(awk '{print $2}' "$LOCK")" = land ] && ! ps -p "$pid" >/dev/null 2>&1; then
    echo "land: clearing its own lock, whose process $pid is gone — $held"
    rm -f "$LOCK"
  else
    echo "land: STOP — the checkout is locked: $held"
    exit 1
  fi
fi
echo "$$ land $(date -u +%FT%TZ)" > "$LOCK"
trap 'rm -f "$LOCK"' EXIT

# 2 — the gates the change calls for
changed=$( { git diff --name-only HEAD; for p in ${ADD[@]+"${ADD[@]}"}; do echo "$p"; done; } | sort -u)
[ -n "$changed" ] || { echo "land: nothing to land"; exit 0; }
untracked=$(git ls-files --others --exclude-standard | grep -vxF -f <(printf '%s\n' ${ADD[@]+"${ADD[@]}"} "") || true)
[ -n "$untracked" ] && { echo "land: untracked and NOT landed (pass --add to include):"; printf '  %s\n' $untracked; }
# enforcement:trinity always: the Pages build runs it inside docs:build, so a finding it makes would otherwise surface
# only after the push, as a red deploy (it did: a .mjs under scripts/ passed every gate here and failed the build)
gates=(check:types verify:structure verify:imports verify:paths verify:side-effects verify:barrel verify:comments enforcement:trinity)
grep -qE '^src/(quantum|thunder/movie|mountain|fire)/|^\.vitepress/lib/movie' <<<"$changed" && gates+=(verify:movie verify:power)
grep -qE '\.lean$|^src/pair/formal/proofs/' <<<"$changed" && gates+=(verify:lean verify:lean-latex verify:lean-registry verify:lean-arbiter)
grep -qxF package.json <<<"$changed" && gates+=(manifest:check)
grep -qE '^\.vitepress/|^src/ui/' <<<"$changed" && gates+=(docs:build)
gates+=(${EXTRA[@]+"${EXTRA[@]}"})
mkdir -p "$LOGS"
# Generated files are regenerated from their sources first, so their gates judge the tree being landed: MANIFEST.md
# is written from package.json (manifest:check refuses a drifted one and names this command).
if grep -qxF package.json <<<"$changed"; then
  npm run -s manifest > "$LOGS/manifest.log" 2>&1 || { echo "✗ npm run manifest — the last lines of $LOGS/manifest.log:"; tail -25 "$LOGS/manifest.log"; exit 1; }
  echo "✓ manifest regenerated from package.json"
fi
echo "land: $(wc -l <<<"$changed" | tr -d ' ') path(s) · gates: ${gates[*]}"
for g in "${gates[@]}"; do
  if npm run -s "$g" > "$LOGS/$g.log" 2>&1; then
    echo "✓ $g"
  else
    echo "✗ $g — the last lines of $LOGS/$g.log:"
    tail -25 "$LOGS/$g.log"
    exit 1
  fi
done
grep -hE "tightened, recorded" "$LOGS"/*.log 2>/dev/null | sed 's/^ */  ratchet /'

# 3 — regenerate what the hook regenerates, before staging
if ! node --experimental-strip-types src/pair/enforcement/script/cli/bootstrap/index.ts verify > "$LOGS/pre-commit.log" 2>&1; then
  echo "✗ the pre-commit verify — the last lines of $LOGS/pre-commit.log:"
  tail -25 "$LOGS/pre-commit.log"
  exit 1
fi

# 4 — commit, push, and check the landing by the refs themselves
git add -u
for p in ${ADD[@]+"${ADD[@]}"}; do git add -- "$p" || exit 1; done
echo "land: staged —"; git diff --cached --stat | sed 's/^/  /'
git commit -q -F "$MSG" || { echo "✗ the commit was refused (the hook's output is above)"; exit 1; }
sha=$(git rev-parse HEAD)
out=$(git push origin main 2>&1); rc=$?
printf '%s\n' "$out" | grep -vE '^✓' | sed 's/^/  push: /'
[ $rc -eq 0 ] || { echo "✗ the push failed (exit $rc)"; exit 1; }
git fetch -q origin
[ "$(git rev-parse origin/main)" = "$sha" ] || { echo "✗ origin/main is $(git rev-parse --short origin/main), not $(git rev-parse --short "$sha")"; exit 1; }
echo "land: $(git log --oneline -1) — on origin/main"

# 5 — the deploy of this exact SHA
[ "$DEPLOY" = 1 ] || exit 0
command -v gh >/dev/null || { echo "land: gh is not installed — the deploy was not watched"; exit 0; }
id=""
for _ in $(seq 1 40); do
  id=$(gh run list --workflow deploy.yml --branch main --limit 20 --json databaseId,headSha -q ".[] | select(.headSha == \"$sha\") | .databaseId" 2>/dev/null | head -1)
  [ -n "$id" ] && break
  sleep 15
done
[ -n "$id" ] || { echo "✗ no deploy run appeared for $sha within ten minutes"; exit 1; }
gh run watch "$id" --exit-status --interval 30 >/dev/null 2>&1
verdict=$(gh run view "$id" --json conclusion,jobs -q '"\(.conclusion) — " + ([.jobs[] | "\(.name): \(.conclusion)"] | join(", "))')
echo "land: deploy $id — $verdict"
gh run list --branch main --limit 10 --json headSha,name,status,conclusion -q ".[] | select(.headSha == \"$sha\") | \"  \(.name): \(.status) \(.conclusion)\""
case "$verdict" in success*) exit 0 ;; *) exit 1 ;; esac
