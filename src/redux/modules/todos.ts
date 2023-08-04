import { createSlice, PayloadAction  } from "@reduxjs/toolkit";
import { Todo } from "../../pages/Main";

interface todos  {
  todos: Todo[]
}

const initialState: todos = {
  todos: []
}

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<Todo>) {
      state.todos.push(action.payload)
    },
    removeTodo(state, action: PayloadAction<Todo['id']>) {
      const newState = state.todos.filter(todo => todo.id !== action.payload)
      state.todos  = newState
    },
    changeTodo(state, action: PayloadAction<Todo['id']>) {
      state.todos.map((todo:Todo) => {
        if (todo.id === action.payload) {
         todo.isDone = !todo.isDone
        }
        return todo
      })
    }
  }
})
export const {addTodo, removeTodo, changeTodo } = todoSlice.actions
export default todoSlice.reducer