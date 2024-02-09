import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { font } from '../../GlobalFonts'

const Button = styled(Link)`
  font-size: 1rem;
  font-weight: 500;
  font-family: ${font.FontTwo};
  text-decoration: none;
  text-align: center;
  padding: 16px 24px;
  
  &:hover {
    background: rgba(#fff, 1);
  }

  &.btn {
    color: ${(props) => props.color};
    cursor: pointer;
    line-height: 45px;
    position: relative;
    text-transform: uppercase;
    width: auto;

    &:hover {
      font-weight: 900;
    }
  }

  &.btn-1 {
    svg {
      height: 45px; 
      width: 100%;
      left: 0;
      position: absolute;
      border-radius: 8px;
    }

    rect {
      fill: none;
      stroke: ${(props) => props.stroke};
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

function ButtonTwo({children, onClick, to, stroke, color, as, type}) {
  return (
    <Button className='btn btn-1' onClick={onClick} to={to} stroke={stroke} color={color} as={as} type={type}>
      <svg >
        <rect x="0" y="0" fill="none" width="100%" height="100%" />
      </svg>
      {children}
    </Button>

  )
}

export default ButtonTwo