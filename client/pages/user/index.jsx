import { useAppState } from "../../hooks/useAppState";
import { Container } from "./userStyle";
import UserRoute from "../../components/routes/UserRoute";

const User = () => {
  const {
    state: { user },
  } = useAppState();

  return (
    <Container>
      <UserRoute>
        <h1>
          <pre>{JSON.stringify(user, null, 4)}</pre>
        </h1>
      </UserRoute>
    </Container>
  );
};

export default User;
