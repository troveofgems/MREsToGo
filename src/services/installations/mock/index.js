import MOCK_AK from "./alaska.json";
import MOCK_CA from "./california.json";
import MOCK_TX from "./texas.json";

export const mocks = {
  alaska: {
    lat: 66.160507,
    long: -153.369141,
    dms_lat: "66° 9' 37.8252\" N",
    dms_long: "153° 22' 8.9076\" W",
    utm_easting: 483351.4,
    utm_northing: 7337849.85,
    data: MOCK_AK,
  },
  california: {
    lat: 36.778259,
    long: -119.417931,
    dms_lat: "36° 46' 41.7324\" N",
    dms_long: "119° 25' 4.5516\" W",
    utm_easting: 284220.6,
    utm_northing: 4073001.31,
    data: MOCK_CA,
  },
  texas: {
    lat: 31.0,
    long: -100.0,
    dms_lat: "31° 0' 0.0\" N",
    dms_long: "119° 0' 0.0\" W",
    utm_easting: 404531.65,
    utm_northing: 3430031.05,
    data: MOCK_TX,
  },
};
