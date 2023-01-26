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
  if(!values.password1) {
      errors.password1 = 'Password is required'
  } else if(values.password1.length < 8) {
      errors.password1 = 'Password needs to be 8 or more characters'
  }

  // Password Match
  if(!values.password2) {
      errors.password2 = 'Password is required'
  } else if(values.password2 !== values.password1) {
      errors.password2 = 'Password do not match'
  }

  return errors
}

export default validateInfo