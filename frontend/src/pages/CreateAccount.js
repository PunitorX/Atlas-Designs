import React, { useState } from 'react'
import SignUp from '../components/LoginForm/SignUp'
import Success from '../components/LoginForm/Success'
import styled from 'styled-components'

const Container = styled.div`
  background-color: inherit;
  height: 90vh;
  display: flex;
`

function CreateAccount() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  function submitForm() {
    setIsSubmitted(true)
  }
  
  return (
    <>
      <Container>
        {!isSubmitted ? (
        <SignUp submitForm={submitForm} />
        ) : (
        <Success />
        )}
      </Container>
    </>
    
  )
}

export default CreateAccount