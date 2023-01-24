import { faCancel, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { device } from '../DeviceSize'
import { color } from '../GlobalColors'

const SearchBox = styled.form`
  width: fit-content;
  height: fit-content;
  position: relative;
`
const SearchContainer = styled.div`
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
    color: ${color.ColorTwo};
    font-size: 18px;
    letter-spacing: 2px;
    font-weight: 100;
  }

  &:focus{
  width: 300px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom:1px solid ${color.ColorTwo};
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
  /* width: 300px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom:1px solid rgba(255,255,255,.5);
  transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2); */
}
`

const DataResult = styled.div`
  width: 300px;
  height: 200px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`

const DataValue = styled.a`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  color: #010C2A;
  text-decoration: none;
  &:hover {
  background-color: lightgrey;
}
`

const DataItem = styled.p`
  margin-left: 10px;
`

const SearchBar = ({placeholder, data}) => {
  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState('')

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord)
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase())
    })

    if(searchWord === '') {
      setFilteredData([])
    } else {
      setFilteredData(newFilter)
    }
  }

  const clearInput = () => {
    setFilteredData([])
    setWordEntered('')
  }

  return (
    <SearchBox>
      <SearchContainer>

        <SearchInput type='text' placeholder={'Search...'} onChange={handleFilter} value={wordEntered} />
        {filteredData.length === 0 ? (
            <SearchButton>
            <FontAwesomeIcon icon={faSearch} style={{cursor: 'pointer'}} />
            </SearchButton>
          ) : (
            <SearchButton>
            <FontAwesomeIcon icon={faCancel} style={{cursor: 'pointer'}} onClick={clearInput} />
            </SearchButton>
          )}  

      </SearchContainer>
      {filteredData.length !== 0 && (
        <DataResult>
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <DataValue href={value.link} target='_blank'>
                  <DataItem>{value.title}</DataItem>
              </DataValue>
            )
          })}
        </DataResult>
      )}
    </SearchBox>
  )
}

export default SearchBar