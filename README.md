# Hannan Sayed — Portfolio

A clean, single-page React/Next.js portfolio for Hannan Sayed — Ethical Hacker |
Cybersecurity Aspirant, built with the Next.js App Router. It is ready for
Vercel Hobby hosting, with no custom server and no backend — contact is via
LinkedIn, GitHub, and a mailto link only.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Production build

```bash
npm run build
npm run start
```

## Deploy on Vercel

1. Create a GitHub repository and push this `site/` folder's contents to it
   (or push the folder as the repository root).
2. In Vercel, choose **Add New → Project** and import that repository.
3. No special build settings are needed — Vercel auto-detects Next.js.
   The default build command (`npm run build`) and output are sufficient.
4. Deploy, then use the Vercel URL on LinkedIn, or add a custom domain
   later in Vercel if wanted.

## Structure

- `app/page.js` — single-page portfolio: About, Education, Skills, Experience,
  Certifications & Training, Writeups, Contact
- `app/writeups/page.js` — writeups index page, ready to grow with future posts
- `app/layout.js` — shared header navigation and footer
- `app/globals.css` — styling, responsive on mobile and desktop
