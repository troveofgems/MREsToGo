import camelize from "camelize";

import { locations } from "./mock";

export const locationRequest = (searchTerm) => {
  let normalizedSearchTerm = null;
  if (searchTerm) {
    normalizedSearchTerm = searchTerm.toLowerCase();
    normalizedSearchTerm = normalizedSearchTerm.trim();
  }
  return new Promise((resolve, reject) => {
    const locationMock = locations[normalizedSearchTerm];
    if (!locationMock) return reject("No Data For Specified Location");
    resolve(locationMock);
  });
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result.results),
    location = camelize(formattedResponse)[0];

  return location;
};
