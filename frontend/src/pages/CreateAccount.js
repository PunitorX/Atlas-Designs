import React from 'react'
import { SignUp } from '../components/LoginForm/SignUp'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #fff;
`

function CreateAccount() {
  return (
    <Container>
      <SignUp />
    </Container>
  )
}

export default CreateAccount