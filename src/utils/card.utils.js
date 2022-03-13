import React from "react";
import { SvgXml } from "react-native-svg";
import StarXMLString from "../../assets/star";

export const printStars = (totalStars, card) => {
  let starContainer = [];

  for (let i = 0; i < totalStars; i += 1) {
    starContainer.push(
      <SvgXml
        xml={StarXMLString}
        width={20}
        height={20}
        key={`${card}_${totalStars}${i}`}
      />
    );
  }
  return starContainer;
};
