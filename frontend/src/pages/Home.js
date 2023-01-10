import React from 'react'
import styled from 'styled-components'
import HomeCard from '../components/Cards/HomeCard'
import { productArray } from '../Data/ProductData'

const Body = styled.body`
  height: 100vh;
`

const BodyContainer = styled.div`
  margin: 0 5rem;
  padding: 0 2rem;
`

const Home = () => {
  return (
    <Body>
      <BodyContainer>
        Hello
      </BodyContainer>
    </Body>
  )
}

export default Home