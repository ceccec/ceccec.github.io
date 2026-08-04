# How to Compile LaTeX to PDF

## Option 1: Local LaTeX Installation (Recommended for Journals)

### macOS (Homebrew)
```bash
brew install basictex  # or mactex for full installation
pdflatex clay_millennium_sealed.tex
```

### Ubuntu/Linux
```bash
sudo apt-get install texlive-latex-base texlive-fonts-recommended
pdflatex clay_millennium_sealed.tex
```

### Windows
- Download and install MiKTeX: https://miktex.org/download
- Run: `pdflatex clay_millennium_sealed.tex`

---

## Option 2: Online LaTeX Compiler (No Installation)

### Overleaf (Free & Recommended)
1. Go to https://www.overleaf.com
2. Create a new blank project
3. Upload `clay_millennium_sealed.tex`
4. Click "Recompile"
5. Download PDF from the menu

### TeXlive Online
https://www.tutorialspoint.com/online_latex_editor.php

---

## Option 3: From Markdown to PDF (Alternative)

```bash
# Install pandoc (if not already installed)
brew install pandoc  # macOS
# or
sudo apt-get install pandoc  # Linux

# Convert markdown to PDF directly
pandoc clay_millennium_sealed.md -o clay_millennium_sealed.pdf
```

---

## Output

After compiling, you'll have:
- `clay_millennium_sealed.pdf` (ready for journal submission)

---

## For Journal Submission

When submitting to a journal:
1. Submit the **PDF file** (`clay_millennium_sealed.pdf`)
2. Also provide the source **LaTeX file** (journals often ask for both)
3. Include the submission metadata:
   - Title: "All Seven Clay Millennium Problems Sealed via Universal σ-Involution"
   - Authors: Tsvetan Rouschev
   - Affiliation: PSG Bulgaria
   - Email: ceci@psg.bg

---

## Quick Start (if you have LaTeX installed)

```bash
cd /Users/ceci/github/ceccec/ceccec.github.io/
pdflatex clay_millennium_sealed.tex
```

This will generate `clay_millennium_sealed.pdf` in the same directory.

