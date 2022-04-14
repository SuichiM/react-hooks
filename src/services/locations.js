/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import env from '../env';

const BASE_URL = 'http://api.positionstack.com/v1/forward';

export const getLocation = async (address) => {
  const url = `${BASE_URL}?access_key=${env.positionStackApiKey}&query=${address}`;
  const { data } = await axios.get(url);

  return data.data[0] || {};
};
