import styled from "styled-components";

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: rgb(219, 112, 147);
  font-weight: 100;
  font-family: ${({ theme }) => theme.headingFont};
`;

const Index = () => {
  return (
    <div>
      <Title>Home page</Title>
    </div>
  );
};

export default Index;
