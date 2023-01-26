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
  height: 100vh;
  width: 25%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;

  h1 {
    margin-top: 0;
    font-weight: 900;
  }
`

const FormHeader = styled.h1`
  /* text-align: center; */
  padding-bottom: 1rem;
  letter-spacing: 1.4px;
  font-family: ${font.FontTwo};
  font-size: 1.8rem;
  text-transform: uppercase;
`

const FormSpan = styled.span`
  width: 85%;
  margin-top: 2rem;
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

const FormGroup = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: flex-start;
  padding-top: 1rem ;
`

// Input 

const FormItem = styled.div`
`

const FormLabel = styled.label`
`

const FormInput = styled.input`
  
`

// Login

const FormLogin = styled.div`
  padding-top: 2rem;
  width: 85%;
  text-align: center;
`

const FormLink = styled(Link)`
  text-decoration: none;
  padding-left: 0.5rem;
`



function SignUp ({submitForm}) {
  const {handleChange, values, handleSubmit, errors} = UseForm(submitForm, validate)

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormHeader>
        Welcome to Atlas Designs
      </FormHeader>
      <GoogleButton style={{background: '#005DE0'}}
        onClick={() => { console.log('Google button clicked') }}/>
        <FormSpan />
        <FormGroup>

          <FormItem>            
            <FormInput 
              id='firstname'
              type='text'
              name='firstname'
              placeholder='First Name'
              value={values.firstname}
              onChange={handleChange}
            />
            <FormLabel htmlFor={'firstname'}>
              
            </FormLabel>
            {errors.firstname && <p>{errors.firstname}</p>}
          </FormItem>

          <FormItem>         
            <FormInput 
              id='lastname'
              type='text'
              name='lastname'
              placeholder='Last Name'
              value={values.lastname}
              onChange={handleChange}
            />
            <FormLabel htmlFor={'lastname'}>
                     
            </FormLabel>
            {errors.lastname && <p>{errors.lastname}</p>}
          </FormItem>
            
          <FormItem>          
            <FormInput 
              id='email'
              type='text'
              name='email'
              placeholder='Email'
              value={values.email}
              onChange={handleChange}
            />
            <FormLabel htmlFor={'email'}>
              
            </FormLabel>
            {errors.email && <p>{errors.email}</p>}
          </FormItem>

          <FormItem>
            <FormInput 
              id='passwordOne'
              type='password'
              name='passwordOne'
              placeholder='Password'
              value={values.passwordOne}
              onChange={handleChange}
            />
            <FormLabel htmlFor={'password'}>
              
            </FormLabel>
            {errors.passwordOne && <p>{errors.passwordOne}</p>}
          </FormItem>

          <FormItem>
            <FormInput 
              id='passwordTwo'
              type='password'
              name='passwordTwo'
              placeholder='Confirm Password'
              value={values.passwordTwo}
              onChange={handleChange}
            />
            <FormLabel htmlFor={'password'}>
              
            </FormLabel>
            {errors.passwordTwo && <p>{errors.passwordTwo}</p>}
          </FormItem>

          <ButtonThree as='button' type='submit' to='/Success'>
            Create Account
          </ButtonThree>

          <FormLogin>
            Already have an account?<FormLink to='/Login'>Login</FormLink>
          </FormLogin>
        </FormGroup>
    </Form>

  )
}

export default SignUp
