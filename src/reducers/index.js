import { combineReducers } from "redux";
import FootBallReducer from "./footballReducer";
import SelectedFootballerReducer from "./selectedFootballerReducer";

const rootReducer = combineReducers({
  football: FootBallReducer,
  selectedFootballer: SelectedFootballerReducer
});

export default rootReducer;
