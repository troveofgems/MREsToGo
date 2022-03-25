import React, { useContext, useState } from "react";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../services/location/location.context";
import { SearchArea } from "../../../infrastructure/layout/app.styled.component";

export const SearchHome = ({ placeholder = "Search By State" }) => {
  const locationContext = useContext(LocationContext),
    { keyword, search } = locationContext,
    [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <SearchArea>
      <Searchbar
        placeholder={placeholder}
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => setSearchKeyword(text)}
      />
    </SearchArea>
  );
};
