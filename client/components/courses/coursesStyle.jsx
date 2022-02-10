import styled from "styled-components";

/***************************************************
 ****** container start ****************************
 ***************************************************/
export const Container = styled.div`
  margin: 2rem 1rem;
`;

/***************************************************
 ****** Top selection start ************************
 ***************************************************/
export const TopSection = styled.div``;
export const TopHeading = styled.h3`
  font-size: 1.15rem;

  @media (min-width: ${({ theme }) => theme.device.sm}) {
    font-size: 1.75rem;
  }
`;
export const TopParagraph = styled.p`
  font-size: 0.9rem;
  margin: 0.5rem 0 1.75rem 0;

  @media (min-width: ${({ theme }) => theme.device.sm}) {
    font-size: 1.1rem;
  }
`;

export const CourseCategoryLists = styled.ul`
  display: flex;
  margin-bottom: 0.5rem;
`;

export const CourseCategoryListItem = styled.li`
  font-size: 0.86rem;
  line-height: 1rem;
  font-weight: 700;
  cursor: pointer;
  margin-right: 0.5rem;

  @media (min-width: ${({ theme }) => theme.device.sm}) {
    font-size: 1.1rem;
  }

  &:last-child {
    @media (min-width: ${({ theme }) => theme.device.xs}) {
      display: none;
    }
  }

  &:last-child {
    @media (min-width: ${({ theme }) => theme.device.sm}) {
      display: block;
    }
  }
`;

export const CourseCategoryALink = styled.a`
  color: ${(props) => (props.openTab ? "#3b82f6" : "#000")};
`;

/***************************************************
 ****** Bottom selection start *********************
 ***************************************************/
export const BottomSection = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray_300};
  padding: 0.75rem;
`;

export const CourseCategoryContent = styled.div`
  display: ${(props) => (props.openTab ? "block" : "none")};
`;

export const CourseCategoryDesc = styled.div``;

export const BottomHeading = styled.h3`
  font-size: 1rem;

  @media (min-width: ${({ theme }) => theme.device.sm}) {
    font-size: 1.2rem;
  }
`;

export const BottomParagraph = styled.p`
  font-size: 0.8rem;
  margin: 0.75rem 0;
  @media (min-width: ${({ theme }) => theme.device.sm}) {
    font-size: 1rem;
  }
`;

export const ExploreButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 0.7rem;
  font-weight: 700;
  cursor: pointer;
  outline: 2px solid transparent;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.black};
  margin-bottom: 1rem;

  &hover: {
    background-color: ${({ theme }) => theme.colors.gray_100};
  }

  @media (min-width: ${({ theme }) => theme.device.sm}) {
    font-size: 0.9rem;
  }
`;
