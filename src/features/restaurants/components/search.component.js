import React, { useState, useContext, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import { SearchContainer } from "../screens/restraunts.screen.styles";
import { LocationContext } from "../../../services/location/location.context";

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState("");
  const onChangeSearch = (query) => setSearchKeyword(query);
  useEffect(() => {
    search(searchKeyword);
  }, []);

  return (
    <SearchContainer>
      <Searchbar
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
