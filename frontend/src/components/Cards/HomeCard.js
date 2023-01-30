import React, { useContext } from 'react'
import styled from 'styled-components'
import { CartContext } from '../../CartContext'
import { productArray } from '../../Data/ProductData'
import { device } from '../../DeviceSize'
import ButtonTwo from '../Buttons/ButtonTwo'
import StarRating from '../StarRating'

const Card = styled.div`
  margin: .5rem 0;
  height: 270px;
  width: 400px;
  background-color: #2C3333;
  border-radius: 10px;
  padding: 1rem;
  letter-spacing: 1.2px;
`

const CardContainer = styled.div`
  color: #fff;
  height: inherit;
`

const TopHalf = styled.div`
  height: 210px;
  display: flex;
`

const ImageContainer = styled.div`
  background-color: #fff;
  height: 200px;
  border-radius: 10px;
  display: flex;
  align-items: center;
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
  padding: 0.5rem 0;
`

const StarRateCount = styled.div`
  font-size: .8rem;
`

const ProductPrice = styled.div`

`

const CardButtons = styled.div`
  padding-top: .5rem;
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
                <ImageContainer>
                  <Image src={product.img}/>
                </ImageContainer>
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
                  <ButtonTwo to="/Product" stroke={'#fff'} color={'#fff'}>View</ButtonTwo>
              </CardButtons>
            </CardContainer>   
          </Card>
        ))}
    </>
  )
}

export default ProductCard