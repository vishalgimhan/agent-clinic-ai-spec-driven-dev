# Roadmap

Phases are intentionally small — each one is a shippable slice of work, independently reviewable and testable.

---

## Phase 1 — Hello Hono
- Install and configure Hono with `tsx` dev server
- Single `/` route returning "AgentClinic is open for business"
- Confirm TypeScript types work end-to-end

## Phase 2 — Base Layout
- Server-side JSX layout component (header, nav, main, footer)
- Basic CSS (custom properties, reset, typography)
- All routes render inside the shared layout

## Phase 3 — Agent Management
- SQLite database + first migration (`agents` table)
- Seed a handful of fictional agents
- `/agents` page listing all agents
- `/agents/:id` page showing a single agent's profile (name, model type, status, complaints)

## Phase 4 — Ailments, Therapies & Booking
- `ailments` table + seed data; `/ailments` list page
- `therapies` table + seed data; `/therapies` list page
- Link agents to ailments; map ailments to recommended therapies
- `appointments` table (agent, therapist, datetime, status)
- Form to book an appointment from an agent's detail page; validation and confirmation

## Phase 5 — Staff Dashboard
- `/dashboard` with summary counts: agents, open appointments, ailments in-flight
- Simple table views for staff to manage records
- Mary's dashboard is now real

## Phase 6 — Polish & Accessibility
- Responsive layout for Steve's modern-browser requirement
- Semantic HTML audit
- Keyboard navigation and focus styles

## Phase 7 — Hardening
- Error pages (404, 500)
- Input sanitization on all forms
- Basic logging middleware

---

Later phases (not yet planned): auth, email notifications, therapist profiles, reporting.
