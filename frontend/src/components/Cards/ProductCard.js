import React, { useContext } from 'react'
import styled from 'styled-components'
import { CartContext } from '../../CartContext'
import { productArray } from '../../Data/ProductData'
import { device } from '../../DeviceSize'

const Card = styled.div`
  margin: .5rem 0;
  height: 250px;
  width: 450px;
  background-color: #2C3333;
  border-radius: 10px;

  @media ${device.tablet} {
    height: 325px;
    width: 100%;
  }

  @media ${device.mobileM} {
    height: 250px;
  }
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

function ProductCard() {

  return (
    <>
        {productArray.map((product) => (
          <Card>
            <CardContainer>
              <ProductContainer>
                <ProductName>{product.item}</ProductName>
                <ProductRating></ProductRating>
                <ProductPrice>{product.price}</ProductPrice>
              </ProductContainer>
              <CardImage>
                {product.img}
              </CardImage>
            </CardContainer>   
          </Card>
        ))}
    </>
  )
}

export default ProductCard