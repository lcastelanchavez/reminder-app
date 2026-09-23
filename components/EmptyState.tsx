import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

import { colors } from "@/lib/theme";

interface EmptyStateProps {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
}

export function EmptyState({ icon, title, description }: EmptyStateProps) {
  return (
    <View className="flex-1 items-center justify-center px-10">
      <View className="h-16 w-16 items-center justify-center rounded-2xl bg-accent-soft">
        <Ionicons name={icon} size={30} color={colors.accent} />
      </View>
      <Text className="mt-4 text-xl font-semibold text-content">{title}</Text>
      <Text className="mt-2 text-center text-sm text-content-secondary">
        {description}
      </Text>
    </View>
  );
}
