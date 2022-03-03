export default function validate(values) {
  let errors = {};
  const regName = /^[a-zA-Z ]{2,40}$/;
  const regEmail = /\S+@\S+\.\S+/;

  //validate name
  if (!values.fName) {
    errors.fName = "First name  is required, min 2  and max  40 characters";
  } else if (!regName.test(values.fName)) {
    errors.fName = "First name is invalid";
  }

  //validate name
  if (!values.lName) {
    errors.lName = "Last name  is required, min 2  and max  40 characters";
  } else if (!regName.test(values.lName)) {
    errors.lName = "Last name is invalid";
  } else if (values.fName === values.lName) {
    errors.lName = "Your last name is  same as your first name";
  }

  //validate email
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!regEmail.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  //validate password
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be 8 or more characters";
  } else if (values.password.length > 28) {
    errors.password = "Password must be less 28 characters";
  }

  //validate confirm Password
  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm Password is required";
  } else if (values.password != values.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }
  return errors;
}
