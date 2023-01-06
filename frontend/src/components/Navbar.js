import React from 'react'
import styled from 'styled-components';
import { MdKeyboardArrowDown } from 'react-icons/md'
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'

const Nav = styled.nav`
  height: 75px;
  background-color: #395B64;
  color: #fff;
`

const NavContainer = styled.div`
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  font-family: 'Roboto Slab', serif;
  letter-spacing: 1px;
`

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
          
      </NavContainer>
    </Nav>
  )
}

export default Navbar

