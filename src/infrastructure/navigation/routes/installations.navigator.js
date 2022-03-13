import React from "react";
import { Text } from "react-native";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

import { MilitaryBaseScreen } from "../../../features/installations/screens/military-base.screen";
import { InstallationDetailScreen } from "../../../features/installations/screens/installation-detail.screen";

const InstallationStack = createStackNavigator();

export const InstallationsNavigator = () => {
  return (
    <InstallationStack.Navigator
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS, headerShown: false }}
    >
      <InstallationStack.Screen name={"Home"} component={MilitaryBaseScreen} />
      <InstallationStack.Screen
        name={"InstallationDetail"}
        component={InstallationDetailScreen}
      />
    </InstallationStack.Navigator>
  );
};
