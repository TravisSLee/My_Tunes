import songsReducer from "./songsReducer";
import artistsReducer from "./artistsReducer";
import searchReducer from "./searchReducer";
import { combineReducers } from "redux";

  
const rootReducer = combineReducers({
    songsReducer,
    artistsReducer,
    searchReducer
  });
  
export default rootReducer