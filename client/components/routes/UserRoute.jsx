import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import styled from "styled-components";
import Image from "next/image";

const Container = styled.div``;
const Spinner = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserRoute = ({ children }) => {
  const [ok, setOk] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/current-user");
      if (data.ok) setOk(true);
    } catch (err) {
      setOk(false);
      router.push("/login");
    }
  };

  return (
    <Container>
      {!ok ? (
        <Spinner>
          <Image
            src="/static/images/spinner2.gif"
            alt=""
            width="80"
            height="80"
          />
        </Spinner>
      ) : (
        <>{children}</>
      )}
    </Container>
  );
};

export default UserRoute;
