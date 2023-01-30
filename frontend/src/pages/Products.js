import React from 'react'
import styled from 'styled-components'
import ProductCard from '../components/Cards/ProductCard'
import { productArray } from '../Data/ProductData'

const Container = styled.div`
  height: 90vh;
  margin: 2rem;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
`

const Section = styled.div`
padding-right: 1rem;
  padding-bottom: 1rem;
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