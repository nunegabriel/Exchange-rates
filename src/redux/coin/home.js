import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_DETAIL = 'coin/FETCH_DETAIL';
const FETCH_COIN = 'coin/FETCH_COIN';

// fetch coin
export const fetchCoin = createAsyncThunk(FETCH_COIN, async () => {
  const response = await fetch('https://api.coincap.io/v2/markets');

  const { data } = await response.json();
  const slicedData = [];
  data.slice(0, 8).forEach((element) => {
    slicedData.push({ ...element, ...{ show: false } });
  });

  return slicedData;
});

// actions
export const coinDetail = (id) => (dispatch) => {
  dispatch({
    type: FETCH_DETAIL,
    payload: id,
  });
};

function filterCoin(state, id) {
  return state.findIndex((coin) => coin.baseSymbol === id);
}

// create reducer
const CoinReducer = (state = [], { type, payload }) => {
  switch (type) {
    case 'coin/FETCH_COIN/fulfilled':
      return payload;
    case FETCH_DETAIL:
      return [...state, {
        ...state[filterCoin(state, payload)],
        show: !state[filterCoin(state, payload)].show,
      }];

    default:
      return state;
  }
};

export default CoinReducer;
