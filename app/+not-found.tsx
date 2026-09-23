import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Not found" }} />
      <View className="flex-1 items-center justify-center bg-background px-10">
        <Text className="text-xl font-semibold text-content">
          This screen doesn&apos;t exist.
        </Text>
        <Link href="/" className="mt-4 text-base font-medium text-accent">
          Go to Nearby
        </Link>
      </View>
    </>
  );
}
