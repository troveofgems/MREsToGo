import React from "react";

import { Spacer } from "../../../components/layout/spacer.component";
import { InstallationInfoCard } from "../components/MilitaryBaseInfoCard/installation-infocard";

export const InstallationDetailScreen = ({ route }) => {
  const { installationDetail } = route.params;
  return (
    <>
      <Spacer position={"top"} size={"large"} />
      <InstallationInfoCard installationData={installationDetail} />
    </>
  );
};
