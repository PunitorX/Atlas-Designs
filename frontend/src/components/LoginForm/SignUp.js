import React from 'react'
import styled from 'styled-components'
import GoogleButton from 'react-google-button'
import ButtonTwo from '../Buttons/ButtonTwo'
import UseForm from './UseForm'
import validateInfo from './ValidateInfo'
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
    background: #fff;
  }
`

const FormGroup = styled.div`
  width: 85%;
`

// Input 

const FormItem = styled.div`

  .bar {
    position: relative;
    display: block;
    width: 320px;

    &:before {
      content: '';
      height: 2px;
      width: 0;
      bottom: 0px;
      position: absolute;
      background-color: #eee;
      transition: 300ms ease all;
      left: 0%;
    }
  }
`

const FormLabel = styled.label`
  color: ${color.ColorOne};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
`

const FormInput = styled.input`

  background: none;
    color: ${color.ColorFive};
    font-size: 1.2rem;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 320px;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid green;

    &:focus {
      outline: none;
    }
    &:focus ~ label,
    &:valid ~ label {
      top: -14px;
      font-size: 2.6rem;
      color: ${color.ColorFive};
    }
    &:focus ~ .bar:before {
      width: $width;
    }
  
`

// Submit

const FormButton = styled(Link)`

`

// Login

const FormLogin = styled.div`

`

const FormLink = styled(Link)`

`



export const SignUp = ({submitForm}) => {
  const {handleChange, values, handleSubmit, errors} = UseForm(submitForm, validateInfo)

  return (
    <Form onSubmit={handleSubmit}>
      <FormHeader>
        Welcome to Atlas Designs
      </FormHeader>
      <GoogleButton style={{background: '#005DE0'}}
        onClick={() => { console.log('Google button clicked') }}/>
        <FormSpan />
        <FormGroup>

          <FormItem>
            <FormLabel htmlFor={'firstname'}>
              First Name
            </FormLabel>
            <FormInput 
              id='firstname'
              type='text'
              name='firstname'
              placeholder=''
              value={values.firstname}
              onChange={handleChange}
            />
            {errors.firstname && <p>{errors.firstname}</p>}
            <span className='highlight'></span>
            <span className='bar'></span>
          </FormItem>

          <FormItem>
            <FormLabel htmlFor={'lastname'}>
              Last Name              
            </FormLabel>
            <FormInput 
              id='lastname'
              type='text'
              name='lastname'
              placeholder=''
              value={values.lastname}
              onChange={handleChange}
            />
            {errors.lastname && <p>{errors.lastname}</p>}
          </FormItem>
            
          <FormItem>
            <FormLabel htmlFor={'email'}>
              Email
            </FormLabel>
            <FormInput 
              id='email'
              type='text'
              name='email'
              placeholder=''
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </FormItem>

          <FormItem>
            <FormLabel htmlFor={'passwordOne'}>
              Password
            </FormLabel>
            <FormInput 
              id='passwordOne'
              type='text'
              name='passwordOne'
              placeholder=''
              value={values.passwordOne}
              onChange={handleChange}
            />
            {errors.passwordOne && <p>{errors.passwordOne}</p>}
          </FormItem>

          <FormItem>
            <FormLabel htmlFor={'passwordTwo'}>
              Re-Enter Password
            </FormLabel>
            <FormInput 
              id='passwordTwo'
              type='text'
              name='passwordTwo'
              placeholder=''
              value={values.passwordTwo}
              onChange={handleChange}
            />
            {errors.passwordTwo && <p>{errors.passwordTwo}</p>}
          </FormItem>

          {/* <ButtonTwo as="a" type='submit' to='/Success' stroke={'#2C3333'} color={'#2C3333'}>
            Sign Up
          </ButtonTwo> */}

          <FormButton>
            Sign Up
          </FormButton>

          <FormLogin>
            Already have an account?<FormLink to='/Login'>Login</FormLink>
          </FormLogin>
        </FormGroup>
    </Form>

  )
}
