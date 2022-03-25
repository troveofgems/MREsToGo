import React, { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../services/location/location.context";
import { SearchArea } from "../../../infrastructure/layout/app.styled.component";

export const SearchMap = ({ placeholder = "Search By State" }) => {
  const locationContext = useContext(LocationContext),
    { keyword, search } = locationContext,
    [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchArea style={{ backgroundColor: "transparent" }}>
      <Searchbar
        placeholder={placeholder}
        icon={"map"}
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => setSearchKeyword(text)}
      />
    </SearchArea>
  );
};
