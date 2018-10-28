const initialState = '';

export default (state = initialState, action) => {
  if (action.type === 'currency') {
    return action.payload;
  }
  return state
}
