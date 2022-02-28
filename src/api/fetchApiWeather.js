import axios from "axios";

const URL = "http://api.weatherapi.com/v1/forecast.json";
const API_KEY = "3b2395e88b5f449bbe6120349222802";

export const FetchWeather = async (query) => {
  try {
    const { data } = await axios.get(URL, {
      params: {
        key: API_KEY,
        q: query,
        days: "5",
      },
    });
    return [...data.forecast.forecastday];
  } catch (error) {
    console.log(error);
  }
};
