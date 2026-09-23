import { FlatList } from "react-native";

import { Screen } from "@/components/Screen";
import { ScreenHeader } from "@/components/ScreenHeader";
import { StoreCard } from "@/components/StoreCard";
import { MOCK_NEARBY_STORES } from "@/lib/mockData";

export default function NearbyScreen() {
  return (
    <Screen
      header={
        <ScreenHeader
          title="Nearby"
          subtitle="Stores around you with open reminders"
        />
      }
    >
      <FlatList
        data={MOCK_NEARBY_STORES}
        keyExtractor={(store) => store.id}
        renderItem={({ item }) => <StoreCard store={item} />}
        contentContainerClassName="gap-4 px-5 pb-6 pt-2"
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
}
