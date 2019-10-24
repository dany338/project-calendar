import { URL_API_WEATHER } from '../config/const';
import endpoints from '../config/endpoints';

const fetchParams = (method, data = '') => {
  const body = data ? { body: JSON.stringify(data) } : {};

  return {
    method,
    headers: apiHeaders,
    credentials: 'same-origin',
    ...body,
  };
};

const apiHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: '',
};

export const apiWeather = {
  weather: async (id) => {
    try {
      const response = await fetch(`${URL_API_WEATHER}${endpoints.weather.getData}/${id}`, fetchParams('GET'));
      if (!response.ok) {
        throw new Error(response.status_message);
      }
      const data = await response.json();
      console.log('response data', data);
      if (data.error) {
        throw new Error(data.error);
      }
      return data;
    } catch (error) {
      console.error(error);
    }
  },
};
