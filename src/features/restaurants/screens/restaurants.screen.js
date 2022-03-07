import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "./restraunts.screen.styles";
import { SearchContainer } from "./restraunts.screen.styles";

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>

      <RestaurantInfoCard />
    </SafeArea>
  );
};
