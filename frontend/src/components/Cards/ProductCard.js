import React, { useContext } from 'react'
import styled from 'styled-components'
import { CartContext } from '../../CartContext'
import ButtonTwo from '../Buttons/ButtonTwo'
import CartTemplate from '../CartTemplate'

const Card = styled.div`
  height: 400px;
  width: 550px;
  color: #fff;
  background-color: #000;
  /* position: relative; */
`

const CardHeader = styled.h3`

`

const CardPrice = styled.div`

`

const ProductName = styled.div`

`

const ProductBody = styled.div`

`

const CartEmpty = styled.div`

`

const ProductCard = (props) => {
  const product = props.product
  const cart = useContext(CartContext)
  const productQuantity = cart.getProductQuantity(product.id)
  console.log(cart.items)

  return (
    <>
        <Card>
          <CardHeader>{product.item}</CardHeader>
          <CardPrice>{product.price}</CardPrice>
          {productQuantity > 0 ? (
            <>
              <ButtonTwo stroke={'#fff'} color={'#fff'} onClick={() => cart.deleteFromCart(product.id)}>Remove from cart</ButtonTwo>
            </>
          ) : (
            <>
              <ButtonTwo stroke={'#fff'} color={'#fff'} onClick={() => cart.addToCart(product.id)}>Add to cart</ButtonTwo>
            </>
          )}
        </Card>
    </>
  )
}

export default ProductCard