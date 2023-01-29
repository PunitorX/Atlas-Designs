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
  font-family: ${font.FontTwo};
  color: ${color.ColorTwo};
  display: grid;
  grid-template-columns: 2fr 1fr;
  /* gap: 15px; */
`

// Cart Section Styles

const CartSection = styled.section`
  background-color: ${color.ColorThree};
  padding: 0 1.5rem;
  height: 550px;
  width: 850px;
`

const SectionHeader = styled.h2`
  padding: .5rem 0;
  letter-spacing: 1.2px;
  border-bottom: 1px solid ${color.ColorTwo};
`

// End Cart Section Styles

// Cart Checkout Styles

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
          <SectionHeader>
            Shopping Cart
          </SectionHeader>
        </CartSection>
        <CartCheckout>

        </CartCheckout>
      </CartContent>
    </CartContainer>
  )
}
