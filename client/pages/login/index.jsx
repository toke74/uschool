import Link from "next/link";
import { useState } from "react";
import { MdEmail, MdLock } from "react-icons/md";
import { ImSpinner6 } from "react-icons/im";
import {
  Container,
  HeaderContainer,
  Heading,
  Divider,
  Form,
  BottomWrapper,
  ForgotPasswordLink,
  NotRegister,
  NotRegisterLink,
  Error,
  Button,
} from "./loginStyle";
import FormInput from "../../util/form/formInput/FormInput";
// import Button from "../../util/form/Button/Button";
import useForm from "../../hooks/useForm";
import validate from "../../util/validation/ValidationRules";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { values, errors, handleChange, handleSubmit } = useForm(
    onSubmitLogin,
    validate
  );

  function onSubmitLogin() {
    const data = { email: values.email, password: values.password };
    console.log(data);
  }

  return (
    <Container>
      {/* Login Header */}
      <HeaderContainer>
        <Heading> Log In to Your Uschool Account!</Heading>
        <Divider />
      </HeaderContainer>

      {/* Login Form */}
      <Form onSubmit={handleSubmit} autocomplete="off" noValidate>
        <FormInput
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={values.email || ""}
          required
          Icon={MdEmail}
        />
        {errors.email && <Error>{errors.email}</Error>}

        <FormInput
          type="Password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={values.password || ""}
          required
          Icon={MdLock}
        />
        {errors.password && <Error>{errors.password}</Error>}
        <Button type="submit">
          {loading ? <ImSpinner6 className="spinner" /> : "Log In"}
        </Button>
      </Form>

      {/* Forgot Password and Don't have an account?  */}
      <BottomWrapper>
        <Link href="/">
          <ForgotPasswordLink> Forgot Password</ForgotPasswordLink>
        </Link>

        <Divider />

        <NotRegister>
          Already have an account?
          <Link href="/register">
            <NotRegisterLink>Register</NotRegisterLink>
          </Link>
        </NotRegister>
      </BottomWrapper>
    </Container>
  );
};

export default Login;
