import styled from "styled-components";

export const Container = styled.div`
  border-radius: 0.375rem;
  padding: 1rem;
  margin: 0.75rem;
  background-color: ${({ theme, type }) =>
    (type == "success" && theme.colors.green_50) ||
    (type == "error" && theme.colors.red_50) ||
    (type == "update" && theme.colors.indigo_50) ||
    (type == "warning" && theme.colors.yellow_50)};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SvgWrapper = styled.div`
  flex-shrink: 0;
`;

export const Svg = styled.svg`
  height: 1.25rem;
  width: 1.25rem;
  color: ${({ theme, type }) =>
    (type == "success" && theme.colors.green_400) ||
    (type == "error" && theme.colors.red_400) ||
    (type == "update" && theme.colors.indigo_400) ||
    (type == "warning" && theme.colors.yellow_400)};
`;

export const MessageWrapper = styled.div`
  margin-left: 0.75rem;
  margin-bottom: 0.4rem;
`;

export const Message = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme, type }) =>
    (type == "success" && theme.colors.green_800) ||
    (type == "error" && theme.colors.red_800) ||
    (type == "update" && theme.colors.indigo_800) ||
    (type == "warning" && theme.colors.yellow_800)};
`;

export const ButtonContainer = styled.div`
  margin-left: auto;
`;

export const ButtonWrapper = styled.div`
  margin: -0.375rem;
  padding-left: 0.75rem;
`;

export const Button = styled.button`
  display: inline-flex;
  border-radius: 0.375rem;
  cursor: pointer;
  color: ${({ theme, type }) =>
    (type == "success" && theme.colors.green_500) ||
    (type == "error" && theme.colors.red_500) ||
    (type == "update" && theme.colors.indigo_500) ||
    (type == "warning" && theme.colors.yellow_500)};

  background-color: ${({ theme, type }) =>
    (type == "success" && theme.colors.green_50) ||
    (type == "error" && theme.colors.red_50) ||
    (type == "update" && theme.colors.indigo_50) ||
    (type == "warning" && theme.colors.yellow_50)};

  &:hover {
    opacity: 1;
    background-color: ${({ theme, type }) =>
      (type == "success" && theme.colors.green_100) ||
      (type == "error" && theme.colors.red_100) ||
      (type == "update" && theme.colors.indigo_100) ||
      (type == "warning" && theme.colors.yellow_100)};
  }

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`;

export const DismissButton = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

export const ButtonSvg = styled.svg`
  height: 1.25rem;
  width: 1.25rem;
`;
