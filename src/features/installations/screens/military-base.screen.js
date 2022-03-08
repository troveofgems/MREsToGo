import React, { useState } from "react";
import { Searchbar } from "react-native-paper";

import { MilitaryBaseInfoCard } from "../components/MilitaryBaseInfoCard/military-base-infocard";
import { SafeArea, SearchArea, ListArea } from "./styles/military-base.style";

import { listings } from "../../../services/mock/data/dummy.json";

export const MilitaryBaseScreen = () => {
  const [searchTerm, setSearchTerm] = useState(""),
    onChangeSearch = (query) => setSearchTerm(`${query}`);

  return (
    <SafeArea>
      <SearchArea>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchTerm}
        />
      </SearchArea>
      <ListArea
        keyExtractor={(item) => `${item.name}_${item.id}`}
        data={listings}
        renderItem={(item) => <MilitaryBaseInfoCard installationInfo={item} />}
      />
    </SafeArea>
  );
};
