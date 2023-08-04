import React from 'react'
import TodoCard from './TodoCard'
import { Todo } from '../pages/Main';
import { styled } from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/config/configStore';

interface TodoSectionProps {
  
  isActive: boolean;
  todos: Todo[];
  onClickChange: (id: number) => void
  onClickRemove: (id: number) => void
}

function TodoSection(props: TodoSectionProps) {
  const todos = useSelector((state:RootState)=> state.todos)
  const {isActive} = props
  return (
    <>
      {
        isActive ? <h1>할거</h1> : <h1>한거</h1>
      }
      <SectionBox>
        {todos.filter(todo=> todo.isDone === !isActive).map(Item=> <TodoCard key={Item.id} todoData={Item}   /> )}
      </SectionBox>
      </>
  )
}

const SectionBox = styled.div`
  display: flex;
  height: 200px;
`

export default TodoSection