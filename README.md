# Limitless – Reference clone

This project serves the **exact reference site** (from `example.html`) so layout, style, and animations match [Limitless](https://limitless.framer.photos/) precisely.

## How it works

- **Root (`/`)** redirects to **`/example.html`**.
- **`public/example.html`** is the reference site HTML (copied from your `example.html`). It is served as-is, so you see the same design, Framer animations, and behavior as when you open `example.html` in the browser.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3077](http://localhost:3077). You will be redirected to `/example.html`, which shows the reference site.

## Build

```bash
npm run build
npm start
```

## Optional: React clone

The codebase also includes a React/Next.js clone in **`src/app/`** and **`src/components/`**. To serve that instead of the reference HTML, remove or comment out the `redirects()` in `next.config.ts`. The React version approximates the reference; the exact match is the served `example.html`.
