import React, { useState } from 'react'
import styled from 'styled-components'
import { MenuItems } from '../Data/MenuItems'
import { Link } from 'react-router-dom'
import { color } from '../GlobalColors'
import { device } from '../DeviceSize'

const NavMenu = styled.div`
  display: block;
  position: absolute;
  width: 450px;
  height: auto;
  top: 92px;
  z-index: 99;

@media ${device.laptopL} {
  top: 107px;
}

.dropDownMenu {
  /* border: 1px solid ${color.ColorSeven}; */
  background: rgb(44,51,51);
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 1rem;
  list-style-type: none;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}

.dropDownClicked {
  display: none;
}

.dropdownItem {
  padding-bottom: 24px;
}

.dropdownLink {
  color: ${color.ColorOne};
  text-decoration: none;
  list-style-type: none;
  color: #fff;
  font-size: 16px;
  padding: 14px 0;

  &:hover {
    transition: all .2s ease-in ;
    color: ${color.ColorSeven};
  }
}
`

function Dropdown({submenu}) {
    const [click, setClick ] = useState(false)

    const handleClick = () => setClick(!click)

  return (
    <>
    <NavMenu>
      <ul onClick={handleClick} className={click ? 'dropDownClicked' : 'dropDownMenu'}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index} className={item.iName}>
              <Link to={item.path} className={item.cName}>{item.parts}</Link>
            </li>
          )
        })}
      </ul>
      </NavMenu>
    </>
  )
}

export default Dropdown