import React from "react";
import styled from "styled-components/native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Fontisto,
  Ionicons,
} from "@expo/vector-icons";
import { Card, Button } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import StarXMLString from "../../../../../assets/star";
import { Spacer } from "../../../../components/layout/spacer.component";

import { Text } from "../../../../components/layout/text.component";

import { useTheme } from "styled-components";

export const MilitaryBaseInfoCard = ({ installationInfo = {} }) => {
  const { name, icon, photos, address, rating, owner, currentCommander, code } =
    installationInfo.item;
  const theme = useTheme();

  const LeftContent = () => {
    console.log("Working with Icon: ", icon, theme);
    const { army, airForce, navy, coastGuard, marineCorps, spaceForce } =
      theme.installationIcons;

    switch (icon) {
      case `${airForce}`:
      case `${army}`:
      case `${navy}`:
        return <MaterialCommunityIcons name={icon} size={40} />;
      case `${marineCorps}`:
        return <MaterialIcons name={icon} size={40} />;
      case `${coastGuard}`:
        return <Fontisto name={icon} size={40} />;
      case `${spaceForce}`:
        return <Ionicons name={icon} size={40} />;
      default:
        return <MaterialCommunityIcons name={"help-box"} size={40} />;
    }
  };

  const Title = styled.Text`
    color: ${(props) => props.theme.palette.text.disabled};
    font-family: ${(props) => props.theme.fonts.body};
    padding: 16px;
  `;

  const Address = styled.Text`
    color: ${(props) => props.theme.palette.text.disabled};
    text-align: center;
  `;

  const SubContainerRow = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
  `;

  const StarRow = styled.View`
    flex-direction: row;
  `;

  const printStars = (totalStars) => {
    let starContainer = [];

    for (let i = 0; i < totalStars; i += 1) {
      starContainer.push(<SvgXml xml={StarXMLString} width={20} height={20} />);
    }

    return starContainer;
  };

  return (
    <>
      <Card elevation={5}>
        <Card.Title
          title={name}
          subtitle={"Commander: " + currentCommander}
          left={LeftContent}
        />
        <Card.Content>
          <Address>{address}</Address>
          <SubContainerRow>
            <StarRow>
              {rating > 0 ? (
                printStars(Math.floor(rating))
              ) : (
                <Text variant={"error"}>No Rating Available</Text>
              )}
            </StarRow>
          </SubContainerRow>
        </Card.Content>
        <Card.Cover source={{ uri: photos[0] }} />
        <Card.Actions>
          <Spacer>
            <Button>View Details</Button>
          </Spacer>
        </Card.Actions>
      </Card>
      <Spacer position={"bottom"} size={"large"} />
    </>
  );
};
