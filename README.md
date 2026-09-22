# VERTEX — Personal Health Dashboard

A demo/prototype personal health & fitness dashboard built for a school project.
Dark, modern, "fitness technology" themed UI covering workouts, nutrition, sleep,
an exercise library, weekly reports, and settings — all running on mock data and
local state (no backend required).

## Tech stack

- React 18 + Vite
- Tailwind CSS
- lucide-react icons
- Charts drawn with lightweight custom SVG/CSS components (no chart library dependency)
- `localStorage` used to persist demo data (meals, workout completion, sleep log, profile)

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build a production bundle:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  data/          Mock data (exercises, workouts, nutrition, sleep, health tips)
  store/         AppContext — shared app state + localStorage persistence
  components/    Reusable UI pieces (cards, modals, charts, nav)
  pages/         One file per main page (Dashboard, Nutrition, Workout, Sleep,
                 Health Tips, Exercise Library, Weekly Report, Settings)
  App.jsx        Layout + client-side page switcher (sidebar / mobile nav)
```

## Pages

1. **Dashboard** — daily overview, today's plan, weekly activity chart, tip of the day
2. **Nutrition** — calorie/macro/water progress, meal log with an "Add Meal" form
3. **Workout** — weekly schedule, per-exercise complete/incomplete toggling
4. **Sleep** — sleep history chart, consistency indicator, manual sleep log
5. **Health Tips** — categorized tip cards with a detail modal
6. **Exercise Library** — 20+ exercises, filterable by category, searchable, with
   detail modals and generated SVG illustrations (start/movement position + arrow)
7. **Weekly Report** — 7-day summary across workout, sleep, nutrition, and water
8. **Settings** — editable profile, dark mode & notification toggles

## Notes

- This is a prototype for a school assignment — there is no backend, database, or
  authentication. All data is mock data defined in `src/data/` and edits are kept
  in browser `localStorage`.
- Health/nutrition copy throughout the app is general educational content, not
  medical advice.
