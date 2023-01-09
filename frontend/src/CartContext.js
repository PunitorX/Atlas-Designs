import React, { createContext, useState} from "react";
import { getProductData } from "./Data/ProductData" 

export const CartContext = createContext({
  items: [],
  getProductQauntity: () => {},
  addToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {}
})

function CartProvider({children}) {
  const [ cartProduct, setCartProduct] = useState([])

  function getProductQauntity(id) {
    const qauntity = cartProduct.find(product => product.id === id)?.qauntity

    if(qauntity === undefined) {
      return 0
    }

    return qauntity
  }

  function addToCart(id) {
    const qauntity = getProductQauntity(id)

    if(qauntity === 0) { // Product is not in the cart
      setCartProduct (
        [
          ...cartProduct,
          {
            id: id,
            qauntity: 1
          }
        ]
      )
    } else { // Product IS in the cart
      setCartProduct (
        cartProduct.map(
          product => product.id === id
          ? {...product, qauntity: product.qauntity + 1} // if the statement is true
          : product // if the statement is false
        )
      )
    }
  }

  function removeOneFromCart(id) {
    const qauntity = getProductQauntity(id)

    if(qauntity == 1) {
      deleteFromCart(id);
    } else {
      setCartProduct (
        cartProduct.map (
          product => product.id === id
          ? {...product, qauntity: product.qauntity - 1} // if the statement is true
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
      totalCost += (productData.price * cartItem.qauntity)
    })

    return totalCost;
  }

  const contextValue ={
    items: cartProduct,
    getProductQauntity,
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