import React from 'react'
import styled from 'styled-components'

const Search = styled.div`
  width: 450px;
  display: flex;
  justify-content: flex-end;
`

const SearchInput = styled.input`
  width: 375px;
  height: 25px;
  padding: .5rem;
  font-family: 'Roboto Slab', sans-serif;
  letter-spacing: 1px;
  border-radius: 15px;
  border: none;
  outline: none;

  &:focus {
    border: 5px solid #A5C9CA;
  }
`

function SearchBar() {
  return (
    <Search>
      <SearchInput />
    </Search>
    
  )
}

export default SearchBar