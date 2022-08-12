import { combineReducers, configureStore } from "@reduxjs/toolkit";
import commentsSlice from "./modules/commentsSlice";
import postSlice from "./modules/postSlice";
//로거 각자

// 리듀서 통합
const rootReducer = combineReducers({
  postSlice,
  commentsSlice
 
});

// 스토어 연결
const store = configureStore({
  reducer: rootReducer,

});

export default store;