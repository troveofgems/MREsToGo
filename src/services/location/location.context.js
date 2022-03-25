import React, { createContext, useEffect, useState } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext(undefined);

export const LocationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false),
    [error, setError] = useState(null),
    [keyword, setKeyword] = useState(null),
    [location, setLocation] = useState(null);

  const onSearch = (searchKeyword) => {
    console.log("Inside onSearch: ", searchKeyword);
    setIsLoading(true);
    setKeyword(searchKeyword);
    locationRequest(searchKeyword)
      .then(locationTransform)
      .then((result) => {
        console.log("Processed Location By Search Term: ", result);
        setIsLoading(false);
        setLocation({
          ...result.geometry.location,
          viewport: result.geometry,
        });
      })
      .catch((err) => {
        console.log("error detected");
        setIsLoading(false);
        setError(err);
      });
  };

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
