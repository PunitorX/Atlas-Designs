import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ButtonContainer = styled(Link)`
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    letter-spacing: 1px;
    font-weight: 600;
    
    display: inline-block;
    overflow: hidden;
    color: #000;
    background-color: #A5C9CA;
    border: 2px solid transparent;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 700;
    padding: 1rem;
    border-style: solid;
    transition: all 0.3s ease 0s;
    text-decoration: none;
    z-index: 1;
    position: relative;
    &:after {
      position: absolute;
      content: "";
      z-index: -1;
      display: block;
      left: -20%;
      right: -20%;
      top: -4%;
      height: 150%;
      width: 150%;
      bottom: 0;
      background: #2C3333;
      transform: skewX(45deg) scale(0, 1);
      transition: all 0.5s ease 0s;
    }
    &:focus, &:focus:active {
      box-shadow: none;
    }
    &:hover {
      box-shadow: none;
      color: #fff;
    }
    &:hover:after {
      transform: skewX(45deg) scale(1, 1);
    }
`

function ButtonOne({children, onClick, to, as, type}) {
    return (
      <ButtonContainer onClick={onClick} to={to} as={as} type={type}>
          {children}
      </ButtonContainer>
    )
  }

export default ButtonOne