import { EmptyState } from "@/components/EmptyState";
import { Screen } from "@/components/Screen";
import { ScreenHeader } from "@/components/ScreenHeader";

export default function ListsScreen() {
  return (
    <Screen
      header={<ScreenHeader title="Lists" subtitle="Every reminder, by store" />}
    >
      <EmptyState
        icon="list-outline"
        title="No lists yet"
        description="Reminders you save will be grouped by store here."
      />
    </Screen>
  );
}
