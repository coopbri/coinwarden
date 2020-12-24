// External API methods

import axios, { AxiosResponse } from "axios";

import { Coins } from "./types";

// base URL of API
const API_BASE_URL = "https://api.coingecko.com/api/v3";

/**
 * Fetch coin data from API.
 */
export const fetchCoins = async (): Promise<AxiosResponse<Coins>> => {
  try {
    // make request for top 100 cryptocurrency data
    const res = await axios.get(
      `${API_BASE_URL}/coins/markets?vs_currency=usd`,
    );

    return res;
  } catch (err) {
    throw err;
  }
};
