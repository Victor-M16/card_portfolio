# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page personal portfolio for Victor Mjimapemba, built with React 18 + Vite 4, Tailwind CSS 3, Framer Motion, and React Three Fiber/Drei (Three.js). Plain JavaScript/JSX; there is no TypeScript build and no test suite. `package.json` pins Node `24.x` (the README says 18+).

## Commands

```bash
npm install
npm run dev       # Vite dev server at http://localhost:5173
npm run build     # production build into dist/
npm run preview   # serve the built dist/
npm run lint      # eslint on src/, --max-warnings 0 (any warning fails)
```

## Architecture

- **Entry:** `index.html` → `src/main.jsx` → `src/App.jsx`. `App` stacks the sections in a fixed order inside a `BrowserRouter`; no routes are defined, and navigation is anchor scrolling to section ids. The hero plays `public/introvid.mp4` as a background and falls back to the Tailwind `bg-hero-pattern` image if the video errors.
- **Content is data-driven from `src/constants.js`.** Nav links, services, technologies, experiences, testimonials and projects are arrays there, and components map over them. To change portfolio content, edit `constants.js`, not the components. `Companies` and `Experience` both render from `experiences`. Images are imported through the barrel `src/assets/index.js`, so a new image has to be exported there before `constants.js` can use it. `src/TSconstants.ts` is an unused TypeScript sketch of the same data.
- **Sections are wrapped with the `SectionWrapper(Component, idName)` HOC** (`src/hoc/SectionWrapper.jsx`). It adds the shared padding, a Framer Motion stagger container that animates once on scroll into view, and a `hash-span` anchor with `id={idName}`. That id is what `navLinks[].id` in `constants.js` targets (`about`, `work`, `contact`, …). Sections export the wrapped component as default and are re-exported from `src/components/index.js`.
- **Animation variants** (`textVariant`, `fadeIn`, `slideIn`, `staggerContainer`, …) live in `src/utils/motion.js`. Reuse them rather than defining inline variants.
- **3D canvases** are in `src/components/canvas/` (`Earth`, `Computers`, `Ball`, `Stars`). The GLTF models load at runtime from `public/` (`./planet/scene.gltf`, `./desktop_pc/scene.gltf`).
- **Styling:** Tailwind with custom theme colors (`primary`, `secondary`, `tertiary`, `black-100`, …), a `card` shadow and an `xs` breakpoint in `tailwind.config.js`. Shared typography/padding class strings are in `src/styles.js` (`styles.sectionHeadText`, `styles.padding`, …). Global CSS and the timeline overrides are in `src/index.css`.
- **Contact form** (`src/components/Contact.jsx`) sends through EmailJS. The service/template/public-key IDs are hardcoded constants in that file. `.env` holds `REACT_APP_*` variables, but Vite exposes only `VITE_*` variables via `import.meta.env`, so those are currently unused.
- **Disabled sections:** `Dashboard` (Recharts) and `Feedbacks` are implemented but not rendered (`Dashboard` is commented out in `App.jsx`, along with its nav link in `constants.js`).
