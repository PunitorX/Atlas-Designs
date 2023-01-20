import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ButtonContainer = styled.div`
  transition-property: all;
  transition-duration: .6s;
  transition-timing-function: ease;
`

const Button = styled(Link)`
  font-size: .8rem;
  background: rgba(#fff, 0);
  padding: 1rem 2rem;
  text-decoration: none;
  width: 200px;
    
  &:hover {
    background: rgba(#fff, 1);
  }

  &.btn {
    color: #fff;
    cursor: pointer;
    line-height: 45px;
    max-width: 160px; 
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    width: 100%; 

    &:hover {
      font-weight: bold;
    }
  }

  &.btn-1 {
    svg {
      height: 45px;
      left: 0;
      position: absolute;
      width: 100%;
    }

    rect {
      fill: none;
      stroke: #fff;
      stroke-width: 2;
      stroke-dasharray: 422, 0;
      transition: all .75s linear;
    }

    &:hover {
      rect {
        stroke-width: 5;
        stroke-dasharray: 15, 310;
        stroke-dashoffset: 48;
        transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
      }
    }
  }
`

function ButtonTwo({children, onClick, to}) {
  return (
    <ButtonContainer>
      <Button className='btn btn-1' onClick={onClick} to={to}>
      <svg>
        <rect x="0" y="0" fill="none" width="100%" height="100%"/>
      </svg>
        {children}
      </Button>
    </ButtonContainer>

  )
}

export default ButtonTwo