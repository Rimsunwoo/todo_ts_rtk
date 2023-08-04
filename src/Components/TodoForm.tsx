import React from 'react'
import Button from './common/Button';
import Input from './common/Input';
import { styled } from 'styled-components';
interface TodoFormProps {
  FormProps: {
    titleValue: string;
    contentValue: string;
    onChangeTitleHandler: (e:React.ChangeEvent<HTMLInputElement>)=> void
    onSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void
    onChangeContentHandler : (e:React.ChangeEvent<HTMLInputElement>)=> void
  }

}


function TodoForm(props: TodoFormProps) {
  const {titleValue, contentValue, onSubmitHandler,onChangeTitleHandler,onChangeContentHandler} = props.FormProps
  return (
    <StyledForm onSubmit={onSubmitHandler}>
        <label htmlFor="title">제목</label>
        <Input id='title' type="text" value={titleValue} onChange={onChangeTitleHandler} />
        <label htmlFor="contnet">내용</label>
        <Input id='content' type="text" value={contentValue} onChange={onChangeContentHandler} />
        <Button type="submit" size="l">저장</Button>
      </StyledForm>
  )
}

const StyledForm = styled.form`
  display: flex;
`

export default TodoForm