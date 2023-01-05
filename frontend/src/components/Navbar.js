import React from 'react'
import styled from 'styled-components';
import { MdKeyboardArrowDown } from 'react-icons/md'
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'

const Container = styled.div`
  height: 75px;
  background-color: #395B64;
  color: #fff;
`

const Wrapper = styled.div`
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  font-family: 'Roboto Slab', serif;
  letter-spacing: 1px
`

const Left = styled.div`
  flex: 1;
`

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
`

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 350px;
  border-radius: 10px;
  background-color: #fff;
  padding: 10px 15px;
`

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 16px;
`

const Right = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.3rem;
`

const NavItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
              <Title>Atlas Designs</Title>
            </Left>
            <Center>
              <SearchBar>
                <Input placeholder={'Search'}/>
                <AiOutlineSearch color='#000' fontSize={'1.3rem'} cursor={'pointer'}/>
              </SearchBar>
            </Center>
            <Right>
              <NavItem>
                Dashboard
                <MdKeyboardArrowDown fontSize={'1.5rem'}/>
              </NavItem>
              <NavItem>
                Products
                <MdKeyboardArrowDown fontSize={'1.5rem'}/>
              </NavItem>
              <NavItem>
                My Account
                <MdKeyboardArrowDown fontSize={'1.5rem'}/>
              </NavItem>
              <NavItem>Sign In</NavItem>
              <NavItem>Sign Up</NavItem>
              <AiOutlineShoppingCart fontSize={'1.7rem'} cursor={'pointer'}/>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar

