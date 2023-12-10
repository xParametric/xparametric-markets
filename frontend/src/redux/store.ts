// store/index.ts
import dataReducer from "./dataSlice";
import { configureStore } from "@reduxjs/toolkit";
import questionsReducer from "@/redux/questionSlice";

const store = configureStore({
  reducer: {
    questions: questionsReducer, // Add other reducers here if needed
    data: dataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
