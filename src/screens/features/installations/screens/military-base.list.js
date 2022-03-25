import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { View } from "react-native";
import { MilitaryBaseInfoCard } from "../components/MilitaryBaseInfoCard/military-base-infocard";
import {
  SafeArea,
  ListArea,
  ActivityIndicatorContainer
} from "../../../../infrastructure/layout/app.styled.component";
import { InstallationsContext } from "../../../../services/installations/installations.context";
import { SearchHome } from "../../search/Search.home";
import { BannerComponent } from "../../../../infrastructure/layout/banner.component";

export const MilitaryBaseList = ({ navigation }) => {
  const { installations, isLoading, error } = useContext(InstallationsContext),
    indicatorStyle = { marginLeft: -25 };

  return (
    <SafeArea>
      {isLoading ? (
        <>
          <ActivityIndicatorContainer>
            <ActivityIndicator
              animating={true}
              style={indicatorStyle}
              color={Colors.blue300}
              size={50}
            />
          </ActivityIndicatorContainer>
        </>
      ) : (
        <>
          <SearchHome />
          <ListArea
            keyExtractor={(item) => `${item.name}`}
            data={installations}
            renderItem={(item) => (
              <TouchableOpacity
                onPress={() => {
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
