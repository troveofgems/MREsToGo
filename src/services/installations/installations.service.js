import { mocks } from "./mock";
import camelize from "camelize";

export const installationsRequest = (location) => {
  const { lat, lng } = location,
    requestedLocation = `${lat},${lng}`;

  return new Promise((resolve, reject) => {
    const mock = mocks[requestedLocation];
    if (!mock) reject("State Data Not Available");
    resolve(mock);
  });
};

export const dataTransformer = ({ data: { results } }) => {
  const mappedResults = results.map((installation) => {
    installation.photos =
      typeof installation.photos[0] === "string"
        ? [installation.photos[0]]
        : [];

    return {
      ...installation,
      isOperational: installation.business_status === "OPERATIONAL",
      isTemporarilyClosed:
        installation.business_status === "TEMPORARILY_CLOSED",
    };
  });
  return camelize(mappedResults);
};
