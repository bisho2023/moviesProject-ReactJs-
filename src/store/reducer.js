const InitialState = {
  fav: [],
  count: 0,
  mov: [],
};
export default function languageReducer(state = InitialState, action) {
  switch (action.type) {
    case "SET_FAVORITES":
      return { ...state, fav: action.payload };
    case "SET_COUNTER":
      return { ...state, count: action.payload };
    case "SET_MOVIES":
      return { ...state, mov: action.payload };
    default:
      return state;
  }
}
