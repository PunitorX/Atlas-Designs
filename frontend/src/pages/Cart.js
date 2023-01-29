import React from 'react'
import styled from 'styled-components'
import { device } from '../DeviceSize'
import { color } from '../GlobalColors'
import { font } from '../GlobalFonts'

const CartContainer = styled.div`
  height: 90vh;
  margin: 2rem 4rem;
`

const CartContent = styled.div`
  height: inherit;
  width: 100%;
  color: ${color.ColorTwo};
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 15px;
`

const CartSection = styled.section`
  background-color: ${color.ColorThree};
  height: 550px;
  width: 100%;
`

const CartCheckout = styled.section`
  background: ${color.ColorFour};
  height: 300px;
  width: 100%;
`

export const Cart = () => {
  return (
    <CartContainer>
      <CartContent>
        <CartSection>

        </CartSection>
        <CartCheckout>

        </CartCheckout>
      </CartContent>
    </CartContainer>
  )
}
