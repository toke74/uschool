import styled from "styled-components";

const Container = styled.div``;

const Input = styled.input`
  display: block;
  padding: 0.6rem 0.75rem;
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

const Button = ({ type, value }) => {
  return (
    <Container>
      <Input type={type} value={value} />
    </Container>
  );
};

export default Button;
