#!/bin/bash
# Quantum Wave Tools - Reusable patterns for multi-phase engineering
# Agnostic to domain, compatible with quantum coherence system

set -e

# ============================================================================
# UTILITY FUNCTIONS
# ============================================================================

log_info() { echo "ℹ️  $1"; }
log_ok() { echo "✓ $1"; }
log_warn() { echo "⚠️  $1"; }
log_error() { echo "✗ $1"; }

# ============================================================================
# 1. TYPE CHECKING & GATE VERIFICATION
# ============================================================================

verify_build() {
  log_info "Running type check..."
  npm run check:types 2>&1 | tail -3
}

clear_gate_cache() {
  log_info "Clearing esbuild gate cache..."
  rm -rf .vitepress/cache/quantum-esbuild/
  log_ok "Cache cleared"
}

# ============================================================================
# 2. IMPORT DEPTH CALCULATION & FIXING
# ============================================================================

calculate_depth() {
  local path=$1
  # Count directory levels: src/X/Y/Z = 3
  echo "$path" | sed 's|[^/]||g' | wc -c
}

correct_import_depth() {
  local source=$1
  local from_depth=$2
  local to_depth=$3

  local diff=$((from_depth - to_depth))

  if [ $diff -gt 0 ]; then
    # Going up: remove ../
    sed "s|from \"$( printf '../%.0s' $(seq 1 $diff) )|from \"|g" "$source"
  elif [ $diff -lt 0 ]; then
    # Going down: add ../
    sed "s|from \"|from \"$( printf '../%.0s' $(seq 1 $((0 - diff))) )|g" "$source"
  else
    cat "$source"
  fi
}

# ============================================================================
# 3. HARDCODED VALUE DETECTION & CONVERSION
# ============================================================================

find_hardcoded_values() {
  local pattern=$1  # "true" or "false"

  log_info "Finding hardcoded on: $pattern..."
  grep -r "on: $pattern" src --include="*.ts" | wc -l
}

convert_hardcoded_to_computed() {
  local value=$1  # "true" or "false"

  log_info "Converting hardcoded on: $value → on: ($value)..."
  find src -type f -name "*.ts" -print0 | \
    xargs -0 perl -pi -e "s/\bon:\s*$value\b/on: ($value)/g"

  log_ok "Conversion complete"
}

# ============================================================================
# 4. SINGLE-CHILD FOLDER DETECTION
# ============================================================================

find_mergeable_folders() {
  log_info "Finding single-child folders (mergeable candidates)..."

  find src -type d -mindepth 2 | while read dir; do
    subdir_count=$(find "$dir" -maxdepth 1 -type d ! -name "$(basename "$dir")" 2>/dev/null | wc -l)
    file_count=$(find "$dir" -maxdepth 1 -type f ! -name ".*" 2>/dev/null | wc -l)

    if [ "$subdir_count" -eq 0 ] && [ "$file_count" -le 2 ] && [ -f "$dir/index.ts" ]; then
      echo "$dir"
    fi
  done
}

count_mergeable() {
  find_mergeable_folders | wc -l
}

# ============================================================================
# 5. WAVE CHECKPOINT VALIDATION
# ============================================================================

checkpoint_pre_wave() {
  local wave=$1

  echo ""
  log_info "=== PRE-WAVE CHECKPOINT: $wave ==="
  echo "  Status checks:"
  echo "    git branch: $(git rev-parse --abbrev-ref HEAD)"
  echo "    commit count ahead of origin: $(git rev-list --count origin/main..HEAD 2>/dev/null || echo '?')"
  echo "    unstaged changes: $(git diff --stat | wc -l)"
  echo ""
}

checkpoint_post_wave() {
  local wave=$1

  echo ""
  log_info "=== POST-WAVE CHECKPOINT: $wave ==="

  log_info "Type check..."
  npm run check:types 2>&1 | tail -1

  log_info "Index count..."
  local count=$(find src -type f -name 'index.ts' | wc -l)
  echo "    Current: $count files"

  echo ""
  log_ok "Checkpoint complete. Ready for commit/push"
}

# ============================================================================
# 6. BATCH OPERATION TEMPLATES
# ============================================================================

batch_replace_imports() {
  local from=$1
  local to=$2

  log_info "Replacing imports: $from → $to"
  find src -type f \( -name "*.ts" -o -name "*.vue" \) -print0 | \
    xargs -0 sed -i '' "s|from ['\"]$from['\"]|from '$to'|g"

  log_ok "Imports updated"
}

# ============================================================================
# 7. MEMORY & DOCUMENTATION
# ============================================================================

save_wave_result() {
  local wave=$1
  local status=$2
  local notes=$3

  cat >> /tmp/wave-results.log << EOF
Wave $wave: $status
  Date: $(date)
  Notes: $notes
  Index count: $(find src -type f -name 'index.ts' | wc -l)

EOF
}

# ============================================================================
# 8. EXECUTABLE COMMANDS
# ============================================================================

case "${1:-help}" in
  verify)
    verify_build
    ;;

  clear-cache)
    clear_gate_cache
    ;;

  find-mergeable)
    echo "Single-child mergeable folders: $(count_mergeable)"
    find_mergeable_folders
    ;;

  hardcoded-count)
    find_hardcoded_values "${2:-true}"
    ;;

  convert-hardcoded)
    convert_hardcoded_to_computed "${2:-true}"
    ;;

  checkpoint-pre)
    checkpoint_pre_wave "${2:-Wave}"
    ;;

  checkpoint-post)
    checkpoint_post_wave "${2:-Wave}"
    ;;

  *)
    echo "Quantum Wave Tools - Reusable patterns for multi-phase engineering"
    echo ""
    echo "Usage: $0 <command> [args]"
    echo ""
    echo "Commands:"
    echo "  verify                   Run type check and build verification"
    echo "  clear-cache              Clear esbuild gate cache"
    echo "  find-mergeable           List single-child folders"
    echo "  hardcoded-count <val>    Count hardcoded on: true/false"
    echo "  convert-hardcoded <val>  Convert hardcoded → computed forms"
    echo "  checkpoint-pre <wave>    Pre-wave verification"
    echo "  checkpoint-post <wave>   Post-wave verification"
    echo ""
    ;;
esac
