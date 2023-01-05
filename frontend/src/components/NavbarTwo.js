import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 40px;
    background-color: #395B64;
    font-family: 'Roboto Slab', serif;
    color: #fff;
    letter-spacing: 1px;
`

const Wrapper = styled.div`
    padding: 10px 15px;
    text-align: center;
    display: flex;
    justify-content: space-evenly;
`

const NavItem = styled.div`
    cursor: pointer;
    &:hover {
        transition: all 0.2s ease;
        color: #000;
    }
`

const NavbarTwo = () => {
  return (
    <Container>
        <Wrapper>
            <NavItem>Peripherals</NavItem>
            <NavItem>Accessories</NavItem>
            <NavItem>Video Cards</NavItem>
            <NavItem>Motherboards</NavItem>
            <NavItem>CPUs</NavItem>
            <NavItem>Power Supply</NavItem>
            <NavItem>Monitors</NavItem>
            <NavItem>Storage</NavItem>
            <NavItem>CPU Cooler</NavItem>
            <NavItem>Memory</NavItem>
            <NavItem>Operating Systems</NavItem>
            <NavItem>Cases</NavItem>
        </Wrapper>
    </Container>
  )
}

export default NavbarTwo