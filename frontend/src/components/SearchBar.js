import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import { device } from '../DeviceSize'

const Search = styled.div`

  @media ${device.tabletP} {
    display: flex;
    align-items: center;
  }

  @media ${device.tablet} {
    /* display: none; */
  }

  @media ${device.mobileL} {
    display: none;
  }
`

const SearchInput = styled.input`
  width: 425px;
  height: 25px;
  padding: .5rem 1rem;
  font-size: 14px;
  font-family: 'Roboto Slab', sans-serif;
  letter-spacing: 1px;
  border-radius: 25px;
  border: none;
  outline: none;


  &:focus {
    border: 5px solid #A5C9CA;
  }
  
  @media ${device.tabletP} {
    width: 325px;
  }

  @media ${device.tablet} {
    margin-left: 1rem;
    width: 275px;
  }
`

function SearchBar() {
  return (
    <Search>
      <SearchInput placeholder='Search...'/>
      <FontAwesomeIcon style={{cursor: 'pointer'}} icon={faSearch} transform={'left-35'}/>
    </Search>
  )
}

export default SearchBar