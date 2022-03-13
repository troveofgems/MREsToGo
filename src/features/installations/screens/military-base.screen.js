import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { ActivityIndicator, Banner, Colors } from "react-native-paper";

import { MilitaryBaseInfoCard } from "../components/MilitaryBaseInfoCard/military-base-infocard";
import { SafeArea, ListArea } from "./styles/military-base.style";

import { InstallationsContext } from "../../../services/installations/installations.context";

import { View } from "react-native";
import { Search } from "../../search/Search";
import { BannerComponent } from "../../../components/layout/banner.component";

export const MilitaryBaseScreen = ({ navigation }) => {
  const { installations, isLoading, error } = useContext(InstallationsContext);

  return (
    <SafeArea>
      {isLoading ? (
        <>
          <View style={{ position: "absolute", top: "50%", left: "50%" }}>
            <ActivityIndicator
              animating={true}
              style={{ marginLeft: -25 }}
              color={Colors.blue300}
              size={50}
            />
          </View>
        </>
      ) : (
        <>
          <Search />
          <ListArea
            keyExtractor={(item) => `${item.name}`}
            data={installations}
            renderItem={(item) => (
              <TouchableOpacity
                onPress={() => {
                  console.log("Need to pass data: ", item);
                  return navigation.navigate("InstallationDetail", {
                    installationDetail: item,
                  });
                }}
              >
                <MilitaryBaseInfoCard installationInfo={item} />
              </TouchableOpacity>
            )}
          />
          {error && <BannerComponent isVisible={!!error} children={error} />}
        </>
      )}
    </SafeArea>
  );
};
