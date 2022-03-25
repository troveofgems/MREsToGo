import React, { useContext, useState, createContext, useEffect } from "react";
import { installationsRequest, dataTransformer } from "./installations.service";
import { LocationContext } from "../location/location.context";

export const InstallationsContext = createContext(undefined);

export const InstallationsContextProvider = ({ children }) => {
  const [installations, setInstallations] = useState([]),
    [isLoading, setIsLoading] = useState(false),
    [error, setError] = useState(null),
    { location } = useContext(LocationContext);

  const retrieveInstallations = (location) => {
    console.log("Received Geoloc Data, retrieving bases: ", location);
    setIsLoading(true);
    setTimeout(() => {
      installationsRequest(location)
        .then(dataTransformer)
        .then((transformedData) => {
          setIsLoading(false);
          setInstallations(transformedData);
        })
        .catch((err) => {
          setIsLoading(false);
          return setError(err);
        });
    }, 3000);
  };

  useEffect(() => {
    if (!location) {
      return;
    }
    console.log("Location change detected!!", location);
    retrieveInstallations(location);
  }, [location]);

  // This wraps the app and provides state
  return (
    <InstallationsContext.Provider
      value={{
        installations,
        isLoading,
        error,
      }}
    >
      {children}
    </InstallationsContext.Provider>
  );
};
