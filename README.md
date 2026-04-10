# Stamp Reuse MVP

A practical MVP for **document stamping + real-world stamp extraction**.

## What this version does
- Generate a clean transparent digital stamp from templates
- Upload a photo of a stamped paper document and extract the stamp
- Save generated or extracted stamps to a lightweight session library
- Upload an image or PDF, drag the stamp to any position, and export the final file

## Core stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- Prisma + PostgreSQL
- Sharp for extraction / image compositing
- pdf-lib for PDF stamping
- react-pdf + pdfjs-dist for PDF preview

## Run locally
```bash
npm install
cp .env.example .env
npm run db:push
npm run dev
```

## Main routes
- `/` landing page
- `/workspace` full workflow: generate / extract / stamp / export
- `/pricing` pricing page

## Important implementation note
This MVP already supports the main workflow. The extraction engine is intentionally simple and optimized for common red / blue stamp photos on light paper backgrounds. For tougher photos, add OpenCV-based contour detection, perspective correction, and a brush-based cleanup tool in the next iteration.

## Next recommended upgrades
1. Account system + persistent cloud asset library
2. Better photo extraction with perspective correction
3. Multi-stamp / multi-page workflow persistence
4. Payment gating around extract/export actions
5. Team library and approval flows
