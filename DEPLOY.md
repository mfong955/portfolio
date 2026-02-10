# Deployment Instructions

This guide will help you deploy your portfolio site to GitHub Pages.

## Quick Start

### 1. Extract Figures from Your Astrophysics Paper

The Visual Communication page references three figures from your paper. You need to extract these and save them to the `assets/images/figures/` folder:

**Required files:**
- `figure1-bias-profiles.png` - Figure 1 from the paper (the 6-panel bias profiles)
- `figure4-2d-parameter-space.png` - Figure 4 (the 6×6 grid of 2D parameter space maps)
- `figure9-phase-space.png` - Figure 9 (the 3-panel phase space velocity distributions)

**How to extract:**
1. Open your paper PDF: `project/user_resources/A natural boundary of dark matter haloes revealed around the.pdf`
2. Use a PDF tool (Adobe Acrobat, Preview on Mac, or online tools like pdf2png.com)
3. Export each figure at high resolution (at least 1200px wide recommended)
4. Save to `assets/images/figures/` with the exact filenames above

**Alternative:** If you have the original matplotlib source files, you can regenerate the figures at web-optimized resolutions.

### 2. Test Locally (Optional but Recommended)

If you have Ruby and Jekyll installed:

```bash
# Install dependencies
bundle install

# Run local server
bundle exec jekyll serve

# View at http://localhost:4000
```

If you don't have Ruby/Jekyll, you can skip to deploying directly to GitHub Pages.

### 3. Deploy to GitHub Pages

**Option A: Automatic (Recommended)**

1. Go to your repository on GitHub: https://github.com/mfong955/portfolio
2. Navigate to **Settings** → **Pages**
3. Under "Source", select **Deploy from a branch**
4. Select **main** branch and **/ (root)** folder
5. Click **Save**
6. Wait 2-3 minutes for the build to complete
7. Your site will be live at: `https://mfong955.github.io/portfolio`

**Option B: Manual Push**

```bash
# Stage all changes
git add .

# Commit
git commit -m "Initial portfolio site setup"

# Push to GitHub
git push origin main
```

Then follow Option A steps 1-7 to enable GitHub Pages.

## File Structure

```
portfolio/
├── _config.yml              # Site configuration
├── _data/
│   └── navigation.yml       # Navigation configuration
├── _layouts/
│   └── default.html         # Main layout template
├── _includes/
│   ├── header.html          # Navigation header
│   ├── sidebar.html         # Sidebar navigation
│   └── footer.html          # Site footer
├── assets/
│   ├── css/main.css         # All styles
│   ├── js/toc.js            # Table of contents script
│   └── images/figures/      # Research figures
├── samples/                 # Portfolio sample pages
├── index.html               # Home page
├── about.html               # About/Resume page
├── ai-tools.html            # AI documentation tools
├── Gemfile                  # Ruby dependencies
└── DEPLOY.md                # This file
```

## Customization

### Updating Content

All content is in HTML files with YAML front matter. To update text:

1. Find the relevant `.html` file
2. Edit the text between HTML tags
3. Commit and push changes

### Changing Colors

Edit the CSS variables at the top of `assets/css/main.css`:

```css
:root {
  --color-primary: #2563EB;    /* Main accent color */
  --color-text: #18181B;       /* Primary text */
  --color-bg: #FAFAFA;         /* Background */
  /* ... etc */
}
```

### Adding a Headshot

1. Add your photo to `assets/images/` (e.g., `headshot.jpg`)
2. Update `index.html` to include an image in the hero section

### Adding New Samples

1. Create a new file in `samples/` (e.g., `new-sample.html`)
2. Copy the structure from an existing sample page
3. Add a link in `_includes/header.html` in the dropdown menu
4. Add a card in `index.html` in the samples grid

## Troubleshooting

### Site not building?

1. Check GitHub Actions tab for build errors
2. Ensure `_config.yml` has no syntax errors
3. Make sure all file paths are correct

### Figures not showing?

1. Verify files exist in `assets/images/figures/`
2. Check filenames match exactly (case-sensitive)
3. Use PNG or JPG format

### Styles look wrong?

1. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
2. Check for CSS syntax errors in `assets/css/main.css`

## Next Steps (Phase 2 Ideas)

These aren't implemented yet, but you mentioned wanting to add later:

- [ ] Enhanced animations (subtle hover effects, page transitions)
- [ ] Additional writing samples
- [ ] Blog or "documentation process" section
- [ ] Testimonials or feedback quotes
- [ ] Analytics integration (Google Analytics or Plausible)

## Support

If you run into issues:
1. Check GitHub Pages documentation: https://docs.github.com/en/pages
2. Jekyll documentation: https://jekyllrb.com/docs/
