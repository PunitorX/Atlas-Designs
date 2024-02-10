import React from 'react'
import { font } from '../../GlobalFonts'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { color } from '../../GlobalColors'

const ButtonContainer = styled(Link)`
    width: 100%;
    font-family: ${font.FontThree};
    cursor: pointer;
    letter-spacing: 1.4px;
    display: inline-block;
    overflow: hidden;
    color: #DFF6FF;
    background-color: ${color.ColorFive};
    border-color: transparent;
    border: 2px solid;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 500;
    margin: 2rem 0 1rem 0;
    padding: 1rem;
    border-style: solid;
    transition: all 0.5s ease 0s;
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
      background: ${color.ColorThree};
      transform: skewX(45deg) scale(0, 1);
      transition: all 0.5s ease 0s;
    }
    &:focus, &:focus:active {
      box-shadow: none;
    }
    &:hover {
      box-shadow: none;
      color: #DFF6FF;
    }
    &:hover:after {
      transform: skewX(45deg) scale(1, 1);
    }
`

function ButtonThree({children, onClick, to, as, type}) {
    return (
      <ButtonContainer onClick={onClick} to={to} as={as} type={type}>
          {children}
      </ButtonContainer>
    )
  }

export default ButtonThree