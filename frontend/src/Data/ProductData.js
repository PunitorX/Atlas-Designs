const productArray = [
  {
    id: '1',
    price: 4.99,
    item: 'GPU'
  },
  {
    id: '2',
    price: 10.99,
    item: 'CPU'
  },
  {
    id: '3',
    price: 20.99,
    item: 'Motherboard'
  }
]

function getProductData(id) {
  const productData = productArray.find(product => product.id === id)

  if(productData == undefined) {
    console.log("Product data does not exist for ID: " + id)
    return undefined
  }

  return productData
}

export { productArray, getProductData }