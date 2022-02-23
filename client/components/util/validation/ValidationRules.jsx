export default function validate(values) {
  let errors = {};
  const regName = /^[a-zA-Z ]{2,40}$/;
  const regEmail = /\S+@\S+\.\S+/;

  //validate name
  if (!values.name) {
    errors.name = "Name  is required, min 2  and max  40 characters";
  } else if (!regName.test(values.name)) {
    errors.name = "Name is invalid";
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
