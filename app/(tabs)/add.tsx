import { EmptyState } from "@/components/EmptyState";
import { Screen } from "@/components/Screen";
import { ScreenHeader } from "@/components/ScreenHeader";

export default function AddScreen() {
  return (
    <Screen
      header={
        <ScreenHeader title="Add" subtitle="Jot it down, pick a store" />
      }
    >
      <EmptyState
        icon="add-circle-outline"
        title="Add a reminder"
        description="The compose form lands here — type what you need and choose the store that should trigger it."
      />
    </Screen>
  );
}
