function validateInfo(values) {
  let errors = {}

  // First Name
  if(!values.firstname.trim()) {
      errors.firstname = 'First name required'
  }

  // Last Name
  if(!values.lastname.trim()) {
      errors.lastname = 'Last name required'
  }

  // Username
  // if(!values.username.trim()) {
  //     errors.username = 'Username required'
  // }

  // Email
  if(!values.email) {
      errors.email = 'Email required'
  } else if(!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid'
  }

  // Password
  if(!values.passwordOne) {
      errors.passwordOne = 'Password is required'
  } else if(values.passwordOne.length < 8) {
      errors.passwordOne = 'Password needs to be 8 or more characters'
  }

  // Password Match
  if(!values.passwordTwo) {
      errors.passwordTwo = 'Password is required'
  } else if(values.passwordTwo !== values.passwordOne) {
      errors.passwordTwo = 'Password do not match'
  }

  return errors
}

export default validateInfo