import React from "react";
import {
  Container,
  SvgWrapper,
  Wrapper,
  Svg,
  MessageWrapper,
  Message,
  ButtonContainer,
  ButtonWrapper,
  Button,
  DismissButton,
  ButtonSvg,
} from "./toastStyle";

const ErrorToast = ({ message, id, dispatch, DELETE_TOAST }) => {
  return (
    <Container type="error">
      <Wrapper>
        <SvgWrapper>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            type="error"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </Svg>
        </SvgWrapper>
        <MessageWrapper>
          <Message type="error">{message}</Message>
        </MessageWrapper>
        <ButtonContainer>
          <ButtonWrapper>
            <Button
              onClick={() => {
                dispatch({ type: DELETE_TOAST, id: id });
              }}
              type="error"
            >
              <DismissButton>Dismiss</DismissButton>

              <ButtonSvg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </ButtonSvg>
            </Button>
          </ButtonWrapper>
        </ButtonContainer>
      </Wrapper>
    </Container>
  );
};

export default ErrorToast;
