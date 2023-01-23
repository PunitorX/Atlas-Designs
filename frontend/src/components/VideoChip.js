import React from 'react'
import styled from 'styled-components'

const ChipContainer = styled.div`
  height: 50px;
  width: 125px;
  background-color: #fff;
  color: #000;
  border-radius: 25px;
`

const ChipName = styled.div`
  height: inherit;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
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