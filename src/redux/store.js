import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import CoinReducer from './coin/home';

const store = configureStore({
  reducer: {
    cryptoCoin: CoinReducer,
    middleware: [thunk],
  },
});

export default store;
