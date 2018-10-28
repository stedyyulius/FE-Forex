const initialState = 1;

export default (state = initialState, action) => {
  if (action.type === 'currencyAmount') {
    return action.payload;
  }
  return state
}
