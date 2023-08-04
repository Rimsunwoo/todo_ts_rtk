import React from 'react'
import { styled } from 'styled-components'

interface InputProps{
  id: string;
  type: string;
  value: string;
  onChange?: (e:React.ChangeEvent<HTMLInputElement>)=> void

}

function Input({ id, type, value, onChange}:InputProps) {
  return (
    <StyledInput id={id} type={type} value={value} onChange={onChange}></StyledInput>
  )
}

const StyledInput = styled.input`
  width: 200px;
  height: 23px;
  border-radius: 10px;
  margin-right: 10px;
`

export default Input