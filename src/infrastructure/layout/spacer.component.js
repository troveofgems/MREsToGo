import React from "react";
import { View } from "react-native";
import styled, { useTheme } from "styled-components";

const sizeVariants = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionalVariants = {
  top: "margin-top",
  right: "margin-right",
  bottom: "margin-bottom",
  left: "margin-left",
};

const getVariant = (position, size, theme) =>
  `${positionalVariants[position]}:${theme.space[sizeVariants[size]]}`;

// Fix Issue with Android
const SpacerView = styled(View)`
  ${({ variant }) => variant}
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);

  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
