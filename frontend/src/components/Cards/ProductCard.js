import React, { useContext } from 'react'
import styled from 'styled-components'
import { CartContext } from '../../CartContext'
import { productArray } from '../../Data/ProductData'
import { device } from '../../DeviceSize'
import ButtonThree from '../Buttons/ButtonThree'
import ButtonTwo from '../Buttons/ButtonTwo'
import StarRating from '../StarRating'

const Card = styled.div`
  margin: .5rem 0;
  height: 300px;
  width: 400px;
  background-color: #2C3333;
  border-radius: 10px;
  padding: 1rem;
`

const CardContainer = styled.div`
  color: #fff;
  height: inherit;
`

const TopHalf = styled.div`
  height: 75%;
  display: flex;
`

const CardImage = styled.div`

`

const Image = styled.img`
  width: 175px;
  height: auto;
`

const ProductContainer = styled.div`
  height: 100%;
  padding: 0 1rem;
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

const CardButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
`

function ProductCard() {

  return (
    <>
        {productArray.map((product) => (
          <Card>
            <CardContainer>
              <TopHalf>
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
              </TopHalf>
              <CardButtons>
                  <ButtonTwo></ButtonTwo>
                  <ButtonThree></ButtonThree>
              </CardButtons>
            </CardContainer>   
          </Card>
        ))}
    </>
  )
}

export default ProductCard