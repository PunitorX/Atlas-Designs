import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faCircleUser, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

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

const Navbar = ({itemOne, itemTwo, itemThree}) => {
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
          <NavItem>
            <NavLink>
              {itemTwo}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              {itemThree}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <FontAwesomeIcon icon={faHeart} size={'xl'}/>                       
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <FontAwesomeIcon icon={faShoppingCart} size={'xl'}/>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <FontAwesomeIcon icon={faCircleUser} size={'xl'}/> My Account
            </NavLink>
          </NavItem>
          // Sign In / Register Button
        </NavList>

      </NavContainer>
    </Nav>
  )
}

export default Navbar

