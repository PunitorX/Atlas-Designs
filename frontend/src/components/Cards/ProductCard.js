import React, { useContext } from 'react'
import styled from 'styled-components'
import { CartContext } from '../../CartContext'
import ButtonTwo from '../Buttons/ButtonTwo'
import CartTemplate from '../CartTemplate'

const Card = styled.div`
  /* padding: 14px; */
  height: 400px;
  width: 350px;
  color: #fff;
  background-color: #0d47a1;
  padding: 16px;
  margin: 8px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  border-radius: 10px;
`

const CardHeader = styled.h3`
  letter-spacing: .6px;
  font-size: 16px;
`

const CardPrice = styled.div`
  letter-spacing: .6px;
  font-size: 24px;
  font-weight: bold;
`

const CardContainer = styled.div`
  background-color: #fff;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  border-radius: 10px;
  display: flex;
  align-items: center;
`

const CardImg = styled.img`
  width: 175px;
  height: auto;
  margin: 0 auto;
`

const CardBtns = styled.div`
  padding: 2rem 0 0 0;
  margin: 0 auto;
  display: flex;
  gap: 15px;
  /* margin-top: auto; */
`

const ProductCard = (props) => {
  const product = props.product
  const cart = useContext(CartContext)
  const productQuantity = cart.getProductQuantity(product.id)
  console.log(cart.items)

  return (
    <>
        <Card>
          <CardContainer>
            <CardImg src={product.img}/>
          </CardContainer>
          <CardHeader>{product.item}</CardHeader>
          <CardPrice>${product.price}</CardPrice>
          <CardBtns>
            <ButtonTwo stroke={'#fdc500'} color={'#fdc500'} type={'button'}>View</ButtonTwo>
            {productQuantity > 0 ? (
              <>
                <ButtonTwo stroke={'#fdc500'} color={'#fdc500'} type={'button'} onClick={() => cart.deleteFromCart(product.id)}>Remove from cart</ButtonTwo>
              </>
              ) : (
              <>
                <ButtonTwo stroke={'#fdc500'} color={'#fdc500'} type={'button'} onClick={() => cart.addToCart(product.id)}>Add to cart</ButtonTwo>
              </>
            )}
          </CardBtns>
          
        </Card>
    </>
  )
}

export default ProductCard