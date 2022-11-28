import axios from 'axios';

export async function getImage(name) {
  const get = await axios.get(
    `https://api.weatherapi.com/v1/current.json?key=11de967f0d7848f5b0a123920222711&q=${name}`
  );
  return get.data;
}

export async function getWeatherSevenDays(name) {
  const get = await axios.get(
    `https://api.weatherapi.com/v1/current.json?key=11de967f0d7848f5b0a123920222711&q=${name}`
  );
  return get.data;
}
