import React, { createContext, useState} from "react";
import { getProductData } from './Data/ProductData' 

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {}
})

function CartProvider({children}) {
  const [ cartProduct, setCartProduct] = useState([])

  function getProductQuantity(id) {
    const quantity = cartProduct.find(product => product.id === id)?.quantity

    if(quantity === undefined){
        return 0
    }

    return quantity;
}

  function addToCart(id) {
    const quantity = getProductQuantity(id)

    if(quantity === 0) { // Product is not in the cart
      setCartProduct (
        [
          ...cartProduct,
          {
            id: id,
            quantity: 1
          }
        ]
      )
    } else { // Product IS in the cart
      setCartProduct (
        cartProduct.map(
          product => product.id === id
          ? {...product, quantity: product.quantity + 1} // if the statement is true
          : product // if the statement is false
        )
      )
    }
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id)

    if(quantity == 1) {
      deleteFromCart(id);
    } else {
      setCartProduct (
        cartProduct.map (
          product => product.id === id
          ? {...product, quantity: product.quantity - 1} // if the statement is true
          : product // if the statement is false
        )
      )
    }
  }

  function deleteFromCart(id) {
    // if an object meets the condition, add it to the array
    setCartProduct(
      cartProduct => cartProduct.filter(
        currentProduct => {
          return currentProduct.id != id
        }
      )
    )
  }

  function getTotalCost() {
    let totalCost = 0;
    cartProduct.map((cartItem) => {
      const productData = getProductData(cartItem.id)
      totalCost += (productData.price * cartItem.quantity)
    })

    return totalCost;
  }

  const contextValue ={
    items: cartProduct,
    getProductQuantity,
    addToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost
  }

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider