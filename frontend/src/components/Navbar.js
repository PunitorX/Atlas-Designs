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
  height: 100%;
  margin: 0;
  font-family: 'Roboto Slab', sans-serif;
  letter-spacing: 1.2px;
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
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

  &:hover {
      background-color: #fff;
      transition: all .3s ease-in-out;
      color: #000;
      padding: .5rem 1rem;
      opacity: .6;
      border-radius: 5px;
    }
`

const NavUser = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
`

const NavLogin = styled.div`
  display: flex;
  flex-direction: column;
`

const NavRegister = styled.div`
  
`

const Navbar = ({itemOne, itemTwo, itemThree}) => {
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
              <FontAwesomeIcon icon={faHeart} size={'lg'}/>                       
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
              {/* <FontAwesomeIcon icon={faAngleDown} size={'l'} transform={'right-5'}/> */}
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
        {/* <ButtonOne>Login / Register</ButtonOne> */}


      </NavContainer>
    </Nav>
  )
}

export default Navbar

