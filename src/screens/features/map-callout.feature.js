import React from "react";
import { CompactMilitaryBaseInfoCard } from "./installations/components/CompactMilitaryBaseInfoCard/CompactMilitaryBaseInfoCard";

export const MapCalloutFeature = ({ installationDetails }) => {
  return <CompactMilitaryBaseInfoCard installationData={installationDetails} />;
};
