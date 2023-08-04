import React, { useState } from 'react'
import TodoSection from '../Components/TodoSection'

import useInput from '../Hooks/useInput';
import TodoForm from '../Components/TodoForm';
export interface Todo {
  id: number,
  title: string,
  content: string,
  isDone: boolean
 }



function Main() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [titleValue,setTitleValue, onChangeTitleHandler] = useInput("");
  const [contentValue,setContentValue, onChangeContentHandler] = useInput("")
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (titleValue.trim().length === 0 || contentValue.trim().length === 0) {
      alert("값을 모두 입력해주세요")
      return
    }
    const newTodo: Todo = {
      id: new Date().getTime(),
      title: titleValue,
      content: contentValue,
      isDone: false
    }
    setTodos([...todos, newTodo])
    setTitleValue("")
    setContentValue("")
  }

  const onClickChange = (id: number) => {
    const newTodo = todos.map(todo => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone
      }
      return todo
    })
   setTodos(newTodo)
  }

  const onClickRemove = (id: number) => {
    const newTodo = todos.filter(todo => todo.id !== id)
    setTodos(newTodo)
  }

  const FormProps = {
    titleValue,
    contentValue,
    onSubmitHandler,
    onChangeTitleHandler,
    onChangeContentHandler,
    onClickChange
  }
  return (
    <>
      <TodoForm FormProps={FormProps} />
      <TodoSection isActive={true} onClickChange={onClickChange} onClickRemove={onClickRemove} />
      <TodoSection isActive={false} onClickChange={onClickChange} onClickRemove={onClickRemove} />
      </>
  )
}

export default Main