import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ButtonContainer = styled.div`
  color: red;
  transition-property: all;
  transition-duration: .6s;
  transition-timing-function: ease;
`

const Button = styled.a`
  background: rgba(#fff, 0);
  border-bottom: 1px solid;
  color: red;
  line-height: 1.4;
  padding: .25em;
  text-decoration: none;
    
  &:hover {
    background: rgba(#fff, 1);
    color: red;
  }

  &.btn {
    color: red;
    cursor: pointer;
    font-size:16px;
    font-weight: 400;
    line-height: 45px;
    margin: 0 0 2em;
    max-width: 160px; 
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    width: 100%; 

    &:hover {
      text-decoration: none;
    }
  }

  &.btn-1 {
    background: darkgreen(red, 1.5%);
    font-weight: 100;

    svg {
      height: 45px;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }

    rect {
      fill: none;
      stroke: #fff;
      stroke-width: 2;
      stroke-dasharray: 422, 0;
      transition: all 0.35s linear;
    }

    &:hover {
      background: rgba(red, 0);
      font-weight: 900;
      letter-spacing: 1px;

      rect {
        stroke-width: 5;
        stroke-dasharray: 15, 310;
        stroke-dashoffset: 48;
        transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
      }
    }
  }
`

function ButtonTwo({children, onClick}) {
  return (
    <ButtonContainer>
      <Button className='btn btn-1' onClick={onClick}>
      <svg>
        <rect x="0" y="0" fill="none" width="100%" height="100%"/>
      </svg>
        {children}
      </Button>
    </ButtonContainer>

  )
}

export default ButtonTwo