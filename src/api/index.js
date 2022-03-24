import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.latitude,
        tr_latitude: ne.latitude,
        bl_longitude: sw.longitude,
        tr_longitude: ne.longitude,
      },
      headers: {
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        "X-RapidAPI-Key": "f4918b1838msh4a79aae3ffa3ba1p14386djsnaae7e4443610",
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};