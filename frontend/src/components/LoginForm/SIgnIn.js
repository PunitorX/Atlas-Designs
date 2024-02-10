import React from 'react'
import styled from 'styled-components'
import GoogleButton from 'react-google-button'
import ButtonThree from '../Buttons/ButtonThree'
import UseForm from './UseForm'
import validate from './ValidateInfo'
import { Link } from 'react-router-dom'
import { font } from '../../GlobalFonts'
import { color } from '../../GlobalColors'

const Form = styled.form`
  height: auto;
  width: 25%;
  margin: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

const FormTitle = styled.h1`
  margin-bottom: 2rem;
  font-weight: 900;
  width: 80%;
  letter-spacing: 1px;
  padding-bottom: 1rem;
  font-family: ${font.FontTwo};
  font-size: 1.8rem;
  text-transform: uppercase;
  text-align: center;
`

const FormSpan = styled.span`
  width: 80%;
  margin-top: 3rem;
  text-align: center;
  border: none;
  border-top: 1px solid #e0e0e0;
  padding-bottom: 1rem;
  
  &:after {
    content: 'Or';
    display: inline-block;
    position: relative;
    top: -7px;
    padding: 0 1rem;
    background: ${color.ColorSix}
  }
`

const FormContainer = styled.div`
  width: 80%;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const FormInput = styled.input`
  font-size: 16px;
  padding: 8px;
  border-radius: 4px;
`

const FormError = styled.p`
  color: red;
  margin: 0;
`

const BtnContainer = styled.div`
  width: 80%;
`

const FormCreate = styled.div`
  padding-top: 2rem;
  width: 85%;
  text-align: center;
`

const FormLink = styled(Link)`
  text-decoration: none;
  padding-left: 0.5rem;
`

function SignIn({submitForm}) {
  const {handleChange, values, handleSubmit, errors} = UseForm(submitForm, validate)

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormTitle>Welcome Back! Sign in below</FormTitle>
      <GoogleButton style={{background: '#005DE0'}} onClick={() => { console.log('Google button clicked') }}></GoogleButton>
      <FormSpan />
      <FormContainer>
        <FormInput 
          id='email'
          type='text'
          name='email'
          placeholder='Email'
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <FormError>{errors.email}</FormError>}
        <FormInput 
          id='passwordOne'
          type='password'
          name='passwordOne'
          placeholder='Password'
          value={values.passwordOne}
          onChange={handleChange}
        />
        {errors.passwordOne && <FormError>{errors.passwordOne}</FormError>}
      </FormContainer>
      <BtnContainer>
        <ButtonThree as='button' type='submit' to='/Success'>
          Create Account
        </ButtonThree>
      </BtnContainer>
      <FormCreate>
        Don't have an account? 
        <FormLink to='/createaccount'>Create one now</FormLink>
      </FormCreate>
    </Form>
  )
}

export default SignIn