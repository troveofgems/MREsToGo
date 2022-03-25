import React from "react";
import { Text } from "../../../../../infrastructure/layout/text.component";
import {
  isAndroidDevice,
  CompactImage,
  CompactWebView,
  Item,
} from "../../../../../infrastructure/layout/app.styled.component";

export const CompactMilitaryBaseInfoCard = ({ installationData }) => {
  const SwappableComponent_Image = isAndroidDevice
    ? CompactWebView
    : CompactImage;

  return (
    <Item>
      <SwappableComponent_Image source={{ uri: installationData.photos[0] }} />
      <Text center vairant={"caption"} numberOfLines={3}>
        {installationData.name}
      </Text>
    </Item>
  );
};
