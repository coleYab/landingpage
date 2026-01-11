# Next.js Landing Page (App Router)

A marketing/landing site built with Next.js App Router. Animated sections, forms, and an assessment flow live under `src/`.

## Requirements

- Node.js (LTS recommended)
- Package manager: pnpm (or npm/yarn/bun)

## Quick Start

Install dependencies and run the dev server:

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000 to view the site.

Production build and start:

```bash
pnpm build
pnpm start
```

## Project Structure

- App entry and layouts: [src/app](src/app)
- Common UI blocks: [src/common](src/common)
- Page components: [src/components](src/components)
- API routes: [src/app/api](src/app/api)
- Static assets: [public](public)
- Global styles: [src/app/globals.scss](src/app/globals.scss), [src/styles/index.scss](src/styles/index.scss)

## Environment Variables

These variables configure database storage for assessments and optional email delivery. Create a `.env.local` in the project root.

Required:

- `MONGODB_URI`: MongoDB connection string used by the assessment API.

Optional (enable email sending via SMTP):

- `SMTP_HOST`: SMTP server host (e.g., smtp.gmail.com)
- `SMTP_PORT`: SMTP port (465 for secure, 587 for STARTTLS)
- `SMTP_USER`: SMTP username
- `SMTP_PASS`: SMTP password
- `GMAIL_FROM`: From address override (defaults to `SMTP_USER` if omitted)

Example `.env.local`:

```env
MONGODB_URI=mongodb+srv://user:pass@cluster.example.mongodb.net/dbname

# Optional – enable email sending
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your-email@example.com
SMTP_PASS=your-strong-password
GMAIL_FROM=Axonva Consulting <your-email@example.com>
```

## Assessment API

The assessment submission endpoint is implemented in [src/app/api/assessment/route.js](src/app/api/assessment/route.js).

- **Route:** `POST /api/assessment`
- **Persists:** Answers + scores to MongoDB via `MONGODB_URI`
- **Emails:** Sends a results email if all SMTP vars are set

### Request Body

```json
{
  "userData": { "name": "Jane Doe", "email": "jane@example.com" },
  "answers": { "q1": 4, "q2": 3 },
  "totalScore": 72,
  "recommendationTitle": "AI Explorer"
}
```

### Response

```json
{
  "success": true,
  "id": "<mongodb_document_id>"
}
```

If an error occurs, you'll receive `{ success: false, error: "..." }`.

## Scripts

- `dev`: Run the development server
- `build`: Compile the production build
- `start`: Start the production server
- `lint`: Run Next.js ESLint

## Deployment

Deploy on your preferred platform (e.g., Vercel). Ensure all required environment variables are configured in the hosting provider. See [next.config.mjs](next.config.mjs) for framework settings.
