# Zenodo API Setup

## Quick Setup

### Option 1: Using ~/.zenodo file (Recommended)

```bash
# 1. Get your Zenodo token from https://zenodo.org/account/settings/applications/
# 2. Create ~/.zenodo with just the token:

echo "your_zenodo_api_token_here" > ~/.zenodo

# 3. Publish:
node scripts/zenodo-publish.mjs --live
```

### Option 2: Using environment variable

```bash
# Set token in environment:
export ZENODO_TOKEN=your_zenodo_api_token_here

# Publish:
node scripts/zenodo-publish.mjs --live
```

## Getting Your Zenodo Token

1. Go to: https://zenodo.org/account/settings/applications/
2. Click: **"New token"**
3. Name it: `Quantum Proof Arc`
4. Select scope: **`deposit:write`** (required for uploads)
5. Click: **Generate**
6. Copy the token

## Publishing

```bash
# Method 1: ~/.zenodo file (one-time setup)
echo "your_token" > ~/.zenodo
node scripts/zenodo-publish.mjs --live

# Method 2: Environment variable
ZENODO_TOKEN=your_token node scripts/zenodo-publish.mjs --live
```

## Verify Publication

After running the script:
1. Visit: https://zenodo.org/me/uploads
2. You should see 5 new deposits:
   - Quantum Wave System (all 70 waves)
   - Clay Millennium Proofs (6 theorems)
   - Patent Licensing Ecosystem
   - FTL-Optimized Gate System
   - Automation Infrastructure

3. Each will have a unique DOI (e.g., `10.5281/zenodo.XXXXXXX`)

## Security Notes

- The token in ~/.zenodo should have **`deposit:write` scope only**
- Never commit the token to Git
- ~/.zenodo is in .gitignore automatically
- Keep the token private

---

**Status**: Ready to publish. Set up your ~/.zenodo file and run:
```bash
node scripts/zenodo-publish.mjs --live
```
