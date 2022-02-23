import { useState } from "react";
import Link from "next/link";
import { MdPerson, MdEmail, MdLock } from "react-icons/md";

import {
  Container,
  HeaderContainer,
  RegisterHeading,
  Divider,
  Form,
  Error,
  BottomWrapper,
  TermOfUse,
  AlreadyRegister,
  AlreadyRegisterLink,
  TermOfUseLink,
} from "./registerStyle";
import FormInput from "../../components/util/form/formInput/FormInput";
import Button from "../../components/util/form/Button/Button";
import useForm from "../../components/util/hooks/useForm";
import validate from "../../components/util/validation/ValidationRules";

const Register = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    onSubmitRegister,
    validate
  );

  function onSubmitRegister() {
    const data = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    console.log(data);
  }

  return (
    <Container>
      {/* Register Header */}
      <HeaderContainer>
        <RegisterHeading> Sign Up and Start Learning!</RegisterHeading>
        <Divider />
      </HeaderContainer>

      {/* Register Form */}
      <Form onSubmit={handleSubmit} noValidate>
        <FormInput
          type="text"
          placeholder="Full Name"
          name="name"
          onChange={handleChange}
          value={values.name || ""}
          required
          Icon={MdPerson}
        />

        {errors.name && <Error>{errors.name}</Error>}

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

        <FormInput
          type="Password"
          placeholder="Confirm Password"
          onChange={handleChange}
          name="confirmPassword"
          value={values.confirmPassword || ""}
          required
          Icon={MdLock}
        />

        {errors.confirmPassword && <Error>{errors.confirmPassword}</Error>}

        <Button type="submit" value="Sign up" />
      </Form>

      {/* Terms of use and to login link */}
      <BottomWrapper>
        <TermOfUse>
          By signing up, you agree to our{" "}
          <Link href="/">
            <TermOfUseLink> Terms of Use </TermOfUseLink>
          </Link>
          and
          <Link href="/">
            <TermOfUseLink> Privacy Policy</TermOfUseLink>
          </Link>
          .
        </TermOfUse>
        <Divider />
        <AlreadyRegister>
          Already have an account?
          <Link href="/login">
            <AlreadyRegisterLink>Log In</AlreadyRegisterLink>
          </Link>
        </AlreadyRegister>
      </BottomWrapper>
    </Container>
  );
};

export default Register;
