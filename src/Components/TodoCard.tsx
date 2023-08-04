import React from 'react'
import { useDispatch } from 'react-redux'
import { styled } from 'styled-components';
import { Todo } from '../pages/Main';
import { FlexBox } from '../Components/common/styles';
import Button from './common/Button';
interface TodoProps  {
  todoData: Todo
}

const dispatch = useDispatch()

function TodoCard({todoData}: TodoProps) {

  return (
    <Card>
      <h1>{todoData.title}</h1>
      <h2>{todoData.content}</h2>
     <FlexBox>
        <Button type="button" size='m' onClick={() => onClickChange(todoData.id)}>{todoData.isDone === false ? "완료" : "취소"}</Button>
        <Button type="button" size="m" onClick={()=> onClickRemove(todoData.id)}>삭제</Button>
      </FlexBox>
    </Card>
  )
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #aadcdc;
  width: 200px;
  margin-right: 10px;

`

export default TodoCard