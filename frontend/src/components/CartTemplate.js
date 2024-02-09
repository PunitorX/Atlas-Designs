import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { CartContext } from '../CartContext'
import { getProductData } from '../Data/ProductData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTimes } from '@fortawesome/free-solid-svg-icons'
import StarRating from './StarRating'
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const Product = styled.div`
  height: 250px;
  border-bottom: 1px dashed #fff;
`

const ProductName = styled.div`

`

const Rating = styled.div`
  display: flex;
`

const ProductRating = styled.div`

`

const ProductQuantity = styled.div`

`

const ProductPrice = styled.div`

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
      <Rating>
        <StarRating  value={productData.value}/>
        <ProductRating>{productData.ratingCount}</ProductRating>
      </Rating>
      <ProductQuantity>
        {/* <Select 
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        /> */}
        <span>Quantity</span>
        ({quantity})
      </ProductQuantity>
      <ProductPrice>
        <span>Price: </span>
        ${(quantity * productData.price).toFixed(2)}
      </ProductPrice>

      <button><FontAwesomeIcon icon={faHeart}/> Add to wishlist</button>
      
      <button onClick={() => cart.deleteFromCart(id)} style={{cursor: 'pointer'}}>Remove</button>
    </Product>
  )
}

export default CartTemplate