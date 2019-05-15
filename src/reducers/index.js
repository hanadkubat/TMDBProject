import { combineReducers } from "redux";
import tvShows from "./tvReducer";
import movies from "./moviesReducer";
import search from "./searchReducer";
import details from "./detailsReducer";

export default combineReducers({
  tvShows,
  movies,
  search,
  details
});
