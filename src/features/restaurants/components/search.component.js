import React, { useState, useContext, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import { SearchContainer } from "../screens/restraunts.screen.styles";
import { LocationContext } from "../../../services/location/location.context";

export const Search = ({ isFavoritesToggled, onFavoritesToggle }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState("");
  const onChangeSearch = (query) => setSearchKeyword(query);
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        icon={isFavoritesToggled ? "heart" : "heart-outline"}
        onIconPress={onFavoritesToggle}
        placeholder="search for a location"
        onChangeText={onChangeSearch}
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
      />
    </SearchContainer>
  );
};
