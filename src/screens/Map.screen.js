import React, { useContext, useState, useEffect } from "react";
import { View } from "react-native";
import MapView from "react-native-maps";
import { LocationContext } from "../services/location/location.context";
import { InstallationsContext } from "../services/installations/installations.context";
import { MapCalloutFeature } from "./features/map-callout.feature";
import { SearchMap } from "./features/search/Search.map";
import {
  MapScreenSearchContainer,
  Map,
} from "../infrastructure/layout/app.styled.component";

export function MapScreen({ navigation }) {
  const [regionalCoords, setRegionalCoords] = useState(null),
    { location } = useContext(LocationContext),
    { installations = [] } = useContext(InstallationsContext);

  useEffect(() => {
    if (location) {
      console.log(installations);
      setRegionalCoords({
        latitude: location.lat,
        longitude: location.lng,
        latitudeDelta: location.fakedLatDelta,
        longitudeDelta: 0.02,
      });
    }
  }, [location]);

  return (
    <>
      <MapScreenSearchContainer>
        <SearchMap placeholder={"Search the World"} />
      </MapScreenSearchContainer>
      <View>
        <Map region={regionalCoords}>
          {installations.map((installation) => {
            return (
              <MapView.Marker
                key={installation.name}
                title={installation.name}
                coordinate={{
                  latitude: installation.geometry.location.lat,
                  longitude: installation.geometry.location.lng,
                }}
              >
                <MapView.Callout
                  onPress={() => {
                    return navigation.navigate("InstallationDetail", {
                      installationDetail: { item: installation },
                    });
                  }}
                >
                  <MapCalloutFeature installationDetails={installation} />
                </MapView.Callout>
              </MapView.Marker>
            );
          })}
        </Map>
      </View>
    </>
  );
}
