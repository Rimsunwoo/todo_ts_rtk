import React from 'react'
import { styled, css } from 'styled-components';

interface ButtonProps{
  type: "button" | "submit";
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=> void
  size: "l"|"m"|"s";
  children: React.ReactNode
}

function Button({type, onClick, size, children}: ButtonProps) {
  return (
    <StyledButton type={type} onClick={onClick} btnSize={size}  >{children}</StyledButton>
    )
}

const StyledButton = styled.button<{ btnSize: string }>`
 ${(props) => {
  switch (props.btnSize) {
    case "l":
      return css`
      width: 100px;
      height: 30px;
      border: 1px solid;
      border-radius:10px;
      font-size: 20px;
      background-color: #edcdc9;

      `
    case "m":
      return css`
      width: 60px;
      height: 20px;
      border: 1px solid;
      background-color: #edcdc9;
      `;
  }
 }}
`

export default Button