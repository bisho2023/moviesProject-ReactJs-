import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import languageReducer from "./reducer";
const store = createStore(languageReducer, applyMiddleware(thunk));

export default store;
