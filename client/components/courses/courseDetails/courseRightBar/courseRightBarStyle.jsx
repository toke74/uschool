import styled from "styled-components";

/***************************************************
 ****** Right Bar selection start ******************
 ***************************************************/
export const RightBarContainer = styled.div`
  margin: 1rem 1.45rem 0;
  background-color: ${({ theme }) => theme.colors.white};

  @media (min-width: ${({ theme }) => theme.device.md}) {
    margin: 1.7rem 6.6rem 2.5rem;
  }

  @media (min-width: ${({ theme }) => theme.device.lg}) {
    margin: 1.7rem 15rem 2.5rem;
  }

  @media (min-width: ${({ theme }) => theme.device.xl}) {
    order: 2;
    flex: 1 1 0%;
    position: absolute;
    top: 0.15rem;
    left: 628px;
    z-index: 10;
    width: 24rem;
    box-shadow: ${({ theme }) => theme.boxShadow.xxl};
    margin-bottom: 0rem;
  }

  @media (min-width: ${({ theme }) => theme.device.xxl}) {
    left: 640px;
    width: 30rem;
  }
`;

export const ImageWrapper = styled.div`
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.device.xl}) {
    display: ${({ tabChange }) => (tabChange ? "none" : "block")};
  }
`;

export const TapWrapper = styled.div`
  @media (min-width: ${({ theme }) => theme.device.xl}) {
    position: ${({ tabChange }) => (tabChange ? "fixed" : "")};
    background-color: ${({ tabChange }) => (tabChange ? "#fff" : "")};
    top: ${({ tabChange }) => (tabChange ? "5rem" : "")};
    left: ${({ tabChange }) => (tabChange ? "860px" : "")};
    width: ${({ tabChange }) => (tabChange ? "24rem" : "")};
    z-index: ${({ tabChange }) => (tabChange ? "50" : "")};
    box-shadow: ${({ tabChange }) =>
      tabChange
        ? "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;"
        : ""};
  }

  @media (min-width: ${({ theme }) => theme.device.xxl}) {
    left: 640px;
    width: 30rem;
    left: ${({ tabChange }) => (tabChange ? "880px" : "")};
    width: ${({ tabChange }) => (tabChange ? "30rem" : "")};
  }
`;

/***************************************************
 ****** Tab Nav  start *****************************
 ***************************************************/
export const TabNav = styled.div`
  width: 100%;
`;

export const TabLists = styled.ul`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const TabListItem = styled.li`
  flex: 1 1 auto;
  cursor: pointer;
  text-align: center;
  padding: 0.75rem 1.25rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray_300};
  border-bottom: ${({ openTab }) => (openTab ? "2px solid #000" : "")};
`;

export const TabLink = styled.a`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 700;
  color: ${({ openTab }) => (openTab ? "#000" : "#6b7280")};
`;

/***************************************************
 ****** Tab Content  start *************************
 ***************************************************/
export const TabContent = styled.div`
  @media (min-width: ${({ theme }) => theme.device.xl}) {
    padding: 0 2.3rem 1rem;
  }
`;

/***************************************************
 ****** Personal Tab Content ***********************
 ***************************************************/
export const PersonalTabContent = styled.div`
  display: ${({ openTab }) => (openTab ? "block" : "none")};
`;

export const TabHeading = styled.h2`
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin-bottom: 0.25rem;
`;

export const TabDescription = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-bottom: 0.25rem;
`;

export const TabButton = styled.button`
  display: block;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue_500};
`;

export const MonthlyPlan = styled.p`
  display: flex;
  justify-content: center;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${({ theme }) => theme.colors.gray_400};
`;

export const CoursePrice = styled.p`
  font-weight: 700;
`;

export const BtnGroup = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
  margin-bottom: 2.5rem;
`;

export const ApplyCouponAndGiftBtn = styled.button`
  cursor: pointer;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray_700};

  &:hover {
    opacity: 0.6;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  height: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;

  &:after,
  &:before {
    content: "";
    flex-grow: 1;
    opacity: 0.5;

    background-color: ${({ theme }) => theme.colors.gray_300};
    height: 0.125rem;
  }

  &:after,
  &:before {
    content: "";
    flex-grow: 1;
    opacity: 0.5;
    background-color: ${({ theme }) => theme.colors.gray_300};
    height: 0.125rem;
  }

  &:not(:empty):before {
    margin-right: 1rem;
  }

  &:not(:empty):after {
    margin-left: 1rem;
  }
`;

export const OrDivider = styled.div`
  color: ${({ theme }) => theme.colors.gray_400};
`;

/***************************************************
 ****** Business Tab Content ***********************
 ***************************************************/
export const BusinessTabContent = styled.div`
  display: ${({ openTab }) => (openTab ? "block" : "none")};
`;

export const Firstletter = styled.span`
  font-size: 1.5rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.colors.blue_500};
`;

export const StyleHeading = styled.span`
  color: ${({ theme }) => theme.colors.blue_500};
`;

export const BusinessLists = styled.div`
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-bottom: 2.5rem;
`;

export const BusinessListItemWrapper = styled.div`
  padding-bottom: 0.5rem;
`;

export const RightIcon = styled.span`
  margin-right: 1rem;
`;

export const BusinessListItem = styled.span``;
