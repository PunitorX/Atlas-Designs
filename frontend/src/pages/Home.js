import React from 'react'
import Navbar from '../components/Navbar'
import NavbarTwo from '../components/NavbarTwo'
import styled from 'styled-components'

const Body = styled.div`
  height: 90vh;
  background-color: #2C3333;
  color: #fff;
`

const BodyContainer = styled.div`

`

const Home = () => {
  return (
    <div>
        <Navbar />
        <NavbarTwo />
        <Body>
          <BodyContainer>
            Hello
          </BodyContainer>
        </Body>
    </div>
  )
}

export default Home