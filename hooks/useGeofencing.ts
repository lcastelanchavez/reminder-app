import { useCallback, useMemo, useState } from "react";

import type { GeofenceEvent, Store } from "@/types";

export type LocationPermissionStatus =
  | "undetermined"
  | "granted"
  | "denied"
  | "background-denied";

export interface UseGeofencingResult {
  permissionStatus: LocationPermissionStatus;
  /** True once background region monitoring is actually running. */
  isMonitoring: boolean;
  /** Most recent enter/exit event, or null if none observed this session. */
  lastEvent: GeofenceEvent | null;
  requestPermissions: () => Promise<LocationPermissionStatus>;
  startMonitoring: () => Promise<void>;
  stopMonitoring: () => Promise<void>;
}

/**
 * Watches geofences around the user's saved stores.
 *
 * Placeholder: returns inert state so screens can be built against the real
 * shape. To implement:
 *
 *   1. npx expo install expo-location expo-task-manager
 *   2. Request foreground then background location permission (iOS requires
 *      foreground to be granted first, and background is a separate prompt).
 *   3. Define a TaskManager task at module scope — it must be registered
 *      before the JS bundle finishes evaluating, or iOS will not deliver
 *      events after a cold start.
 *   4. Call Location.startGeofencingAsync(TASK_NAME, regions) with one region
 *      per store. iOS caps monitored regions at 20, so sort by distance and
 *      monitor only the closest stores.
 */
export function useGeofencing(stores: Store[]): UseGeofencingResult {
  const [permissionStatus] = useState<LocationPermissionStatus>("undetermined");
  const [lastEvent] = useState<GeofenceEvent | null>(null);

  const regions = useMemo(
    () =>
      stores.map((store) => ({
        identifier: store.id,
        ...store.coordinates,
        radius: store.radiusMeters,
      })),
    [stores]
  );

  const requestPermissions = useCallback(async () => {
    console.warn("useGeofencing: requestPermissions not implemented yet");
    return "undetermined" as const;
  }, []);

  const startMonitoring = useCallback(async () => {
    console.warn(
      `useGeofencing: startMonitoring not implemented yet (${regions.length} regions pending)`
    );
  }, [regions]);

  const stopMonitoring = useCallback(async () => {
    console.warn("useGeofencing: stopMonitoring not implemented yet");
  }, []);

  return {
    permissionStatus,
    isMonitoring: false,
    lastEvent,
    requestPermissions,
    startMonitoring,
    stopMonitoring,
  };
}
