import axios from 'axios';

import api from './config';

export const getRates = (currency) => {
  return (dispatch) => {
    axios.get(`${api}?base=${currency}`)
    .then((response) => {
      dispatch({
        type: 'rates',
        payload: response.data.rates,
      })
      dispatch({
        type: 'currency',
        payload: currency,
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }
}

export const changeCurrencyAmount = (amount) => {
  return {
    type: 'currencyAmount',
    payload: amount,
  }
}
