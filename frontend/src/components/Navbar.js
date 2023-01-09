import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faCircleUser, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import ButtonOne from './Buttons/ButtonOne'

const Nav = styled.nav`
  height: 10vh;
  background-color: #395B64;
`

const NavContainer = styled.div`
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 2rem;
  padding: 0 1rem;
`

const NavLogo = styled.div`
  font-size: 2rem;
  font-family: 'Lato', sans-serif;
  font-weight: 600;
  color: #fff;
`

const NavList = styled.ul`
  font-family: 'Roboto Slab', sans-serif;
  letter-spacing: 1.2px;
  display: flex;
  align-items: center;
  font-size: 1rem;
`

const NavItem = styled.li`
  list-style-type: none;
  margin: 0 .5rem;
  height: inherit; 
`

const NavLink = styled(Link)`
  padding: 1rem;
  text-decoration: none;
  color: #fff;

  /* &:nth-child(1):hover {
    color: red;
  } */

  &:hover {
    transition: all .3s ease-in-out;
    color: #EDA920;
  }
  
`

const NavUser = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    transition: all .3s ease-in;
    color: #EDA920;
  }
`

const NavLogin = styled.div`
  display: flex;
  flex-direction: column;
`

const NavRegister = styled.div`
  
`

const Navbar = ({itemOne, itemTwo, itemThree, itemFour}) => {
  return (
    <Nav>
      <NavContainer>

        <NavLogo>
          AD
        </NavLogo>

        <SearchBar />

        <NavList>
          <NavItem>
            <NavLink>
              <FontAwesomeIcon className='red' icon={faHeart} size={'lg'}/>                       
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <FontAwesomeIcon icon={faShoppingCart} size={'lg'}/>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              {itemOne}
              <FontAwesomeIcon icon={faAngleDown} size={'sm'} transform={'right-5'}/>
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
              {itemFour}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavUser>
              <FontAwesomeIcon icon={faCircleUser} size={'xl'}/>
              <NavLogin>Login <span>/ Register</span></NavLogin> 
              {/* Will need to be a ternary for login verification */}
            </NavUser>
          </NavItem>
          
        </NavList>

      </NavContainer>
    </Nav>
  )
}

export default Navbar

