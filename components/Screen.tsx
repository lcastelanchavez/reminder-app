import type { ReactNode } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface ScreenProps {
  children: ReactNode;
  /** Screen title rendered by the caller, if any. */
  header?: ReactNode;
}

/** Dark-themed page shell — full-bleed navy background with safe-area insets. */
export function Screen({ children, header }: ScreenProps) {
  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-background">
      {header ? <View className="px-5 pb-2 pt-4">{header}</View> : null}
      {children}
    </SafeAreaView>
  );
}
