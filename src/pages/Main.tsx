import React from 'react'
import TodoSection from '../Components/TodoSection'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux/config/configStore';
import useInput from '../Hooks/useInput';
import TodoForm from '../Components/TodoForm';
import { addTodo } from '../redux/modules/todos';
export interface Todo {
  id: number,
  title: string,
  content: string,
  isDone: boolean
 }



function Main() {
  const dispatch:AppDispatch = useDispatch()
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
    dispatch(addTodo(newTodo))
    setTitleValue("")
    setContentValue("")
  }

 

  const FormProps = {
    titleValue,
    contentValue,
    onSubmitHandler,
    onChangeTitleHandler,
    onChangeContentHandler,
  }
  return (
    <>
      <TodoForm FormProps={FormProps} />
      <TodoSection isActive={true}  />
      <TodoSection isActive={false} />
      </>
  )
}

export default Main