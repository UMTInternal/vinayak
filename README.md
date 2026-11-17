# Vinayak Relocation: React website

React 19 + React Router 7 + Vite.

## Run locally

```bash
npm install      # first time only
npm run dev      # opens http://localhost:5173
```

## Pages

| URL | Page |
| --- | --- |
| `/` | Home |
| `/about` | About us |
| `/services` | All services |
| `/services/household-shifting` | Service detail (also `office-relocation`, `vehicle-transport`, `warehousing-storage`, `logistics-cargo`, `industrial-shifting`) |
| `/service-areas` | Service areas + map |
| `/gallery` | Project photos + certificates |
| `/reviews` | Customer reviews |
| `/faq` | FAQ |
| `/contact` | Contact + quote form |
| anything else | 404 page |

## Editing content

All text (phones, email, address, services, areas, reviews, FAQs) is in **`src/data/site.js`**.
Images are in **`public/img/`**.

## Deploy (live domain)

```bash
npm run build
```

Upload everything inside **`dist/`** to the website root (`public_html`).
`dist/.htaccess` is included so links like `/services/household-shifting` work on Apache/cPanel hosting.

## Test the build on XAMPP (sub-folder)

```bash
npm run build -- --base=/vinayakrelocation/dist/
```

Then open `http://localhost/vinayakrelocation/dist/`.
(Rebuild with plain `npm run build` before uploading to the live domain.)

## Project structure

```
src/
  main.jsx                 routes
  data/site.js             all content
  lib/whatsapp.js          WhatsApp message helper
  styles/global.css        all styles
  components/
    Layout.jsx             header + footer wrapper, scroll & reveal animations
    Header.jsx  Footer.jsx  Icon.jsx  Seo.jsx
    sections/              reusable page sections (services, process, FAQ, form…)
  pages/                   one file per page
```
