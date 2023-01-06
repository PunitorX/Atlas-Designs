import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'

const Nav = styled.nav`
  height: 12vh;
  background-color: #395B64;
`

const NavContainer = styled.div`

`

const NavLogo = styled.div`

`

const Search = styled.div`

`

const NavList = styled.ul`

`

const NavItem = styled.li`
`

const NavLink = styled(Link)`

`

const Navbar = ({itemOne}) => {
  return (
    <Nav>
      <NavContainer>

        <NavLogo>
          AD
        </NavLogo>

        <Search>
          <SearchBar />
        </Search>

        <NavList>
          <NavItem>
            <NavLink>
              {itemOne}
            </NavLink>
          </NavItem>
        </NavList>

      </NavContainer>
    </Nav>
  )
}

export default Navbar

