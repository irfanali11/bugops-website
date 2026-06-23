# Bugops — Agency Website (Frontend)

Premium portfolio website for **Bugops**, a custom web development and AI engineering agency.

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** (animations)
- **Lucide React** (icons)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, services, case studies, team, contact |
| `/services/web-development` | Web dev tiers (small business → enterprise) |
| `/services/[slug]` | AI service detail pages |
| `/work` | Case studies listing |
| `/work/[slug]` | Case study detail |
| `/book` | Qualification form + booking flow |

## What's Frontend-Only

- Contact and booking forms show success states locally (no API yet)
- Chat widget is a UI placeholder for the future RAG chatbot
- Stats and team are placeholder data — replace with real figures before launch

## Next Steps (Backend)

- Connect lead forms to API / CRM
- Embed Calendly on `/book`
- Implement RAG chatbot (`/api/chat` + vector DB)
- Headless CMS for case studies and copy
