import { mocks } from "./mock";

export const installationsRequest = ({ lat, lng }) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) reject("Not Found");
    resolve(mock);
  });
};

installationsRequest({
  lat: "",
  lng: "",
});
