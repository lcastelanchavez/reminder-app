import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

import { ReminderRow } from "@/components/ReminderRow";
import { formatDistance, formatItemCount } from "@/lib/format";
import { colors } from "@/lib/theme";
import type { StoreCategory, StoreWithReminders } from "@/types";

const CATEGORY_ICONS: Record<
  StoreCategory,
  keyof typeof Ionicons.glyphMap
> = {
  grocery: "basket-outline",
  pharmacy: "medkit-outline",
  general: "cart-outline",
  hardware: "hammer-outline",
  other: "storefront-outline",
};

interface StoreCardProps {
  store: StoreWithReminders;
}

export function StoreCard({ store }: StoreCardProps) {
  return (
    <View className="rounded-2xl border border-border bg-surface p-4">
      <View className="flex-row items-center gap-3">
        <View className="h-11 w-11 items-center justify-center rounded-xl bg-accent-soft">
          <Ionicons
            name={CATEGORY_ICONS[store.category]}
            size={22}
            color={colors.accent}
          />
        </View>

        <View className="flex-1">
          <Text className="text-lg font-semibold text-content">
            {store.name}
          </Text>
          <Text className="text-sm text-content-muted">{store.address}</Text>
        </View>

        <View className="items-end">
          <Text className="text-sm font-medium text-accent">
            {formatDistance(store.distanceMeters)}
          </Text>
          <Text className="mt-0.5 text-xs text-content-muted">
            {formatItemCount(store.reminders.length)}
          </Text>
        </View>
      </View>

      <View className="mt-3 border-t border-border pt-1">
        {store.reminders.map((reminder) => (
          <ReminderRow key={reminder.id} reminder={reminder} />
        ))}
      </View>
    </View>
  );
}
