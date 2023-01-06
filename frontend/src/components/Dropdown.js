import React, { useState } from 'react'
import styled from 'styled-components'
import { MenuItems } from './Data/MenuItems'
import { Link } from 'react-router-dom'

const DropDownMenu = styled.div`
  background: red;
  width: 200px;
  top: 80px;
  list-style: none;
  text-align: start;
`

const MenuItem = styled.li`
  background: #1888ff;
  cursor: pointer;
  &:hover {
    background: #5cabff;
  }
`

const MenuLink = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: #fff;
  padding: 16px;
`

// Menu/Clicked

const DropDownMenuClicked = styled.ul`
  display: none;
`

function Dropdown() {
    const [click, setClick ] = useState(false)

    const handleClick = () => setClick(!click)

  return (
    <ul onClick={handleClick} className={click ? <DropDownMenuClicked /> : <DropDownMenu />}>
        {MenuItems.map((item, index) => {
            return (
                <MenuItem key={index}>
                    <MenuLink to={item.path} onClick={() => setClick(false)}>
                        {item.title}
                    </MenuLink>
                </MenuItem>
            )
        })}
    </ul>
  )
}

export default Dropdown