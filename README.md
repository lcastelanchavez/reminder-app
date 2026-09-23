# reminder-app

A location-based reminder app. When you walk near a store (Target, CVS, Whole Foods, etc.),
it sends a push notification with your shopping list for that store.

## Tech Stack
- Expo / React Native (TypeScript)
- expo-location + expo-task-manager (background geofencing)
- expo-notifications (push alerts)
- Supabase (auth + database)
- Claude Haiku API (AI categorization of items via voice/text)
- Google Places API (store discovery)

## Structure (to be built)
- /app — Expo Router screens
- /components — reusable UI
- /lib — Supabase client, Claude API calls
- /hooks — geofencing logic
