import React, { useContext } from 'react'
import { CartContext } from '../CartContext'
import { getProductData } from '../Data/ProductData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const CartTemplate = (props) => {
    const cart = useContext(CartContext)
    const id = props.id
    const quantity = props.quantity
    const productData = getProductData(id)

  return (
    <>
        <tbody>
            <tr>
                <th>{productData.item}</th>
                <td>({quantity})</td>
                <td>${(quantity * productData.price).toFixed(2)}</td>
                <FontAwesomeIcon icon={faTimes} onClick={() => cart.deleteFromCart(id)} style={{cursor: 'pointer'}} />
            </tr>
        </tbody>
    </>
  )
}

export default CartTemplate