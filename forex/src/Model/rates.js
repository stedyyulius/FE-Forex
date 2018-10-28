const initialState = {};

export default (state = initialState, action) => {
  if (action.type === 'rates') {
    return action.payload;
  }
  return state
}
