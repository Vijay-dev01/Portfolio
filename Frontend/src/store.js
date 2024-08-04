import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import projectsReducer from "./slices/ProjectsSlice";
import projectReducer from "./slices/ProjectSlice"

const reducer = combineReducers({
  projectsState: projectsReducer,
  projectState: projectReducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
