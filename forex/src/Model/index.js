import { combineReducers } from 'redux';

import currency from './currency';
import currencyAmount from './currencyAmount';
import rates from './rates';


export default combineReducers({
  currency,
  currencyAmount,
  rates,
})
