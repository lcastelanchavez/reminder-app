import { Text, View } from "react-native";

interface ScreenHeaderProps {
  title: string;
  subtitle?: string;
}

export function ScreenHeader({ title, subtitle }: ScreenHeaderProps) {
  return (
    <View>
      <Text className="text-3xl font-bold text-content">{title}</Text>
      {subtitle ? (
        <Text className="mt-1 text-sm text-content-secondary">{subtitle}</Text>
      ) : null}
    </View>
  );
}
