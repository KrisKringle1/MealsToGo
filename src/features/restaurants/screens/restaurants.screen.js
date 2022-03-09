import React, { useState, useContext } from "react";
import { View } from "react-native";
import { Searchbar, Colors } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { SearchContainer } from "./restraunts.screen.styles";
import { RestaurantList } from "./restraunts.screen.styles";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Loading } from "./restraunts.screen.styles";
import { LoadingContainer } from "./restraunts.screen.styles";

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading
            size={50}
            style={{ marginLeft: -25 }}
            animating={true}
            color={Colors.blue300}
          />
        </LoadingContainer>
      )}
      <SearchContainer>
        <Searchbar
          placeholder="search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return <RestaurantInfoCard restaurant={item} />;
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};
