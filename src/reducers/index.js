import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
// import photos from "./photos";
// import profile from "./profile";
import counter from "./counter";
import user from "./user";

export default history =>
  combineReducers({
    counter,
    router: connectRouter(history),
    user
    // profile,
    // photos,
  });
