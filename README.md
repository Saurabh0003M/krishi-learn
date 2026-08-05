# KrishiLearn

**Government Sustainable Farming Platform** — a front-end prototype for a farmer support portal.

**Live:** https://saurabh0003m.github.io/krishi-learn/

A single-page informational platform that brings government agricultural schemes, subsidy
information, and learning resources into one place, with a farmer login and dashboard view.

## Scope

This is a **front-end prototype**. All pages are static HTML with vanilla JavaScript and
Tailwind utility classes — there is no backend, no database, and no external API integration.
The "AI-Powered Farming Assistant" section is a **UI mockup**: it captures crop-issue symptoms,
weather, and onset via a form, but does not currently send them anywhere or return a diagnosis.
It exists to demonstrate the intended interaction, not the model behind it.

## Sections

- **Comprehensive Farmer Support** — overview of the services the platform is designed to cover
- **Government Schemes & Subsidies** — directory of available programmes
- **Agricultural Resource Center** — reference material for crops, inputs, and practices
- **AI-Powered Farming Assistant** — symptom-intake form (interface only, see Scope above)
- **Free Learning Resources** — curated educational content for farmers

## Repository contents

| File | Purpose |
|---|---|
| `index.html` | Landing page with all public sections |
| `login.html` | Farmer login screen |
| `dashboard.html` | Post-login dashboard view |
| `script.js` | Interaction and navigation logic |
| `style.css` | Custom styling alongside Tailwind |

## Running locally

No build step or dependencies. Clone and open `index.html` in a browser:

```bash
git clone https://github.com/Saurabh0003M/krishi-learn.git
cd krishi-learn
```

## Roadmap

- Wire the farming assistant to a real model backend
- Replace the static scheme directory with a live government data source
- Persist farmer accounts behind the login

## License

MIT — see [LICENSE](LICENSE).
