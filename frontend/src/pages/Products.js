import React from 'react'
import styled from 'styled-components'
import ProductCard from '../components/Cards/ProductCard'
import { productArray } from '../Data/ProductData'

const Container = styled.div`
  height: 90vh;
  margin: 2rem;
  color: #fff;
`

const Section = styled.div`

`

function Products() {
  return (
    <Container>
      {productArray.map((product, id) => 
        <Section key={id}>
          <ProductCard product={product}/>
        </Section>
      )}
      
    </Container>
  )
}

export default Products