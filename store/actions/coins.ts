import axios from "axios";

export const FETCH_COIN_DATA = "FETCH_COIN_DATA";
export const FETCH_COIN_DATA_SUCCESS = "FETCH_COIN_DATA_SUCCESS";
export const FETCH_COIN_DATA_FAIL = "FETCH_COIN_DATA_FAIL";

export const fetchCoinData = () => {
  const apiBaseURL = "https://api.coingecko.com/api/v3";
  const coins = [
    "bitcoin",
    "ethereum",
    "tether",
    "ripple",
    "monero",
    "stellar",
  ];
  var coinData = [];

  return async (dispatch) => {
    dispatch({ type: FETCH_COIN_DATA });

    try {
      // make request for top 100 cryptocurrency data
      const res = await axios.get(
        `${apiBaseURL}/coins/markets?vs_currency=usd`
      );
      dispatch({ type: FETCH_COIN_DATA_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch({ type: FETCH_COIN_DATA_FAIL, payload: err.data });
      // throw err;
    }
  };
};
