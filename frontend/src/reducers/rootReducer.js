import songsReducer from "./songsReducer";
import artistsReducer from "./artistsReducer";
import { combineReducers } from "redux";

  
const rootReducer = combineReducers({
    songsReducer,
    artistsReducer
  });
  
export default rootReducer