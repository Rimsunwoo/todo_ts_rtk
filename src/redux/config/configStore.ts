import { configureStore } from "@reduxjs/toolkit";
import todos from "../modules/todos";


const store = configureStore({
  reducer: todos
})

export type RootState = ReturnType<typeof store.getState>


export default store