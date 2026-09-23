# MemoryDrop

A location-based reminder app. Save reminders against a store, and when you walk
into that store's geofence, MemoryDrop pushes you the list.

## Stack

- **Expo SDK 54** with TypeScript (strict)
- **Expo Router** — file-based navigation
- **NativeWind v4** — Tailwind CSS for React Native

## Getting started

```bash
npm install
npx expo install --fix   # aligns native deps with the installed SDK
npm start
```

Then press `i` for the iOS simulator, `a` for Android, or `w` for web.

## Project layout

| Path          | Contents                                                |
| ------------- | ------------------------------------------------------- |
| `app/`        | Screens and layouts (Expo Router)                       |
| `components/` | Reusable UI                                             |
| `lib/`        | API clients (Supabase, Claude), theme, formatters, mocks |
| `hooks/`      | Custom hooks (geofencing, notifications)                |
| `types/`      | Shared TypeScript types                                 |

Routes live under `app/(tabs)/`: **Nearby** (`index`), **Lists**, **Add**, and
**Stores**.

## Theme

Deep navy background `#080912` with an indigo accent `#6366F1`. Raw values live
in `lib/theme.ts` and are mirrored as Tailwind color names in
`tailwind.config.js` — change both together.

## What's stubbed

The Nearby tab renders hardcoded stores from `lib/mockData.ts`. These are
scaffolded with the intended shape but no implementation yet:

- `lib/supabase.ts` — reads env config only; no client is created
- `lib/claude.ts` — must be called through a backend, never from the device
- `hooks/useGeofencing.ts` — see the TODO for the `expo-location` +
  `expo-task-manager` wiring
- `hooks/useNotifications.ts` — see the TODO for `expo-notifications`

## Environment variables

Create a `.env` (git-ignored):

```
EXPO_PUBLIC_SUPABASE_URL=
EXPO_PUBLIC_SUPABASE_ANON_KEY=
```

Anything prefixed `EXPO_PUBLIC_` is inlined into the client bundle. Never put an
Anthropic API key or a Supabase service-role key there.
