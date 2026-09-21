# Doeun — Developer Portfolio

A modern, responsive personal portfolio built with React, Vite, and Tailwind CSS. Featured project: **School Management System** (Flutter · Node.js/Express · MySQL).

## Tech Stack

- React 18 + Vite
- Tailwind CSS
- Framer Motion (animations)
- lucide-react (icons)

## Getting Started

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

The production build is output to `dist/`.

### Deployment

The `dist/` folder is a static site and can be deployed to any static host:

- **Vercel / Netlify**: connect the repo, build command `npm run build`, output directory `dist`
- **GitHub Pages**: run `npm run build`, then push the contents of `dist/` to a `gh-pages` branch (or use an action like `peaceiris/actions-gh-pages`)
- **Any static host**: upload the contents of `dist/` after building

## Project Structure

```
src/
├── assets/            (place static images/fonts you add here)
├── components/        UI components, one per section
├── data/               Editable content — edit these files, not the components
│   ├── profile.js      Name, role, tagline, stats, links, CV path
│   ├── skills.js        Skills grouped by category
│   ├── projects.js      Featured project + project gallery
│   └── experience.js    Timeline entries
├── hooks/
│   └── useTheme.js      Dark/light mode logic
├── App.jsx
├── main.jsx
└── index.css
public/
├── cv/                  Put your CV PDF here
└── images/              Put your profile photo & project screenshots here
```

## Editing Your Content

Almost everything you need to change lives in `src/data/` — you shouldn't need to touch component code for routine updates.

### 1. Replace your profile photo

Add your photo at `public/images/profile.jpg` (or update the path in `src/data/profile.js` → `profileImage`).

### 2. Add project screenshots

1. Add image files to `public/images/projects/`.
2. In `src/data/projects.js`, set each project's `image` field (gallery card) and, for the featured project, add entries to `featuredProject.screenshots`.

### 3. Add your GitHub / demo links

In `src/data/projects.js`, fill in the `github` and `demo` fields for each project, and `github` / `demo` / `demoVideo` on `featuredProject`. Leave a field as `''` to keep that button hidden/disabled until you have a real link.

### 4. Replace your CV

Put your CV PDF at `public/cv/Doeun-CV.pdf` (matches the default `cvPath` in `src/data/profile.js`). Change the filename/path there if you'd rather use a different name.

### 5. Edit personal information

- **Name, role, tagline, stats, social links, CV path** → `src/data/profile.js`
- **Skills** → `src/data/skills.js`
- **Experience timeline** → `src/data/experience.js`
- **Education** → currently in `src/components/Education.jsx` (degree/year fields); wire to `profile.js` if you want it fully data-driven
- **Contact form behavior** → `src/components/Contact.jsx`. The form currently validates and logs to console; connect it to a backend endpoint or a service like Formspree/EmailJS to actually deliver messages

### 6. Dark / light mode

Handled automatically by `src/hooks/useTheme.js` (respects system preference, remembers the user's choice). No setup needed.

## Notes

- No real GitHub/LinkedIn/demo URLs, CV content, or employer history were invented — all of these are left as clearly marked placeholders in `src/data/`. Fill them in with your real information before sharing the site.
- The contact form is UI-only; it does not send email until you connect a backend or third-party form service.
