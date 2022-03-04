import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { MdPerson, MdEmail, MdLock } from "react-icons/md";
import { ImSpinner6 } from "react-icons/im";
import {
  Container,
  HeaderContainer,
  RegisterHeading,
  Divider,
  Form,
  Error,
  Button,
  BottomWrapper,
  TermOfUse,
  AlreadyRegister,
  AlreadyRegisterLink,
  TermOfUseLink,
} from "./registerStyle";
import FormInput from "../../util/form/formInput/FormInput";
import useForm from "../../hooks/useForm";
import { registeValidate } from "../../util/validation/ValidationRules";
import { useToast } from "../../hooks/useToast";

const Register = () => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const onSubmitRegister = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/v1/auth/register`, {
        fName: values.fName,
        lName: values.lName,
        email: values.email,
        password: values.password,
      });

      toast("success", "Registration successful. Please login.");
      setLoading(false);
    } catch (err) {
      toast("error", err.response.data);
      setLoading(false);
    }
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    onSubmitRegister,
    registeValidate
  );

  return (
    <Container>
      {/* Register Header */}
      <HeaderContainer>
        <RegisterHeading> Sign Up and Start Learning!</RegisterHeading>
        <Divider />
      </HeaderContainer>

      {/* Register Form */}
      <Form onSubmit={handleSubmit} autocomplete="off" noValidate>
        <FormInput
          type="text"
          placeholder="First Name"
          name="fName"
          onChange={handleChange}
          value={values.fName || ""}
          required
          Icon={MdPerson}
        />

        {errors.fName && <Error>{errors.fName}</Error>}

        <FormInput
          type="text"
          placeholder="Last Name"
          name="lName"
          onChange={handleChange}
          value={values.lName || ""}
          required
          Icon={MdPerson}
        />

        {errors.lName && <Error>{errors.lName}</Error>}

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

        <Button type="submit">
          {loading ? <ImSpinner6 className="spinner" /> : "Sign up"}
        </Button>
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
