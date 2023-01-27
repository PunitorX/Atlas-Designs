import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faBars, faCircleUser, faHeart, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons'
import { device } from '../DeviceSize'
import { color } from '../GlobalColors'
import Dropdown from './Dropdown'

const Nav = styled.nav`
  height: 10vh;
  background-color: ${color.ColorThree};
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

const NavLogo = styled(Link)` 
  font-size: 2.4rem;
  font-family: 'Lato', sans-serif;
  letter-spacing: 1.4px;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  /* padding: 2rem; */

  @media ${device.mobileL} {
    font-size: 1.6rem;
  }

  @media ${device.mobileM} {
    font-size: 1.4rem;
  }

  span {
    color: ${color.ColorSeven};
  }
`

const NavList = styled.ul`
  font-family: 'Roboto Slab', sans-serif;
  letter-spacing: 1.2px;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
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

  .dropDownMenu {
    background: ${color.ColorFour};
    width: 550px;
    height: 200px;
    position: absolute;
    top: 71px;
    list-style: none;
    z-index: 999;
    display: flex;
    justify-content: space-evenly;
    padding: .5rem 0;
    

    li {
    }

    @media ${device.laptopL} {
      top: 107px;
    }
  }

  .dropDownClicked {
    display: none;
  }

  .dropdown-link {
    display: block;
    /* height: 100%; */
    width: 100%;
    text-decoration: none;
    list-style-type: none;
    color: #fff;
    font-size: 1rem;
    padding: .5rem 1rem;

    &:hover {
      transition: all .2s ease-in ;
      color: ${color.ColorOne};
    }
  }

  @media ${device.laptop} {
    margin: 0;
  }
`

const NavLink = styled(Link)`
  padding: 1rem;
  text-decoration: none;
  color: #fff;
  transition: all .3s ease-in-out;

  .red {
    color: #fff;
    transition: all .3s ease-in-out;
     
     &:hover {
       color: ${color.ColorEight};
       transition: all .3s ease-in-out;
     }
   }

  &:hover {
    transition: all .3s ease-in-out;
    color: ${color.ColorSeven};
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

const NavUser = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 10px;
  font-size: 1rem;
  cursor: pointer;
  padding-left: 1rem;
  transition: all .3s ease-in-out;
  

  &:hover {
    transition: all .3s ease-in;
    color: ${color.ColorSeven};
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
  // for login ternary
`

const MenuOverlay = styled.div`
  height: 50px;
  width: 50px;
  position: relative;
  display: none;

  &:before, 
  &:after {
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: '';
    transition: all 0.3s ease;
    opacity: 0;
  }

  &:hover::before,
  &:hover::after  {
    transform: (1);
    opacity: .2;
  }
 
  @media ${device.tablet} {
    display: block;
  }

  @media ${device.mobileL} {
    display: block;
  }
`

const MenuIcon = styled.div`
  color: ${color.ColorSeven};
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transition-delay: 0.1s;
  display: none;
  
  @media ${device.laptop} {
    display: block;
    color: ${color.ColorSeven};
    
  }
 
  @media ${device.tablet} {
    display: block;
    color: ${color.ColorSeven};
    font-size: 1rem;
    cursor: pointer;
  }

  @media ${device.mobileL} {
    display: block;
    color: ${color.ColorSeven};
    font-size: 1rem;
    cursor: pointer;
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
  const [dropdown, setDropdown] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if(window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(true)
    }
  }

  const onMouseLeave = () => {
    if(window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(false)
    }
  }

  return (
    <Nav>
      <NavContainer>

        <NavLogo to='/'>
          Atlas <span>Designs</span>
        </NavLogo>

        <NavList> 
          <NavItem onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <NavLink className='link' style={{padding: '25% 1rem'}}>
              {itemOne}
              <FontAwesomeIcon icon={faAngleDown} size={'sm'} transform={'right-5'}
              />
            </NavLink>
            {dropdown && <Dropdown />}
          </NavItem>
          <NavItem>
            <NavLink className='link' to='/Forum'>
              {itemTwo}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='link' to='/Builds'>
              {itemThree}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='link' to='/Projects'>
              {itemFour}
            </NavLink>
          </NavItem>
        </NavList>

        <NavList>
          <NavItem>
            <NavLink to='/WishList'>
              <FontAwesomeIcon className='red' icon={faHeart} size={'lg'}/>                       
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/Checkout'>
              <FontAwesomeIcon icon={faShoppingCart} size={'lg'}/>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavUser to='/CreateAccount'>
              <FontAwesomeIcon icon={faCircleUser} size={'xl'}/>
              <NavLogin>Login <span>/ Register</span></NavLogin> 
              {/* Will need to be a ternary for login verification */}
            </NavUser>
          </NavItem>
        </NavList>

        <MenuOverlay>
          <MenuIcon onClick={handleClick}>
            {click ? 
            <FontAwesomeIcon icon={faTimes} size={'2xl'} />
            : 
            <FontAwesomeIcon icon={faBars} size={'2xl'} />
            }
          </MenuIcon>
        </MenuOverlay>

      </NavContainer>
    </Nav>
  )
}

export default Navbar

