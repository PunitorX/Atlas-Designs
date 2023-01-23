import React from 'react'
import styled from 'styled-components'
import { color } from '../GlobalColors'

const ChipContainer = styled.div`
  height: 50px;
  width: 125px;
  position: relative;

  &:before, 
  &:after {
    background-color: ${color.ColorTwo};
    border-radius: 25px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: '';
    opacity: .7;
  }
`

const ChipName = styled.div`
  color: ${color.ColorOne};
  font-size: 1rem;
  font-family: 'Roboto Slab', sans-serif;
  letter-spacing: 1.2px;
  font-weight: 800;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
`

function VideoChip() {
  return (
    <ChipContainer>
      <ChipName>
        Processor
      </ChipName>
    </ChipContainer>
  )
}

export default VideoChip