import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { List, Avatar } from "react-native-paper";

import { MilitaryBaseInfoCard } from "./military-base-infocard";

import DropGate from "../../../../../assets/img/boom-gate-alert-outline.png";
import Gate from "../../../../../assets/img/gate.png";

export const InstallationInfoCard = ({ installationData }) => {
  const [servicesExpanded, setServicesExpanded] = useState(false),
    [securityExpanded, setSecurityExpanded] = useState(false);

  return (
    <>
      <MilitaryBaseInfoCard installationInfo={installationData} />
      <ScrollView>
        <List.Section title={"Base Information"}>
          <List.Accordion
            title={"Security Levels"}
            left={() => (
              <Avatar.Image
                size={32}
                source={DropGate}
                style={{ backgroundColor: "#bcbcbc", borderRadius: "0" }}
              />
            )}
            style={{ backgroundColor: "#bcbcbc" }}
            expanded={securityExpanded}
            onPress={() => setSecurityExpanded(!securityExpanded)}
          >
            <View>
              <List.Item
                title={"HPCON"}
                description={"Charlie"}
                left={() => (
                  <Avatar.Text
                    style={{ backgroundColor: "#fdfd96" }}
                    size={24}
                    label={"C"}
                  />
                )}
                titleStyle={{ padding: "0%", margin: "0%" }}
              />
              <List.Item
                title={"FPCON"}
                description={"Bravo+"}
                left={() => (
                  <Avatar.Text
                    style={{ backgroundColor: "#00008B" }}
                    size={24}
                    label={"B+"}
                  />
                )}
              />

              <List.Item
                title={"Open Gates"}
                description={"2 Currently Available - North / NorthEast"}
                left={() => (
                  <Avatar.Image
                    size={24}
                    style={{ backgroundColor: "#013220" }}
                    source={Gate}
                  />
                )}
              />
              <List.Item title={"Gate Entry Wait-Time: <5 min. approx."} />
            </View>
          </List.Accordion>
          <List.Accordion
            title={"On-Base Services"}
            left={() => (
              <Avatar.Image
                size={24}
                style={{ backgroundColor: "#bcbcbc", borderRadius: "0" }}
              />
            )}
            expanded={servicesExpanded}
            style={{ backgroundColor: "#bcbcbc" }}
            onPress={() => setServicesExpanded(!servicesExpanded)}
          >
            <List.Item title={"BX"} />
            <List.Item title={"Commissary"} />
            <List.Item title={"Pool"} />
            <List.Item title={"Library"} />
            <List.Item title={"Hospital"} />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </>
  );
};
