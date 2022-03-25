import styled from "styled-components/native";

const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.palette.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme) => `
  font-size: ${theme.fontSizes.body};
`;
const hint = (theme) => `
  font-size: ${theme.fontSizes.body};
`;
const error = (theme) => `
  color: ${theme.palette.text.error}
  font-size: ${theme.fontSizes.body};
`;
const label = (theme) => `
  font-family: ${theme.fonts.heading}
  font-size: ${theme.fontSizes.body}
  font-weight: ${theme.fontWeights.medium}
`;
const caption = (theme) => `
  font-size: ${theme.fontSizes.caption};
  font-weight: ${theme.fontWeights.bold};
`;

const variants = {
  body,
  hint,
  error,
  label,
  caption,
};

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};
