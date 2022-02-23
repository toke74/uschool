import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0.75rem 0;
  font-size: 0.875rem;
  padding: 0.5rem 0.3rem;
  border: 1px solid ${({ theme }) => theme.colors.gray_500};

  @media (min-width: ${({ theme }) => theme.device.md}) {
    font-size: 0.95rem;
    padding: 0.6rem 0.3rem;
  }

  @media (min-width: ${({ theme }) => theme.device.lg}) {
    font-size: 1.2rem;
  }
`;

const Input = styled.input`
  font-size: 0.75rem;
  margin-left: 0.3rem;
  width: 90%;
  height: 100%;

  @media (min-width: ${({ theme }) => theme.device.md}) {
    font-size: 0.9rem;
  }

  @media (min-width: ${({ theme }) => theme.device.lg}) {
    font-size: 0.8rem;
  }
`;

const FormInput = ({ type, placeholder, value, onChange, Icon, ...props }) => {
  return (
    <Container>
      <Icon style={{ marginLeft: "0.2rem" }} />
      <Input
        {...props}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Container>
  );
};

export default FormInput;
