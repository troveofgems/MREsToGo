import React from "react";
import styled from "styled-components/native";
import {
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

export const LeftContent = (tileIcon, theme) => {
  let installationIcon = theme.installationIcons[tileIcon];
  switch (tileIcon) {
    case "airForce":
    case "army":
    case "navy":
      return <MaterialCommunityIcons name={installationIcon} size={40} />;
    case "marineCorps":
      return <MaterialIcons name={installationIcon} size={40} />;
    case "coastGuard":
      return <Fontisto name={installationIcon} size={40} />;
    case "spaceForce":
      return <Ionicons name={installationIcon} size={40} />;
    default:
      return <MaterialCommunityIcons name={"help-box"} size={40} />;
  }
};

export const Title = styled.Text`
  color: ${(props) => props.theme.palette.text.disabled};
  font-family: ${(props) => props.theme.fonts.body};
  padding: 16px;
`;

export const Address = styled.Text`
  color: ${(props) => props.theme.palette.text.disabled};
  text-align: center;
`;

export const SubContainerRow = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`;

export const StarRow = styled.View`
  flex-direction: row;
`;
