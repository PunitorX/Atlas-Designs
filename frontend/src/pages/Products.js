import React from 'react'
import styled from 'styled-components'
import ProductCard from '../components/Cards/ProductCard'
import { productArray } from '../Data/ProductData'

const Container = styled.div`
  height: auto;
  color: #fff;
  width: 65%;
  margin: 0 auto;
  padding: 2rem 0 6rem 0;
`

const ProductsTitle = styled.h1`
  color: #000;
  text-align: center;
  font-size: 48px;
`

const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
`

function Products() {
  return (
    <Container>
      <ProductsTitle>
        Products
      </ProductsTitle>
      <Section>

        {productArray.map((product, id) => 
          <ProductCard key={id} product={product}/>
        )}
      </Section>
    </Container>
  )
}

export default Products