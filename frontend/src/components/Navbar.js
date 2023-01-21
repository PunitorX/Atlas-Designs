import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faBars, faCircleUser, faHeart, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons'
import { device } from '../DeviceSize'

const Nav = styled.nav`
  height: 8vh;
  background-color: #395B64;
  border-bottom: 2px solid #2C3333;
`

const NavContainer = styled.div`
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 2rem;
  padding: 0 2rem;

  @media ${device.laptop} {
    padding: 0 1rem;
  }

  @media ${device.mobileL} {
    padding: 0 1rem;
    margin: 0 1rem;
  }

  @media ${device.mobileM} {
    padding: 0 1rem;
    margin: 0 1rem;
  }

  @media ${device.mobileS} {
   padding: 0 1rem;
   margin: 0 1rem;
  }
`

const NavLogo = styled.div`
  font-size: 2rem;
  font-family: 'Lato', sans-serif;
  font-weight: 600;
  color: #fff;

  @media ${device.mobileL} {
    font-size: 1.6rem;
  }

  @media ${device.mobileM} {
    font-size: 1.4rem;
  }
`

const NavList = styled.ul`
  font-family: 'Roboto Slab', sans-serif;
  letter-spacing: 1.2px;
  display: flex;
  align-items: center;
  font-size: 1rem;
  padding: 0;

  @media ${device.tablet} {
    margin-right: 1rem;
  }

  @media ${device.mobileL} {
    display: none;
  }
`

const NavItem = styled.li`
  list-style-type: none;
  margin: 0 .5rem;
  height: inherit; 

  @media ${device.laptop} {
    margin: 0;
  }
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

  @media ${device.laptop} {
    font-size: 1rem;
  }

  &.link {
    @media ${device.laptop} {
      display: none;
    }
  }

  @media ${device.tablet} {
    font-size: 1rem;
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

  @media ${device.laptop} {
    padding: 1rem;
  }
`

const NavLogin = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.laptop} {
    display: none;
  }
`

const NavRegister = styled.div`
  
`

const MenuIcon = styled.div`
  display: none;
  
  @media ${device.laptop} {
    display: block;
    color: #fff;
    /* font-size:.8rem; */
  }
 
  @media ${device.tablet} {
    display: block;
    color: #fff;
    font-size: 1rem;
  }

  @media ${device.mobileL} {
    display: block;
    color: #fff;
    font-size: 1rem;
  }
`

// const NavMenuActive = styled.ul`
//   background: #19191a;
//     left: 0;
//     opacity: 1;
//     transition: all 0.6s ease;
//     z-index: 1;
// `

// const NavMenu = styled.ul`
//   display: flex;
//     flex-direction: column;
//     width: 100%;
//     position: absolute;
//     top: 80px;
//     left: -100%;
//     opacity: 1;
//     transition: all 0.5s ease;
// `

function Navbar ({itemOne, itemTwo, itemThree, itemFour}) {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false);

  return (
    <Nav>
      <NavContainer>

        <NavLogo>
          AD
        </NavLogo>

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
            <NavLink className='link'>
              {itemOne}
              <FontAwesomeIcon icon={faAngleDown} size={'sm'} transform={'right-5'}/>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='link'>
              {itemTwo}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='link'>
              {itemThree}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='link'>
              {itemFour}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavUser>
              <FontAwesomeIcon icon={faCircleUser} size={'lg'}/>
              <NavLogin>Login <span>/ Register</span></NavLogin> 
              {/* Will need to be a ternary for login verification */}
            </NavUser>
          </NavItem>
          
        </NavList>

        <MenuIcon onClick={handleClick}>
          {click ? 
          <FontAwesomeIcon icon={faTimes} size={'2xl'} />
          : 
          <FontAwesomeIcon icon={faBars} size={'2xl'} />
          }
        </MenuIcon>

      </NavContainer>
    </Nav>
  )
}

export default Navbar

