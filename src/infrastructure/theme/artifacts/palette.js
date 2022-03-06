import * as paletteList from "./palette.defs";

const {
  LIGHT_BLUE,
  MIDDLE_BLUE,
  MUTE,
  GENERAL_ERROR,
  GENERAL_SUCCESS,
  GENERAL_TEXT,
  GREY_61,
  GREY_75,
  GREY_87,
  WHITE,
  WHITE_SMOKE,
} = paletteList;

export const palette = {
  brand: {
    primary: LIGHT_BLUE,
    secondary: MIDDLE_BLUE,
    muted: MUTE,
  },
  ui: {
    primary: GENERAL_TEXT,
    secondary: GREY_75,
    tertiary: WHITE_SMOKE,
    quaternary: WHITE,
    disabled: GREY_87,
    error: GENERAL_ERROR,
    success: GENERAL_SUCCESS,
  },
  bg: {
    primary: WHITE,
    secondary: WHITE_SMOKE,
  },
  text: {
    primary: GENERAL_TEXT,
    secondary: GREY_75,
    disabled: GREY_61,
    inverse: WHITE,
    error: GENERAL_ERROR,
    success: GENERAL_SUCCESS,
  },
};
