import React, { useContext } from 'react'
import styled from 'styled-components'
import { CartContext } from '../../CartContext'

const Card = styled.div`
  margin: .5rem 0;
  height: 250px;
  width: 450px;
  background-color: #2C3333;
  border-radius: 10px;
`

const CardContainer = styled.div`
  color: #fff;
`

const ProductContainer = styled.div`

`

const ProductName = styled.div`

`

const ProductRating = styled.div`

`

const ProductPrice = styled.div`

`

const CardImage = styled.div`

`

const Image = styled.img`

`

function ProductCard(props) {
  const product = props.product;
  const cart = useContext(CartContext)
  console.log(cart.items)

  return (
    <>
    <Card>
      <CardContainer>
        <ProductContainer>
          <ProductName></ProductName>
          <ProductRating>
          </ProductRating>
          <ProductPrice></ProductPrice>
        </ProductContainer>
        <CardImage>
          <Image />
        </CardImage>
      </CardContainer>   
    </Card>
    </>
  )
}

export default ProductCard