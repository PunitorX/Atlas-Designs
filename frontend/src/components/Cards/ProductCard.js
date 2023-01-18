import React, { useContext } from 'react'
import styled from 'styled-components'
import { CartContext } from '../../CartContext'
import { productArray } from '../../Data/ProductData'
import { device } from '../../DeviceSize'
import StarRating from '../StarRating'

const Card = styled.div`
  margin: .5rem 0;
  height: 300px;
  width: 450px;
  background-color: #2C3333;
  border-radius: 10px;

  /* @media ${device.tablet} {
    height: 325px;
    width: 100%;
  }

  @media ${device.mobileM} {
    height: 250px;
  } */
`

const CardContainer = styled.div`
  color: #fff;
  display: flex;
  flex-direction: row-reverse;
`

const CardImage = styled.div`
  background-color: #fff;
`

const Image = styled.img`
  width: 200px;
  height: auto;
  display: block;
  margin: 0 auto;
`

const ProductContainer = styled.div`
  /* display: block;
  margin: 0 auto;
  width: 400px; */
`

const ProductName = styled.a`

`

const ProductRating = styled.div`
  display: flex;
  align-items: center;
`

const StarRateCount = styled.div`

`

const ProductPrice = styled.div`

`

function ProductCard() {

  return (
    <>
        {productArray.map((product) => (
          <Card>
            <CardContainer>
              <CardImage>
                <Image src={product.img}/>
              </CardImage>
              <ProductContainer>
                <ProductName to='/'>{product.item}</ProductName>
                <ProductRating>
                  <StarRating value={product.value}/>
                  <StarRateCount>({product.ratingCount})</StarRateCount>
                </ProductRating>
                <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
              </ProductContainer>
            </CardContainer>   
          </Card>
        ))}
    </>
  )
}

export default ProductCard