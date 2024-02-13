import React, { useContext } from 'react'
import { CartContext } from '../CartContext'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { device } from '../DeviceSize'
import { color } from '../GlobalColors'
import { font } from '../GlobalFonts'
import CartTemplate from '../components/CartTemplate'
// import RightArrow from '../Images/icons/next.png'

const CartContainer = styled.div`
  height: auto;
  padding: 24px 0;
  width: 75%;
  margin: 0 auto;
`

const CartContent = styled.div`
  height: auto;
  width: 100%;
  font-family: ${font.FontTwo};
  color: #000;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
`

// Cart Section Styles

const CartSection = styled.section`
  background-color: #fff;
  padding: 0 1.5rem;
  height: 100%;
  width: 850px;
  display: flex;
  flex-direction: column;
`

const SectionHeader = styled.h2`
  padding: .5rem 0;
  letter-spacing: 1.2px;
  border-bottom: 2px solid blue;
`
// Items in the cart (start)
const SectionBody = styled.div`
  height: 550px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: blue;
    border-radius: 10px;
  }
`

const CartProducts = styled.div`
  
`

// Items in the cart (end)
const CartTotal = styled.div`
  margin: 1rem 0;
  padding: 1rem 0 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-top: 2px solid blue;
`

const CartTotalItems = styled.div`
  padding-bottom: 8px;
`

const CartTotalPrice = styled.div`

`

const CartEmpty = styled.div`

`

const CartCheckout = styled.section`
  background: #fff;
  color: #000;
  height: auto;
  width: 100%;
  padding: 0 16px 16px;
  display: flex;
  flex-direction: column;
`

const CheckoutForm = styled.form`
  display: flex;
  flex-direction: column;
`

const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

const FormHeader = styled.h3`
  font-size: 18px;
  margin-top: 0;

  &:nth-child(3) {
    margin-top: 18px;
  }

`

const CheckoutInput = styled.input`
  flex: 1;
  padding: 6px;
`

const CheckoutTotal = styled.div`
  display: flex;
  margin-top: auto;
`

const CheckoutPrice = styled.div`
  padding: 0 0 12px 6px;
  font-weight: bold;

`

const CheckoutLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  border: none;
  padding: 12px 24px;
  background-color: ${color.ColorSeven};
  font-size: 18px;
  font-family: ${font.FontThree};
  color: #000;
  text-decoration: none;
  letter-spacing: .6px;
  border-radius: 3px;
  transition: all 300ms ease;

  &:hover {
    transition: all 300ms ease;
    background-color: ${color.SecondaryColorOne};
  }
`

const CheckoutCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

const CheckoutCardNumber = styled.input`
  flex: 1;
  padding: 6px;
`

const CheckoutExpire = styled.input`
  flex: 1;
  padding: 6px;
`

const CheckoutCode = styled.input`
  flex: 1;
  padding: 6px;
`

function Cart() {
  const cart = useContext(CartContext);
  // const productQuantity = cart.getProductQuantity(product.id);
  // console.log(cart.items);

  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)
  const productsPrice = cart.getTotalCost().toFixed(2)

  return (
    <>
    <CartContainer>
      <CartContent>

        <CartSection>
          <SectionHeader>
            Shopping Cart
          </SectionHeader>
          <SectionBody> {/* Items in the cart; Ternary statement */}
            {productsCount > 0 ?
            <>
              <CartProducts>
                {cart.items.map((product, index) => (
                  <CartTemplate key={index} id={product.id} quantity={product.quantity} price={product.price} />
                ))}
              </CartProducts>
            </> :
            <CartEmpty>Your cart is empty</CartEmpty>
            }
          </SectionBody>
          <CartTotal> 
            <CartTotalItems>Items: ({productsCount})</CartTotalItems>
            <CartTotalPrice>Subtotal: (${productsPrice})</CartTotalPrice>
          </CartTotal>
        </CartSection>

        <CartCheckout>
          <SectionHeader>
            Shopping Cart
          </SectionHeader>
          <CheckoutForm>
            <FormHeader>Delivery Information</FormHeader>
            <FormContainer>
              <CheckoutInput placeholder='First Name' />
              <CheckoutInput placeholder='Last Name'/>
              <CheckoutInput placeholder='Email Address' />
              <CheckoutInput placeholder='Phone Number'/>
              <CheckoutInput placeholder='Street Address'/>
              <CheckoutInput placeholder='Apt/Suite/Floor'/>
              <CheckoutInput placeholder='City'/>
              <CheckoutInput placeholder='State'/>
              <CheckoutInput placeholder='Zipcode'/>
            </FormContainer>
            <FormHeader>Card Information</FormHeader>
            <CheckoutCard>
              <CheckoutCardNumber placeholder='Card Number'></CheckoutCardNumber>
              <CheckoutExpire placeholder='Expiration Date'></CheckoutExpire>
              <CheckoutCode placeholder='CVV'></CheckoutCode>
            </CheckoutCard>
          </CheckoutForm>
          <CheckoutTotal>Subtotal ({productsCount} items): <CheckoutPrice>${productsPrice}</CheckoutPrice></CheckoutTotal>
          <CheckoutLink>
            Submit Purchase
            {/* <CheckoutImg src={RightArrow}/> */}
          </CheckoutLink>
        </CartCheckout>
      </CartContent>
    </CartContainer>
    </>
  )
}

export default Cart
