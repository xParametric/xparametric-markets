declare let window: any;
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import Web3 from "web3";
import Polymarket from "../../../backend/abis/Polymarket.json";
import PolyToken from "../../../backend/abis/PolyToken.json";

interface DataState {
  account: string;
  polymarket: any; // Define more specific types if possible
  polyToken: any; // Define more specific types if possible
  loading: boolean;
}

const initialState: DataState = {
  account: "",
  polymarket: null,
  polyToken: null,
  loading: true,
};

export const loadWeb3 = createAsyncThunk(
  "data/loadWeb3",
  async (_, { rejectWithValue }) => {
    try {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
      } else {
        return rejectWithValue(
          "Non-Eth browser detected. Please consider using MetaMask."
        );
      }
      return await window.web3.eth.getAccounts();
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadWeb3.fulfilled, (state, action: PayloadAction<string[]>) => {
        state.account = action.payload[0];
        state.loading = false;
        // Load blockchain data here or in another thunk
      })
      .addCase(loadWeb3.rejected, (state, action) => {
        state.loading = false;
        window.alert(action.payload);
      });
  },
});

export default dataSlice.reducer;
