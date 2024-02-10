import React, { useState } from 'react'
import SignIn from '../components/LoginForm/SignIn'
import Success from '../components/LoginForm/Success'
import styled from 'styled-components'

const Container = styled.div`
  background-color: inherit;
  height: 90vh;
  display: flex;
`

function Login() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true)
  }

  return (
    <Container>
      {!isSubmitted ? (
        <SignIn submitForm={submitForm} />
      ) : (
        <Success />
      )}
    </Container>
  )
}

export default Login