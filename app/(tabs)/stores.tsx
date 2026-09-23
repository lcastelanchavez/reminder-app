import { EmptyState } from "@/components/EmptyState";
import { Screen } from "@/components/Screen";
import { ScreenHeader } from "@/components/ScreenHeader";

export default function StoresScreen() {
  return (
    <Screen
      header={
        <ScreenHeader title="Stores" subtitle="Places you want to be nudged" />
      }
    >
      <EmptyState
        icon="storefront-outline"
        title="No stores saved"
        description="Add a store and MemoryDrop will watch a geofence around it."
      />
    </Screen>
  );
}
