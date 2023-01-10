import React from 'react'
import styled from 'styled-components'
import ProductCard from '../components/Cards/ProductCard'
import { productArray } from '../Data/ProductData'

const Body = styled.body`
  height: auto;
`

const BodyContainer = styled.div`
  margin: 0 5rem;
  padding: 0 2rem;
`

const BodySection = styled.section`
  height: 100vh;
`

const SectionHeader = styled.h2`
  color: #2C3333;
  font-family: 'Roboto Slab', sans-serif;
  font-size: 1.8rem;
  text-transform: uppercase;
`

const Home = () => {
  return (
    <Body>
      <BodyContainer>
        <BodySection>
          <SectionHeader>Our Best Deals</SectionHeader>
        </BodySection>
        <BodySection>
          <SectionHeader>Recent Builds</SectionHeader>
        </BodySection>
        <BodySection>
          <SectionHeader>Trending Parts</SectionHeader>
        </BodySection>
      </BodyContainer>
    </Body>
  )
}

export default Home