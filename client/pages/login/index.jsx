import axios from "axios";
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
import useForm from "../../hooks/useForm";
import { loginValidate } from "../../util/validation/ValidationRules";
import { useToast } from "../../hooks/useToast";

const Login = () => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const onSubmitLogin = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/v1/auth/login`, {
        email: values.email,
        password: values.password,
      });

      toast("success", "Login successful.");
      console.log(data);

      setLoading(false);
    } catch (err) {
      toast("error", err.response.data);
      setLoading(false);
    }
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    onSubmitLogin,
    loginValidate
  );

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
