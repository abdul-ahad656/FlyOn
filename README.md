# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  <div align="center">

  # Flyon

  Luxury travel, cinematic motion, and a landing page built to feel like a journey.

  <br />

  [![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
  [![GSAP](https://img.shields.io/badge/GSAP-Animation-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://gsap.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-UI-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

  <br />

  **A premium travel agency experience with a glassy navigation shell, anchored sections, and a scroll-synced flight system that carries the brand story across the page.**

  <br />

  [Quick start](#quick-start) · [What it includes](#what-it-includes) · [Project layout](#project-layout) · [Stack](#stack)

  </div>

  ---

  ## What is Flyon?

  Flyon is a luxury travel landing page built with **React 19**, **TypeScript**, and **Vite**. The current experience is a single-page site with a cinematic hero, an about section, a global flight animation layer, and a polished navigation/footer shell.

  The design leans into premium travel branding: smooth motion, glassmorphism, elegant typography, and a scroll-reactive plane/contrail system driven by custom scene logic.

  ---

  ## What it includes

  | Area | What you get |
  |------|--------------|
  | **Hero** | Bold headline, supporting copy, CTA area, live stats, and atmospheric background motion |
  | **About** | Brand story, luxury travel positioning, feature blocks, and a landing target for the flight animation |
  | **Flight system** | Scroll-synced global plane, contrail trail, hover/landing dynamics, and scene orchestration |
  | **Navigation** | Glass-style navbar with mobile menu and anchored section links |
  | **Layout** | Shared main layout with reusable header/footer framing |
  | **UI stack** | Tailwind CSS 4, Framer Motion, GSAP, Lucide icons, and reusable common components |

  **Stack:** React 19 · TypeScript · Vite · Tailwind CSS 4 · GSAP · Framer Motion · React Router DOM scaffold · SVG support via `vite-plugin-svgr`

  ---

  ## Quick start

  ### 1. Install dependencies

  ```bash
  npm install
  ```

  ### 2. Run the dev server

  ```bash
  npm run dev
  ```

  Open **http://localhost:5173**.

  ### 3. Build for production

  ```bash
  npm run build
  ```

  ### 4. Lint the codebase

  ```bash
  npm run lint
  ```

  ### 5. Preview the production build

  ```bash
  npm run preview
  ```

  ---

  ## Project layout

  | Path | Purpose |
  |------|---------|
  | `src/pages/` | Page entry points such as the home experience |
  | `src/layouts/` | Shared layout wrappers like the main site shell |
  | `src/components/hero/` | Hero section, background, content, and scroll indicator |
  | `src/components/about/` | About section content, visuals, and supporting features |
  | `src/components/flight/` | Global plane, trail, and flight orchestration components |
  | `src/components/layout/` | Navbar and footer used across the site |
  | `src/hooks/` | Animation and scene hooks for hero, about, and flight behavior |
  | `src/scene/` | Flight physics, motion config, renderer helpers, and runtime logic |
  | `src/data/` | Navigation and content data used by the UI |
  | `src/styles/` | Global styles, typography, variables, and animation utilities |
  | `src/assets/` | Fonts, illustrations, textures, and other static design assets |
  | `public/` | Public-facing static files |

  ---

  ## Stack

  - React 19
  - TypeScript
  - Vite
  - Tailwind CSS 4
  - GSAP
  - Framer Motion
  - Lucide React
  - React Router DOM
  - Embla Carousel React
  - `vite-plugin-svgr`

  ---

  ## Notes

  - The current app is centered around a single landing route, with the main experience assembled in [src/pages/Home.tsx](src/pages/Home.tsx).
  - The flight animation system is driven from the `src/scene/` and `src/components/flight/` layers.
  - Section anchors are wired for `#home` and `#about`, with navigation entries prepared for future anchored sections.

  ---

  <div align="center">

  <sub>Flyon · Luxury travel agency experience built for motion, clarity, and premium presentation</sub>

  </div>
