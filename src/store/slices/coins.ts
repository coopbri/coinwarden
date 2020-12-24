import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import * as api from "../../lib/api";
import { Coins } from "../../lib/types";

interface State {
  coins: Coins;
  coinsLoading?: boolean;
}

/**
 * Get coin data (call API method).
 */
export const getCoins = createAsyncThunk(
  "coins/getCoinsStatus",
  async () => await api.fetchCoins(),
);

/**
 * Coins store slice.
 */
const coins = createSlice({
  name: "coins",
  initialState: {
    coins: [],
    coinsLoading: true,
  } as State,
  reducers: {},
  extraReducers: (builder) => {
    /**
     * Coins: pending
     */
    builder.addCase(getCoins.pending, (state: State) => {
      state.coinsLoading = true;
    });
    /**
     * Coins: fulfilled
     */
    builder.addCase(
      getCoins.fulfilled,
      (state: State, action: PayloadAction<{ data: Coins }>) => {
        state.coins = action.payload.data;
        state.coinsLoading = false;
      },
    );
  },
});

export default coins.reducer;
