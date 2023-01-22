import React from 'react'
import styled from 'styled-components'
import { color } from '../GlobalColors'

const FooterContainer = styled.footer`
  height: 45vh;
  width: auto;
  background-color: ${color.ColorFour};
`

const FooterContain = styled.div`
  height: inherit;
  width: auto;
  padding: 0 2rem;
  margin: 0 2rem;
`

function Footer() {
  return (
    <FooterContainer>
      <FooterContain>

      </FooterContain>
    </FooterContainer>
  )
}

export default Footer