import imgOne from '../Images/3070 ti.jpg'
import imgTwo from '../Images/CorsairFans.jpg'
import imgThree from '../Images/Motherboard.jpg'
import imgFour from '../Images/RyzenFive.jpg'

const productArray = [
  {
    id: '1',
    price: 500.00,
    item: 'EVGA GeForce RTX 3070 Ti FTW3 Ultra Gaming Video Card',
    img: imgOne
  },
  {
    id: '2',
    price: 139.00,
    item: 'AMD Ryzen 5 5600G - Ryzen 5 5000 G-Series Cezanne 6-Core 3.9 GHz AM$ 65W AMD Radeon Graphics Desktop Processor',
    img: imgTwo
  },
  {
    id: '3',
    price: 189.00,
    item: 'ASUS ROG STRIX B550-F GAMING AM$ AMD B550 SATA 6Gb/s ATX AMD Motherboard',
    img: imgThree
  },
  {
    id: '4',
    price: 89.00,
    item: 'Corsair LL Series CO-9050072-WW LL120 RGB, 120mm Dual Light Loop RGB LED PWM Fan, 3 Fan Pack with Lighting Node PRO',
    img: imgFour
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