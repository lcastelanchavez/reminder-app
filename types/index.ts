/**
 * Shared domain types for MemoryDrop.
 *
 * The app watches geofences around the stores a user cares about. Entering one
 * fires a notification listing the reminders filed under that store.
 */

export type StoreCategory =
  | "grocery"
  | "pharmacy"
  | "general"
  | "hardware"
  | "other";

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Store {
  id: string;
  /** Display name, e.g. "Target". */
  name: string;
  /** Street address shown under the store name. */
  address: string;
  category: StoreCategory;
  coordinates: Coordinates;
  /** Geofence radius in meters. Entering this triggers the reminder push. */
  radiusMeters: number;
}

export interface Reminder {
  id: string;
  storeId: string;
  /** What to pick up, e.g. "Paper towels". */
  title: string;
  /** Optional detail: brand, quantity, aisle. */
  note?: string;
  completed: boolean;
  /** ISO-8601 timestamp. */
  createdAt: string;
}

/** A store joined with its open reminders, as rendered on the Nearby tab. */
export interface StoreWithReminders extends Store {
  reminders: Reminder[];
  /** Distance from the user's last known position, in meters. */
  distanceMeters: number;
}

/** Emitted by the geofencing hook when a boundary is crossed. */
export interface GeofenceEvent {
  storeId: string;
  type: "enter" | "exit";
  /** ISO-8601 timestamp. */
  occurredAt: string;
}
