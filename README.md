# Luminous Fest — Registration Site

A single-page registration site for **Luminous Fest**, DCSMAT's annual college feast.
Static HTML/CSS/JS — no build step, ready for GitHub Pages.

## File structure
```
luminous-fest/
├── index.html   # all page content
├── style.css    # design system (colors, type, layout, animation)
└── script.js    # scroll reveals, mobile nav, registration form logic
```

## 1. Put it on GitHub

```bash
cd luminous-fest
git init
git add .
git commit -m "Luminous Fest site"
git branch -M main
git remote add origin https://github.com/<your-username>/luminous-fest.git
git push -u origin main
```

## 2. Turn on GitHub Pages

1. On GitHub, open your repo → **Settings → Pages**.
2. Under "Build and deployment", set **Source** to `Deploy from a branch`.
3. Pick branch `main`, folder `/ (root)`, then **Save**.
4. Your site will be live in a minute or two at:
   `https://<your-username>.github.io/luminous-fest/`

## 3. Make the registration form actually collect entries

The form currently just shows a success message locally — it doesn't send data
anywhere yet, since GitHub Pages only hosts static files (no backend). Pick one:

**Option A — Formspree (fastest, free tier available)**
1. Create a form at [formspree.io](https://formspree.io) and copy your endpoint,
   e.g. `https://formspree.io/f/xxxxxxx`.
2. In `script.js`, set:
   ```js
   const FORM_ENDPOINT = "https://formspree.io/f/xxxxxxx";
   ```
3. Done — submissions will land in your Formspree dashboard and can email you.

**Option B — Google Form embed**
Swap the `<form id="regForm">` block in `index.html` for an `<iframe>` embed of
a Google Form. Simpler, but styling is limited to Google's own form theme.

**Option C — Your own backend**
Point `FORM_ENDPOINT` at any API you control that accepts a POST with form data.

## 4. Customize content

- **Dates, venue, event list** — edit directly in `index.html` (hero meta and
  the `.courses` section).
- **Colors** — all defined as CSS variables at the top of `style.css` under
  `:root`. Change `--maroon`, `--gold`, `--green` etc. to retheme everything.
- **Fonts** — Fraunces (display), Jost (body), DM Mono (labels/numerals),
  loaded from Google Fonts in `index.html`.
- **Gallery photos** — the four tiles in `.gallery__grid` are currently color
  blocks with captions; swap in real photos by adding
  `background-image: url("your-photo.jpg")` to each `.gallery__tile` in
  `style.css`, or replace with `<img>` tags.

## Notes
- Fully responsive down to mobile, with a slide-down nav on small screens.
- Respects `prefers-reduced-motion` — animations turn off automatically for
  users who've requested that.
- No frameworks or build tools — just open `index.html` in a browser to
  preview locally.
