import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../CartContext'
import { CartTemplate } from '../components/CartTemplate'
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

const SectionBody = styled.div`
  height: 450px;
  background-color: #fff;
`

const ProductName = styled.h5`

`

const CartEmpty = styled.div`

`

// End Cart Section Styles

// Cart Checkout Styles

const CartCheckout = styled.section`
  background: ${color.ColorFour};
  height: 300px;
  width: 100%;
`

function Cart(props) {
  const product = props.product
  const cart = useContext(CartContext)
  // const productQuantity = cart.getProductQuantity(product.id);
  console.log(cart.items)

  // const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)
  // const productsPrice = cart.getTotalCost().toFixed(2)

  return (
    <>
    <CartContainer>
      <CartContent>

        <CartSection>
          <SectionHeader>
            Shopping Cart
          </SectionHeader>
          <SectionBody>
            {/* <ProductName>{product.items}</ProductName> */}

            {/* {productsCount > 0 ?
            <>

            </> :
            <CartEmpty>Your cart is empty</CartEmpty>
            } */}

          </SectionBody>
        </CartSection>

        <CartCheckout>

        </CartCheckout>

      </CartContent>
    </CartContainer>
    </>
  )
}

export default Cart
