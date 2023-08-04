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
      state.todos.filter(todo=> todo.id !== action.payload)
    },
    changeTodo(state, action: PayloadAction<Todo['id']>) {
      state.todos.map(todo => {
        if (todo.id === action.payload) {
         todo.isDone = !todo.isDone
        }
        return todo
      })
    }
  }
})

export default todoSlice.reducer