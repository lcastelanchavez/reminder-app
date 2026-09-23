import type { StoreWithReminders } from "@/types";

/**
 * Hardcoded stand-in data for the Nearby tab until Supabase is wired up.
 * Coordinates are placeholders around downtown San Francisco.
 */
export const MOCK_NEARBY_STORES: StoreWithReminders[] = [
  {
    id: "store-target",
    name: "Target",
    address: "789 Mission St",
    category: "general",
    coordinates: { latitude: 37.7853, longitude: -122.4036 },
    radiusMeters: 150,
    distanceMeters: 120,
    reminders: [
      {
        id: "reminder-1",
        storeId: "store-target",
        title: "Paper towels",
        note: "Bulk pack",
        completed: false,
        createdAt: "2026-09-20T17:04:00.000Z",
      },
      {
        id: "reminder-2",
        storeId: "store-target",
        title: "Birthday card for Sam",
        completed: false,
        createdAt: "2026-09-21T09:12:00.000Z",
      },
      {
        id: "reminder-3",
        storeId: "store-target",
        title: "AA batteries",
        note: "For the smoke detector",
        completed: false,
        createdAt: "2026-09-22T20:40:00.000Z",
      },
    ],
  },
  {
    id: "store-cvs",
    name: "CVS",
    address: "1059 Market St",
    category: "pharmacy",
    coordinates: { latitude: 37.7797, longitude: -122.4108 },
    radiusMeters: 100,
    distanceMeters: 340,
    reminders: [
      {
        id: "reminder-4",
        storeId: "store-cvs",
        title: "Pick up prescription",
        note: "Ready after 3pm",
        completed: false,
        createdAt: "2026-09-22T14:30:00.000Z",
      },
      {
        id: "reminder-5",
        storeId: "store-cvs",
        title: "Sunscreen SPF 50",
        completed: false,
        createdAt: "2026-09-22T14:31:00.000Z",
      },
    ],
  },
  {
    id: "store-whole-foods",
    name: "Whole Foods",
    address: "399 4th St",
    category: "grocery",
    coordinates: { latitude: 37.7806, longitude: -122.3993 },
    radiusMeters: 180,
    distanceMeters: 860,
    reminders: [
      {
        id: "reminder-6",
        storeId: "store-whole-foods",
        title: "Oat milk",
        note: "The barista one",
        completed: false,
        createdAt: "2026-09-19T08:15:00.000Z",
      },
      {
        id: "reminder-7",
        storeId: "store-whole-foods",
        title: "Rotisserie chicken",
        completed: false,
        createdAt: "2026-09-23T11:02:00.000Z",
      },
      {
        id: "reminder-8",
        storeId: "store-whole-foods",
        title: "Coffee beans",
        note: "Whole bean, dark roast",
        completed: false,
        createdAt: "2026-09-23T11:03:00.000Z",
      },
    ],
  },
];
