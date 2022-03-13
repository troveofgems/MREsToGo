import React, { useState } from "react";
import { Banner } from "react-native-paper";

export const BannerComponent = ({ isVisible, children }) => {
  const [bannerIsVisible, setBannerIsVisible] = useState(isVisible);

  return (
    <Banner
      visible={bannerIsVisible}
      actions={[
        {
          label: "Learn more",
          onPress: () => setBannerIsVisible(false),
        },
      ]}
      style={{ textAlign: "center" }}
    >
      {children}
    </Banner>
  );
};
