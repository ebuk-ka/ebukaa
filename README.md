# Ebuka Okolo — Portfolio

Personal portfolio built with React, React Router, and Vite. Includes an introduction, services carousel, technology stack, FAQ, contact links, and a separate project gallery.

## Local development

Use Node.js 22.12+ or 24+ and npm.

```sh
npm ci
npm run dev
```

## Checks and production build

```sh
npm run lint
npm run build
npm run preview
```

The production output is written to `dist/`. Deploy that directory to a static host configured to serve `index.html` for application routes such as `/projects`. Unknown application routes show the portfolio’s 404 page.

## Updating content

- `src/components/Hero.jsx` and `src/components/About.jsx`: introduction and services.
- `src/components/TechStack.jsx`: technologies and tools.
- `src/pages/Projects.jsx`: project descriptions, screenshots, and URLs.
- `src/components/FAQ.jsx`: questions and answers.
- `src/components/Contact.jsx`: email and WhatsApp details.
- `src/data/socialLinks.js`: shared social profile URLs.

Each component has an accompanying CSS file. Shared fonts, layout defaults, focus styles, and reduced-motion behavior live in `src/index.css`. The site uses one fixed color scheme without theme settings.

Project screenshots use resized, compressed JPEG copies named `*-optimized.jpg`; the original images are retained for future updates. Reveal animations use `src/hooks/useReveal.js`, and the services carousel advances only when the visitor chooses Previous or Next.
