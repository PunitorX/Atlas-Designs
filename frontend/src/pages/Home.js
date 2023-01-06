import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Footer from '../components/Footer'

const Body = styled.body`
  height: 90vh;
  background-color: #2C3333;
  color: #fff;
`

const BodyContainer = styled.div`

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