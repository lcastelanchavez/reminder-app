import { Text, View } from "react-native";

import type { Reminder } from "@/types";

interface ReminderRowProps {
  reminder: Reminder;
}

export function ReminderRow({ reminder }: ReminderRowProps) {
  return (
    <View className="flex-row items-start gap-3 py-2">
      <View
        className={
          reminder.completed
            ? "mt-1.5 h-2 w-2 rounded-full bg-content-muted"
            : "mt-1.5 h-2 w-2 rounded-full bg-accent"
        }
      />
      <View className="flex-1">
        <Text
          className={
            reminder.completed
              ? "text-base text-content-muted line-through"
              : "text-base text-content"
          }
        >
          {reminder.title}
        </Text>
        {reminder.note ? (
          <Text className="mt-0.5 text-sm text-content-muted">
            {reminder.note}
          </Text>
        ) : null}
      </View>
    </View>
  );
}
