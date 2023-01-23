import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { productArray } from '../Data/ProductData'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { device } from '../DeviceSize'
import { color } from '../GlobalColors'

const SearchBox = styled.form`
  width: fit-content;
  height: fit-content;
  position: relative;
`

const SearchInput = styled.input`
  height: 30px;
  width: 0px;
  cursor: pointer;
  border-style: none;
  padding: 10px;
  font-size: 18px;
  letter-spacing: 2px;
  outline: none;
  border-radius: 50%;
  transition: all .5s ease-in-out;
  background-color: ${color.ColorFive};
  padding-right: 40px;
  color:#fff;

  &::placeholder {
    color:rgba(255,255,255,.5);
    font-size: 18px;
    letter-spacing: 2px;
    font-weight: 100;
  }

  &:focus{
  width: 300px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom:1px solid rgba(255,255,255,.5);
  transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
  }
` 

const SearchButton = styled.button`
  transform: translate(-25%, 50%);
  border-style: none;
  font-size: 20px;
  /* font-weight: bold; */
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  right: 0px;
  color:#ffffff ;
  background-color:transparent;
  pointer-events: painted;  
  z-index: 1;
  
  &:focus ~ .input-search{
  width: 300px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom:1px solid rgba(255,255,255,.5);
  transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
}
`

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('')

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  }

  if(searchInput.length > 0) {
    productArray.filter((product) => {
      return product.item.match(searchInput)
    })
  }

  return (
    <SearchBox>
      <SearchButton>
        <FontAwesomeIcon icon={faSearch} style={{cursor: 'pointer'}} />
      </SearchButton>
      <SearchInput type='text' placeholder={'Search...'} onChange={handleChange} value={searchInput} />
    </SearchBox>
  )
}

export default SearchBar