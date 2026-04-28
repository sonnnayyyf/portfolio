# Son Tran — Portfolio

Personal portfolio site for **Son Tran**, a software engineer working at the intersection of full-stack development and quality assurance. Currently a Software Engineer (Quality Assurance) Intern at ShopBack.

🌐 **Live site:** [sonnnayyyf.github.io](https://sonnnayyyf.github.io/)

---

## About

A single-page portfolio built with vanilla HTML, CSS, and JavaScript — no framework, no build step. Designed around a dark editorial aesthetic that pairs a characterful display serif (Fraunces) with a developer-coded monospace (JetBrains Mono), with phosphor green as a deliberate accent.

The site features:

- Hero section with live status, geo coordinates, and animated stagger-in
- About section with full prose and a terminal-style tech stack card
- Experience timeline with chronological work history (ShopBack, Intel capstone, RMIT)
- Project grid linking to detailed case study modals (Intel A2A, Smart Library, Vending Machine)
- Contact section with direct email and links to GitHub & socials
- Smooth scroll-triggered reveals via Intersection Observer
- Cursor-tracking glow effect (desktop only)
- Fully responsive — graceful breakpoints at 880px, 720px, 480px

## Tech Stack

- **HTML5** — semantic markup
- **CSS3** — custom properties, grid, flexbox, scroll animations
- **Vanilla JavaScript** — Intersection Observer, modal logic, no dependencies
- **Google Fonts** — Fraunces & JetBrains Mono
- **No build tools, no frameworks, no package manager**

## Project Structure

```
portfolio/
├── index.html      # Markup and content
├── styles.css      # All styling, theme variables, responsive rules
├── script.js       # Project case study data, modal logic, scroll reveals
└── README.md
```

## Running Locally

Clone the repo and open `index.html` directly in a browser:

```bash
git clone https://github.com/sonnnayyyf/sonnnayyyf.github.io.git
cd sonnnayyyf.github.io
open index.html        # macOS
xdg-open index.html    # Linux
start index.html       # Windows
```

Or serve it with any local web server if you want clean URLs and no `file://` warnings:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Then open `http://localhost:8000`.

## Editing Content

Most updates live in two places:

- **`index.html`** — copy in the hero, about prose, experience entries, project cards, and contact links.
- **`script.js`** — the `projects` object at the top contains the long-form case study content shown in modals. Each project has `meta`, `title`, `subtitle`, and a `sections` array.

To change the accent color, edit `--accent`, `--accent-dim`, and `--accent-line` at the top of `styles.css`. Everything cascades from there.

## Credits

- Typography: [Fraunces](https://fonts.google.com/specimen/Fraunces) by Undercase Type, [JetBrains Mono](https://www.jetbrains.com/lp/mono/) by JetBrains.
- Designed and built by Son Tran.

## License

© 2026 Son Tran. All rights reserved. The code is shared for reference; please don't repurpose the design wholesale for another personal portfolio.
