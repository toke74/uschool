import styled from "styled-components";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdPlayCircle,
} from "react-icons/md";

/***************************************************
 ****** Course Content Container *******************
 ***************************************************/
export const Container = styled.div`
  margin: 1rem 1.45rem 0;

  @media (min-width: ${({ theme }) => theme.device.xl}) {
    order: 1;
  }

  @media (min-width: ${({ theme }) => theme.device.md}) {
    margin: 1.7rem 6.6rem 2.5rem;
  }

  @media (min-width: ${({ theme }) => theme.device.lg}) {
    margin: 1.7rem 15rem 2.5rem;
  }

  @media (min-width: ${({ theme }) => theme.device.xl}) {
    margin: 1.7rem 13rem 2.5rem 4rem;
  }
`;

export const Wrapper = styled.div`
  @media (min-width: ${({ theme }) => theme.device.xl}) {
    order: 1;
    max-width: 48rem;
  }
`;

/***************************************************
 ****** What you'll lear selection *****************
 ***************************************************/
export const WhatToLearn = styled.div`
  padding: 0.75rem;
  margin-bottom: 1.25rem;
  border: 1px solid ${({ theme }) => theme.colors.zinc_300};
`;

export const WhatToLearnWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media (min-width: ${({ theme }) => theme.device.sm}) {
    column-gap: 1rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const WhatToLearnHeading = styled.h2`
  font-size: 1.12rem;
  line-height: 1.75rem;
  margin-bottom: 0.7rem;
`;

export const WhatToLearnList = styled.ul`
  display: flex;
  font-size: 0.6rem;
  margin-bottom: 0.7rem;

  @media (min-width: ${({ theme }) => theme.device.sm}) {
    font-size: 0.75rem;
  }

  @media (min-width: ${({ theme }) => theme.device.lg}) {
    font-size: 0.85rem;
  }
`;

export const RightIcon = styled.span`
  margin-right: 0.5rem;
`;

export const WhatToLearnListItem = styled.li``;

/***************************************************
 ****** Course content header selection ************
 ***************************************************/

export const CourseContentWrapper = styled.div``;

export const CourseContentHeader = styled.h1`
  font-size: 1.125rem;
  margin-bottom: 0.5rem;

  @media (min-width: ${({ theme }) => theme.device.sm}) {
    font-size: 1.25rem;
  }
`;

export const CourseContentLecturerWrapper = styled.div`
  @media (min-width: ${({ theme }) => theme.device.sm}) {
    display: flex;
    justify-content: space-between;
  }
`;

export const CourseContentLecturer = styled.p`
  font-size: 0.6rem;
  @media (min-width: ${({ theme }) => theme.device.sm}) {
    font-size: 0.85rem;
  }
`;

export const CourseContentExpandButton = styled.button`
  font-size: 0.6rem;
  font-weight: 700;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.blue_500};
  background-color: ${({ theme }) => theme.colors.white};

  @media (min-width: ${({ theme }) => theme.device.sm}) {
    font-size: 0.85rem;
  }
`;

/***************************************************
 ****** Course content Title selection *************
 ***************************************************/

export const CourseContentTitleWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray_200};
`;

export const CourseContentTitleLists = styled.ul``;

export const CourseContentTitleListItem = styled.li`
  display: flex;
  cursor: pointer;
  padding: 0.5rem;
  font-weight: 700;
  border-top: 1px solid ${({ theme }) => theme.colors.gray_200};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_200};
`;

export const ArrowDownIcon = styled(MdOutlineKeyboardArrowDown)`
  font-size: 1.125rem;
  margin-right: 0.5rem;
  display: ${({ isVisable }) => (isVisable ? "none" : "block")};

  @media (min-width: ${({ theme }) => theme.device.sm}) {
    font-size: 1.25rem;
  }
`;

export const ArrowUpIcon = styled(MdOutlineKeyboardArrowUp)`
  font-size: 1.125rem;
  margin-right: 0.5rem;
  display: ${({ isVisable }) => (isVisable ? "block" : "none")};

  @media (min-width: ${({ theme }) => theme.device.sm}) {
    font-size: 1.25rem;
  }
`;

export const TitleListItem = styled.span`
  flex: 1 1 0%;
  font-size: 0.6rem;

  @media (min-width: ${({ theme }) => theme.device.sm}) {
    font-size: 0.75rem;
  }

  @media (min-width: ${({ theme }) => theme.device.lg}) {
    font-size: 0.9rem;
  }
`;
export const TotalLecturesTime = styled.span`
  display: none;

  @media (min-width: ${({ theme }) => theme.device.sm}) {
    font-size: 0.75rem;
    display: block;
  }
`;

/***************************************************
 ****** Course content List selection **************
 ***************************************************/

export const CourseContentLists = styled.ul``;

export const CourseContentListItem = styled.li`
  font-size: 0.6rem;
  padding: 0.5rem 0.5rem 0 0.5rem;
  display: ${({ isVisable }) => (isVisable ? "flex" : "none")};

  &:last-child {
    padding-bottom: 0.75rem;
  }

  @media (min-width: ${({ theme }) => theme.device.md}) {
    font-size: 0.75rem;
  }

  @media (min-width: ${({ theme }) => theme.device.lg}) {
    font-size: 0.8rem;
  }
`;

export const PlayCircle = styled(MdPlayCircle)`
  font-size: 0.75rem;
  margin-right: 0.5rem;

  @media (min-width: ${({ theme }) => theme.device.sm}) {
    font-size: 1rem;
  }
`;

export const SpecficCourseTitle = styled.span`
  flex: 1 1 0%;
`;

export const SpecficCourseDuration = styled.span`
  display: none;

  @media (min-width: ${({ theme }) => theme.device.sm}) {
    display: block;
  }

  @media (min-width: ${({ theme }) => theme.device.sm}) {
    font-size: 0.75rem;
  }
`;

/***************************************************
 ****** Course Requirements selection **************
 ***************************************************/

export const CourseRequirementWrapper = styled.div``;

export const CourseRequirementHeader = styled.h1`
  font-size: 1.125rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;

  @media (min-width: ${({ theme }) => theme.device.sm}) {
    font-size: 1.25rem;
  }
`;

export const CourseRequirementLists = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.6rem;
  margin-bottom: 0.5rem;

  @media (min-width: ${({ theme }) => theme.device.sm}) {
    font-size: 0.875rem;
  }
`;

export const StarUniCode = styled.span`
  margin-right: 0.5rem;
  font-size: 0.85rem;
`;

export const CourseRequirementListItem = styled.div``;

/***************************************************
 ****** Course Description selection **************
 ***************************************************/
export const CourseDescriptionWrapper = styled.div``;
export const CourseDescriptionHeader = styled.h1`
  font-size: 1.125rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;

  @media (min-width: ${({ theme }) => theme.device.sm}) {
    font-size: 1.25rem;
  }
`;
export const CourseDescription = styled.p`
  font-size: 0.6rem;
  margin-bottom: 0.5rem;

  @media (min-width: ${({ theme }) => theme.device.sm}) {
    font-size: 0.875rem;
  }
`;
