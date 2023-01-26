import React, { useState } from 'react'
import styled from 'styled-components'
import { MenuItems } from '../Data/MenuItems'
import { Link } from 'react-router-dom'

const DropDownMenu = styled.div`
  display: inline-block;
  position: relative;

  &:hover {
    background-color: black;

    ${SubMenu} {
      display: block;
    }
  }
`

const SubMenu = styled.ul`
  font-weight: 300;
  text-transform: none;
  display: none;
  position: absolute;
  width: 180px;
  background-color: bisque;
`


const DropDownClicked = styled.ul`
  display: none;
`

const MenuItem = styled.li`
  /* background: #1888ff;
  cursor: pointer; */

  &:hover {
    /* background-color: blue; */
  }
`

const MenuLink = styled(Link)`
  /* display: block;
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: #fff;
  padding: 16px; */
`

// Menu Clicked

function Dropdown() {
    const [click, setClick ] = useState(false)

    const handleClick = () => setClick(!click)

  return (
    <SubMenu onClick={handleClick} className={click ? <DropDownClicked /> : <DropDownMenu />}>
        {MenuItems.map((item, index) => {
            return (
                <MenuItem key={index}>
                    <MenuLink className={item.cName} to={item.path} onClick={() => setClick(false)}>
                        {item.title}
                    </MenuLink>
                </MenuItem>
            )
        })}
    </SubMenu>
  )
}

export default Dropdown