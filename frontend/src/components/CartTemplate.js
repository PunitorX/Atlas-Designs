import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { CartContext } from '../CartContext'
import { getProductData } from '../Data/ProductData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { font } from '../GlobalFonts'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import StarRating from './StarRating'
import Select from 'react-select'

const Product = styled.div`
  height: 250px;
  border-top: 1px dashed blue;
  padding: 12px 0 16px 0;
  display: flex;
  flex-direction: column;
  font-family: ${font.FontTwo};

  &:nth-child(1) {
    border-top: none;
    padding-top: 0;
  }
`

const ProductName = styled.h3`
  margin: 0;
  font-size: 18px;
`

const ProductStock = styled.p`
  margin-top: 8px;
  font-size: 14px;
  font-weight: bold;
  color: #43a047;
`

const RatingContainer = styled.div`
  display: flex;
`

const ProductRating = styled.div`

`

const ProductQuantity = styled.div`
  margin-top: auto;
  font-size: 18px;
`

const ProductPrice = styled.div`
  font-size: 18px;
  padding: 8px 0;
`

const BtnContainer = styled.div`

`

const WishBtn = styled.button`
  padding: 8px 24px;
  font-family: ${font.FontThree};
  cursor: pointer;
  margin-right: 12px;
`

const RemoveBtn= styled.button`
  padding: 8px 24px;
  font-family: ${font.FontThree};
  cursor: pointer;
`

const CartTemplate = (props) => {
    const cart = useContext(CartContext)
    const id = props.id
    const quantity = props.quantity
    const productData = getProductData(id)

    const [selectedOption, setSelectedOption] = useState(null)

  return (
    <Product>
      <ProductName>{productData.item}</ProductName>
      <RatingContainer>
        <StarRating value={productData.value}/>
        <ProductRating>
          {productData.ratingCount}
        </ProductRating>
      </RatingContainer>
      <ProductStock>{productData.stock}</ProductStock>
      <ProductQuantity>
        Quantity: ({quantity})
      </ProductQuantity>
      <ProductPrice>
        Price: ${(quantity * productData.price).toFixed(2)}
      </ProductPrice>
      <BtnContainer>
        <WishBtn><FontAwesomeIcon icon={faHeart}/> Add to wishlist</WishBtn>
        <RemoveBtn onClick={() => cart.deleteFromCart(id)}>Remove</RemoveBtn>
      </BtnContainer>
    </Product>
  )
}

export default CartTemplate