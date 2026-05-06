# Tulsi Rathod — Portfolio

Personal portfolio site. Next.js 14 (App Router) + Tailwind CSS, dark theme.

## Run

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
```

## Deploy

Easiest: **Vercel** — push to GitHub and import the repo. Zero config.

## Structure

- `app/` — Next.js App Router pages, global styles
- `components/` — section components (Hero, About, Skills, Experience, Projects, Contact, Nav, Footer)
- Tailwind tokens live in `tailwind.config.ts`; accent color `#7c5cff`.

## Edit content

All copy is hardcoded in the section components — no CMS. Update text in:
- `components/Hero.tsx` — headline + intro
- `components/Experience.tsx` — `jobs` array
- `components/Projects.tsx` — `projects` array
- `components/Skills.tsx` — `groups` array
