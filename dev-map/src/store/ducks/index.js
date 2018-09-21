import { combineReducers } from "redux";

import markers from "./markers";
import viewport from "./viewport";

export default combineReducers({
  markers,
  viewport
});
