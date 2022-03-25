import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

import { MilitaryBaseList } from "../../../screens/features/installations/screens/military-base.list";
import { InstallationDetailScreen } from "../../../screens/features/installations/screens/installation-detail.screen";

export const MilitaryBaseStackNavigator = () => {
  const BaseStackNavigator = createStackNavigator();

  return (
    <BaseStackNavigator.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerShown: false,
      }}
    >
      <BaseStackNavigator.Screen name={"Home"} component={MilitaryBaseList} />
      <BaseStackNavigator.Screen
        name={"InstallationDetail"}
        component={InstallationDetailScreen}
      />
    </BaseStackNavigator.Navigator>
  );
};
