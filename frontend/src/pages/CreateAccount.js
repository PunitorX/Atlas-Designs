import React, { useState } from 'react'
import SignUp from '../components/LoginForm/SignUp'
import AccountSuccess from '../pages/AccountSuccess'
import styled from 'styled-components'

const Container = styled.div`
  background-color: inherit;
`

function CreateAccount() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  function submitForm() {
    setIsSubmitted(true)
  }
  
  return (
    <Container>
      {!isSubmitted ? <SignUp submitForm={submitForm} /> : <AccountSuccess />}
    </Container>
  )
}

export default CreateAccount