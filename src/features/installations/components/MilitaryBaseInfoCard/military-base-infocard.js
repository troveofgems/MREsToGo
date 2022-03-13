import React from "react";
import { Card, Button } from "react-native-paper";
import { Spacer } from "../../../../components/layout/spacer.component";

import { Text } from "../../../../components/layout/text.component";
import { useTheme } from "styled-components";
import {
  LeftContent,
  SubContainerRow,
  Address,
  StarRow,
} from "./military-base-infocard.style";
import { printStars } from "../../../../utils/card.utils";

export const MilitaryBaseInfoCard = ({ installationInfo = {} }) => {
  const {
    name,
    icon,
    photos,
    address = "No Address Available",
    rating = Math.floor(rating || 0),
    currentCommander,
  } = installationInfo.item;
  const theme = useTheme();

  return (
    <>
      <Card elevation={5}>
        <Card.Title
          title={name}
          subtitle={
            currentCommander === undefined
              ? "Commander: Please Sign In To View"
              : "Commander: No Information Available"
          }
          left={() => LeftContent(icon, theme)}
        />
        <Card.Content>
          <Address>{address}</Address>
          <SubContainerRow>
            <StarRow>
              {rating > 0 ? (
                printStars(rating, name)
              ) : (
                <Text variant={"error"}>No Rating Available</Text>
              )}
            </StarRow>
          </SubContainerRow>
        </Card.Content>
        <Card.Cover source={{ uri: photos[0] }} />
      </Card>
      <Spacer size={"large"} />
    </>
  );
};
