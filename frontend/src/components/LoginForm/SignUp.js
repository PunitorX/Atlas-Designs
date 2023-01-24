import React from 'react'
import styled from 'styled-components'
import GoogleButton from 'react-google-button'
import ButtonTwo from '../Buttons/ButtonTwo'
import UseForm from './UseForm'
import validateInfo from './ValidateInfo'
import { Link } from 'react-router-dom'

const Form = styled.form`
  
`

const FormHeader = styled.h1`

`

const FormSpan = styled.span`

`

const FormGroup = styled.div`

`

const FormItem = styled.div`

`

const FormLabel = styled.label`

`

const FormInput = styled.input`

`

const FormLogin = styled.div`

`

const FormLink = styled(Link)`

`



export const SignUp = ({submitForm}) => {
  const {handleChange, values, handleSubmit, errors} = UseForm(submitForm, validateInfo)

  return (
    <Form onSubmit={handleSubmit}>
      <FormHeader>
        Have the power button in your hands
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

          <ButtonTwo as="button" type='submit' to='/Success' stroke={'#2C3333'} color={'#2C3333'}>
            Create Account
          </ButtonTwo>

          <FormLogin>
            Already have an account?<FormLink to='/Login'>Login</FormLink>
          </FormLogin>
        </FormGroup>
    </Form>

  )
}
