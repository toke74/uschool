import styled from "styled-components";
import Toast from "./toast/Toast";
import { useAppState } from "../../appState/contexts/appState";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  z-index: 50;
  color: ${({ theme }) => theme.colors.red_200};
`;

const Wrapper = styled.div`
  position: fixed;
  top: 5rem;
  max-width: 36rem;
`;

export default function ToastContainer(props) {
  const [state, dispatch] = useAppState();
  console.log(props);
  return (
    <Container>
      <Wrapper>
        {state.toast &&
          state.toast.map((toast) => (
            <Toast
              id={toast.id}
              key={toast.id}
              type={toast.type}
              message={toast.message}
            />
          ))}
      </Wrapper>
    </Container>
  );
}
