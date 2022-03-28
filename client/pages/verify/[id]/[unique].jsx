import { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useToast } from "../../../hooks/useToast";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 5rem;
  height: 80vh;
`;

const ButtonWrapper = styled.div`
  margin-top: 1rem;
`;

const Button = styled.a`
  padding: 0.4rem 0.75rem;
  width: 100%;
  font-weight: 700;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue_500};
  border: 1px solid ${({ theme }) => theme.colors.blue_500};

  @media (min-width: ${({ theme }) => theme.device.lg}) {
    font-size: 1rem;
    padding: 0.65rem 0.75rem;
  }
`;

const VerifyEmail = () => {
  const [validUrl, setValidUrl] = useState(false);
  const router = useRouter();
  const { id, unique } = router.query;
  const toast = useToast();

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        if (id && unique) {
          const url = `http://localhost:3000/api/v1/auth/verify/${id}/${unique}`;
          const { data } = await axios.get(url);

          toast("success", data);
          setValidUrl(true);
        }
      } catch (error) {
        console.log(error);
        toast("error", error.response.data);
        setValidUrl(false);
      }
    };
    verifyEmailUrl();
  }, [router]);
  return (
    <>
      {validUrl ? (
        <Container>
          <Image
            src="/static/images/success.png"
            alt=""
            width="150"
            height="150"
          />
          <h1>Email verified successfully</h1>
          <ButtonWrapper>
            <Link href="/login">
              <Button>Log in</Button>
            </Link>
          </ButtonWrapper>
        </Container>
      ) : (
        <Container>
          <h1>404 Not Found</h1>
        </Container>
      )}
    </>
  );
};

export default VerifyEmail;
