import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.5rem;
`;

/***************************************************
 ****** header Section *****************************
 ***************************************************/
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 5rem;
`;

export const Heading = styled.h1`
  font-size: 0.875rem;

  @media (min-width: ${({ theme }) => theme.device.md}) {
    font-size: 1.25rem;
  }
`;

export const Divider = styled.div`
  width: 80%;
  margin: 0.5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_300};
`;

/***************************************************
 ****** Form section *******************************
 ***************************************************/
export const Form = styled.form`
  margin: 1.2rem 0.75rem;
  width: 80%;

  @media (min-width: ${({ theme }) => theme.device.sm}) {
    width: 50%;
  }

  @media (min-width: ${({ theme }) => theme.device.md}) {
    width: 40%;
  }
  @media (min-width: ${({ theme }) => theme.device.lg}) {
    width: 30%;
  }
`;

export const Error = styled.p`
  font-size: 0.6rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
  color: ${({ theme }) => theme.colors.red_500};

  @media (min-width: ${({ theme }) => theme.device.sm}) {
    font-size: 0.8rem;
  }
`;

export const Button = styled.button`
  display: block;
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

  .spinner {
    color: white !important;
    font-size: 1.2rem;
    animation: spin infinite 3s linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

/***************************************************
 ****** Term of use and to login page **************
 ***************************************************/
export const BottomWrapper = styled.div`
  margin: 0.7rem 0.75rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.7rem;
  @media (min-width: ${({ theme }) => theme.device.sm}) {
    width: 50%;
  }

  @media (min-width: ${({ theme }) => theme.device.md}) {
    width: 40%;
  }
  @media (min-width: ${({ theme }) => theme.device.lg}) {
    width: 30%;
    font-size: 0.85rem;
  }
`;

export const TermOfUse = styled.p`
  text-align: center;
`;

export const ForgotPasswordLink = styled.a`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.blue_500};
`;

export const NotRegister = styled.p``;

export const NotRegisterLink = styled.a`
  cursor: pointer;
  font-weight: 700;
  margin-left: 0.3rem;
  text-decoration-line: underline;
  color: ${({ theme }) => theme.colors.blue_500};
`;
