# Auth Page

Polished, two-panel sign-in screen inspired by the JSMastery design. Includes a security-focused marketing panel, modern gradient/glass styling, inline validation feedback, and social sign-in buttons (Google, GitHub).

## Structure
- `index.html` — main page layout and content.
- `assets/styles/main.css` — styling, theming, and responsive rules.
- `assets/scripts/main.js` — password toggle and lightweight validation UX.

## Social sign-in (Google / GitHub)
The social buttons redirect to configured OAuth start URLs. Set your endpoints in `index.html` **before** `main.js` loads:
```html
<script>
  window.AUTH_ROUTES = {
    google: 'https://your-api.com/auth/google',
    github: 'https://your-api.com/auth/github',
  };
</script>
<script src="assets/scripts/main.js"></script>
```
By default they point to `/auth/google` and `/auth/github`; update to match your backend routes or gateway.

## Running locally
Open `index.html` directly in your browser, or serve the folder if you prefer a local server:
```bash
npx serve .
```

## Customization
- Update copy and highlights in `index.html` to match your product.
- Tweak colors/spacing in `assets/styles/main.css` (CSS variables at the top).
- Extend validation or integrate real auth flows in `assets/scripts/main.js`.
