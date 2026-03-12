# Toby's Desk

5th year dental exam revision website. Interactive flashcards and revision tools built from lecture slides and clinical knowledge.

## Tech Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- localStorage for persistence (no database)
- Deployed on Vercel (tobys-desk.vercel.app)

## Project Structure
- `src/data/` - Seed data for revision content (cysts, etc.)
- `src/context/` - React context providers for state management
- `src/components/` - Reusable UI components
- `src/app/` - Next.js App Router pages
- `public/images/` - Extracted slide images from lecture PDFs

## Content Pipeline
1. Ingest PDF lecture slides
2. Extract images using PyMuPDF (venv at /tmp/pdf-extract-venv)
3. Create typed data files with seed content
4. Build interactive components (flashcards, quizzes, etc.)
5. Settings pages allow users to edit/correct content

## Current Modules
- **Jaw Cysts** (`/jaw-cysts`) - 18 cyst types with clinical images and removal methods

## Adding New Content
- Add new data files in `src/data/`
- Create corresponding context provider in `src/context/`
- Add route under `src/app/[topic]/`
- Extract images to `public/images/[topic]/`
- Add topic card to homepage dashboard

## Commands
- `npm run dev` - Start dev server
- `npm run build` - Production build
- `npm run lint` - Run ESLint
