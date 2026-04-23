# Portfolio — Setup Guide

## Project Stack
- **Framework:** Next.js 16 (App Router)
- **Backend:** Supabase (contact form storage)
- **Deployment:** Vercel

---

## 1. Local Development

```bash
npm install
npm run dev
# → http://localhost:3000
```

---

## 2. Supabase Setup (Contact Form)

### Step 1: Create a Supabase Project
1. Go to https://app.supabase.com
2. Click **New Project**
3. Choose a name (e.g., `my-portfolio`) and set a database password

### Step 2: Create the Contact Submissions Table
In your Supabase project, go to **SQL Editor** and run:

```sql
create table contact_submissions (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  message text not null,
  submitted_at timestamptz default now()
);

-- Only allow inserts (no public reads for privacy)
alter table contact_submissions enable row level security;

create policy "Allow public inserts"
  on contact_submissions
  for insert
  to anon
  with check (true);
```

### Step 3: Get Your API Keys
1. Go to **Settings → API** in your Supabase project
2. Copy **Project URL** and **anon/public** key

### Step 4: Create .env.local
Copy `.env.local.example` to `.env.local` and fill in:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

> ⚠️ Never commit `.env.local` — it's already in `.gitignore`

---

## 3. Deploy to Vercel

### One-time setup:
1. Push your code to GitHub
2. Go to https://vercel.com → **New Project** → Import your repo
3. Vercel auto-detects Next.js — just click **Deploy**

### Add Environment Variables on Vercel:
In your Vercel project → **Settings → Environment Variables**, add:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Every future deploy:
```bash
git add .
git commit -m "your message"
git push
# Vercel auto-deploys on every push to main
```

---

## 4. Project Structure

```
My portfolio/
├── app/
│   ├── layout.js          ← Root layout (fonts, metadata)
│   ├── page.js            ← Homepage (index)
│   ├── case-study/
│   │   └── page.js        ← Case study page
│   └── api/
│       └── contact/
│           └── route.js   ← POST /api/contact → saves to Supabase
├── css/
│   └── styles.css         ← All styles (unchanged)
├── lib/
│   └── supabase.js        ← Supabase client
├── public/
│   └── js/
│       └── main.js        ← Animations & interactions
├── .env.local             ← Your secrets (create from .env.local.example)
├── .env.local.example     ← Template — safe to commit
└── package.json
```

---

## 5. Adding New Projects

To add a new project, edit `app/page.js` and add a new `<Link>` block inside the `projects__grid` div, following the same pattern as the existing project cards.

For a new case study page, create:
```
app/your-project-name/page.js
```
And copy the structure from `app/case-study/page.js`.
