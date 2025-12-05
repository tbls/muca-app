# MucaApp

Muca App is a modern web application designed to simplify and centralize the management of high-tech product purchases. Built with performance and usability in mind, Muca App allows users to easily track orders, monitor shipments, view detailed product information, and analyze expenses — all in one place

## Features

- Supabase email/password authentication
- Protected dashboard with stats, quick actions, and responsive navbar
- Shipping tracker showing purchases as rows on desktop and stacked cards on mobile
- Reusable shadcn-inspired UI primitives
- Tailwind v4 setup with theme tokens and animations

## Stack

- React 19 + TypeScript + Vite
- React Router v7 (Declarative)
- Redux Toolkit
- Supabase JS client v2
- Tailwind CSS v4
- shadcn-inspired UI primitives (custom)

## Getting started

1. Install dependencies

   ```bash
   npm install
   ```

2. Configure environment variables (create `.env.local`):

   ```bash
   VITE_SUPABASE_URL=your-supabase-url
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

3. Run the dev server

   ```bash
   npm run dev
   ```

4. Lint

   ```bash
   npm run lint
   ```

5. Build & preview

   ```bash
   npm run build
   npm run preview
   ```

## Project structure

- `src/MucaApp.tsx` — App entry with Router + Redux Provider
- `src/router/AppRouter.tsx` — Route gating based on Supabase session (login/logout)
- `src/auth/pages/LoginPage.tsx` — Supabase email/password sign-in
- `src/dashboard/pages/DashboardPage.tsx` — Authenticated dashboard with responsive navbar and actions
- `src/shipping-traker/pages/ShipingTrackerPage.tsx` — Responsive purchases list (desktop rows, mobile cards)
- `src/components/ui/` — UI primitives
- `src/supabase/client.ts` — Supabase client initialized from env vars
- `src/store/auth/` — Redux slice for `isLogged` and store setup
