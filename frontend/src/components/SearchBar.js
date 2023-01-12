import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import { device } from '../DeviceSize'

const Search = styled.div`

`

const SearchInput = styled.input`
  width: 525px;
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