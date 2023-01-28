import React, { useState } from 'react'
import styled from 'styled-components'
import { MenuItems } from '../Data/MenuItems'
import { Link } from 'react-router-dom'
import { color } from '../GlobalColors'
import { device } from '../DeviceSize'

const NavMenu = styled.div`
  position: absolute;
  width: 600px;
  top: 71px;
  z-index: 999;

@media ${device.laptopL} {
  top: 107px;
}

.dropDownMenu {
  border: 1px solid ${color.ColorSeven};
  background: ${color.ColorThree};
  padding: 1rem;
  list-style-type: none;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
}

.dropDownClicked {
  display: none;
}

.dropdownItem {
  /* display: flex;
  width: 200px; */
}

.dropdownName {
  /* width: 100%; */
  /* position: absolute; */
  color: ${color.ColorOne};
  text-decoration: none;
  list-style-type: none;
  color: #fff;
  font-size: 1rem;
  padding: 8px;

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
            <>
              <li key={index} className={item.iName}>
                <Link to={item.path} className={item.cName}>{item.parts}</Link>
              </li>
            </> 
          )
        })}
      </ul>
      </NavMenu>
    </>
  )
}

export default Dropdown