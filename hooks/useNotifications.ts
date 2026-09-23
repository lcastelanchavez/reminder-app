import { useCallback, useState } from "react";

import type { Reminder, Store } from "@/types";

export type NotificationPermissionStatus =
  | "undetermined"
  | "granted"
  | "denied";

export interface UseNotificationsResult {
  permissionStatus: NotificationPermissionStatus;
  /** Expo push token, once registered. */
  pushToken: string | null;
  requestPermissions: () => Promise<NotificationPermissionStatus>;
  /** Fires the "you're at Target, here's your list" notification. */
  notifyStoreArrival: (store: Store, reminders: Reminder[]) => Promise<void>;
}

/**
 * Local + push notification handling.
 *
 * Placeholder: no notifications are scheduled yet. To implement:
 *
 *   1. npx expo install expo-notifications expo-device
 *   2. Set a notification handler at module scope so foreground arrivals still
 *      surface a banner.
 *   3. For the geofence trigger, schedule a LOCAL notification from inside the
 *      TaskManager task in useGeofencing — the device already knows it crossed
 *      the boundary, so a round trip to a push server is avoidable latency.
 *      Reserve Expo push for reminders added on another device.
 *   4. Android needs a notification channel created before anything will show.
 */
export function useNotifications(): UseNotificationsResult {
  const [permissionStatus] =
    useState<NotificationPermissionStatus>("undetermined");
  const [pushToken] = useState<string | null>(null);

  const requestPermissions = useCallback(async () => {
    console.warn("useNotifications: requestPermissions not implemented yet");
    return "undetermined" as const;
  }, []);

  const notifyStoreArrival = useCallback(
    async (store: Store, reminders: Reminder[]) => {
      console.warn(
        `useNotifications: would notify for ${store.name} (${reminders.length} reminders)`
      );
    },
    []
  );

  return {
    permissionStatus,
    pushToken,
    requestPermissions,
    notifyStoreArrival,
  };
}
