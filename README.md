# Project 03 — Responsive Product Pricing Cards

A responsive SaaS pricing component built with HTML, CSS and JavaScript.

## Features
- Three pricing tiers: Starter, Pro and Business
- Monthly / yearly billing toggle
- Yearly pricing with 20% savings
- "Most Popular" ribbon on the Pro plan
- CSS hover transitions and card lift effects
- Responsive desktop, tablet and mobile layouts
- Accessible billing switch with `role="switch"` and `aria-checked`
- Clear feature lists and call-to-action links

## Files
- `index.html` — semantic page structure and pricing content
- `style.css` — layout, responsive breakpoints, card styles and hover effects
- `script.js` — JavaScript billing toggle and dynamic price updates

## Run locally
1. Extract the ZIP.
2. Open the folder in VS Code.
3. Right-click `index.html` and choose **Open with Live Server**.
4. Click the Monthly / Yearly switch and check all three prices update.

You can also open `index.html` directly in a modern browser.

## Test checklist
- Monthly is selected on initial load.
- Starter stays free in both billing modes.
- Pro changes from $19 to $15 per month.
- Business changes from $49 to $39 per month.
- The billing captions update with the toggle.
- The switch's accessible checked state changes.
- Hover over each card to see the transition.
- Resize the browser to check mobile and tablet layouts.
- Test each plan link; replace the sample email address `hello@example.com` with your own contact or real checkout destination before publishing.

## Publish with GitHub Pages
1. Create a public repository, e.g. `sneha-pricing-cards`.
2. Upload `index.html`, `style.css`, `script.js` and `README.md` to the repository root.
3. Commit the files to the `main` branch.
4. Open **Settings → Pages**.
5. Under Build and deployment, choose **Deploy from a branch**.
6. Select branch `main` and folder `/(root)`, then click **Save**.
7. Wait for GitHub Pages to publish your site.

## Suggested submission note
"Created a responsive SaaS pricing page featuring Starter, Pro and Business plans. Implemented a JavaScript monthly/yearly billing toggle that dynamically updates prices, along with CSS hover transitions, a popular-plan ribbon and responsive layouts for different screen sizes."

## Before submitting
Personalize the brand, pricing, contact links and content as needed. Understand the HTML, CSS and JavaScript so you can explain how the billing toggle updates the page.
