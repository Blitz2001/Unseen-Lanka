# UNSEEN LANKA — Digital DMC Platform (2026)

## 🛑 PHASE 0: DECISION FREEZE
**DO NOT DEVIATE FROM THIS SCOPE.**

### 1. Product Identity
- **Brand**: Unseen Lanka (by Avawia Tours)
- **Positioning**: Mid-Luxury Experience Architect for "Untrending" Sri Lanka.
- **Goal**: High SEO, Decision-Free Conversion, Manual Ops First.

### 2. Technical Stack (LOCKED)
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (Strict)
- **Styling**: Tailwind CSS
- **Content**: MDX (Git-based CMS)
- **Database**: 
  - **Phase 1**: NONE (Manual Sheets/Email).
  - **Phase 2**: Supabase (Postgres).
- **Deployment**: Vercel.

### 3. Execution Rules
- **No Booking Engine** (Phase 1).
- **No CMS Migration**.
- **No Animation/Slider Obsession**.
- **Standard**: Semantic HTML, SEO-first, Mobile-first.

### 4. Workflow
- `master`/`main` = Production.
- `dev` = Staging.
- Feature branches for all work.

---

## Getting Started

```bash
npm install
npm run dev
```

## Structure

- `/app`: App Router pages.
- `/content`: MDX files (Journeys, Destinations).
- `/lib`: Utilities (SEO, MDX loaders).
- `/components`: UI Blocks (No Shadcn unless imperative, sticking to raw Tailwind for speed/weight).
