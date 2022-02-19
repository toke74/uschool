import styled from "styled-components";
import { MdStarBorder } from "react-icons/md";
import Rating from "@mui/material/Rating";

/***************************************************
 ****** Header selection start *********************
 ***************************************************/
export const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.zinc_800};
  color: ${({ theme }) => theme.colors.white};
`;

export const HeaderWrapper = styled.div`
  padding: 1.25rem 1.25rem 1.7rem;

  @media (min-width: ${({ theme }) => theme.device.md}) {
    padding: 1.7rem 6.6rem 2.5rem;
  }

  @media (min-width: ${({ theme }) => theme.device.lg}) {
    padding: 1.7rem 15rem 2.5rem;
  }

  @media (min-width: ${({ theme }) => theme.device.xl}) {
    padding: 1.7rem 13rem 2.5rem 4rem;
  }
`;

export const CourseTitle = styled.h2`
  font-size: 1.05rem;
  line-height: 1.75rem;
  font-weight: 700;

  @media (min-width: ${({ theme }) => theme.device.md}) {
    font-size: 1.5rem;
  }
  @media (min-width: ${({ theme }) => theme.device.xl}) {
    margin-right: 16rem;
  }

  @media (min-width: ${({ theme }) => theme.device.xxl}) {
    margin-right: 26rem;
  }
`;

export const CourseDescription = styled.p`
  padding: 0.75rem 0;
  font-size: 0.875rem;
  line-height: 1.25rem;

  @media (min-width: ${({ theme }) => theme.device.md}) {
    font-size: 0.92rem;
    padding: 0.95rem 0;
  }

  @media (min-width: ${({ theme }) => theme.device.xl}) {
    padding-right: 16rem;
  }

  @media (min-width: ${({ theme }) => theme.device.xxl}) {
    margin-right: 19.5rem;
  }
`;

/***************************************************
 ****** Button Group start *************************
 ***************************************************/
export const ButtonRatingContainer = styled.div`
  margin-top: 0.125rem;

  @media (min-width: ${({ theme }) => theme.device.md}) {
    display: flex;
    align-items: center;
  }
`;

export const ButtonGroup = styled.div``;

export const BestSellerButton = styled.button`
  font-size: 0.75rem;
  line-height: 1.25rem;
  font-weight: 700;
  padding: 0.125rem 0.5rem;

  background: ${({ theme }) => theme.colors.yellow_200};

  @media (min-width: ${({ theme }) => theme.device.md}) {
    font-size: 0.86rem;
    padding: 0.25rem 0.5rem;
    margin-right: 0.8rem;
  }
`;

export const NewCourseButton = styled.button`
  font-size: 0.75rem;
  line-height: 1.25rem;
  font-weight: 700;
  padding: 0.125rem 0.5rem;
  color: ${({ theme }) => theme.colors.red_300};
  background: ${({ theme }) => theme.colors.red_900};

  @media (min-width: ${({ theme }) => theme.device.md}) {
    font-size: 0.86rem;
    padding: 0.25rem 0.5rem;
    margin-right: 0.8rem;
  }
`;

/***************************************************
 ****** Rating Group  start ************************
 ***************************************************/
export const RatingGroup = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.6rem;
  margin: 1rem 0 0.7rem 0;

  @media (min-width: ${({ theme }) => theme.device.md}) {
    font-size: 0.9rem;
  }
`;

export const NumberOfRating = styled.span`
  font-weight: 700;
  font-size: 0.85rem;
  margin-right: 0.3rem;
  color: ${({ theme }) => theme.colors.amber_500};
`;

export const StarRating = styled(Rating)`
  font-size: 0.85rem !important;
  margin-right: 0.2rem;

  @media (min-width: ${({ theme }) => theme.device.md}) {
    font-size: 1.1rem !important;
    margin-right: 0.5rem;
  }
`;

export const TotalNumberOfRating = styled.span`
  margin-right: 0.2rem;

  @media (min-width: ${({ theme }) => theme.device.md}) {
    margin-right: 0.8rem;
    font-size: 0.85rem;
  }
`;

export const TotalNumberOfStudent = styled.span`
  @media (min-width: ${({ theme }) => theme.device.md}) {
    font-size: 0.85rem;
  }
`;

export const StarBorder = styled(MdStarBorder)`
  color: ${({ theme }) => theme.colors.orange_200} !important;
`;

/****************************************************
 **** Created by,  Last updated, Language start *****
 ****************************************************/

export const CreatedBy = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.7rem;

  @media (min-width: ${({ theme }) => theme.device.md}) {
    font-size: 0.86rem;
    margin-top: 0.5rem;
  }
`;

export const InstructorName = styled.p`
  margin-left: 0.6rem;

  @media (min-width: ${({ theme }) => theme.device.md}) {
    margin-left: 0.82rem;
    font-size: 0.86rem;
  }
`;

export const LastUpdateAndLanguage = styled.div`
  margin-top: 0.7rem;

  @media (min-width: ${({ theme }) => theme.device.md}) {
    margin-top: 1.1rem;
  }
`;
export const LastUpdateWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.7rem;

  @media (min-width: ${({ theme }) => theme.device.md}) {
    font-size: 0.86rem;
  }
`;
export const LastUpdate = styled.span`
  margin-left: 0.5rem;
`;
export const LanguageWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.7rem;
  margin-top: 0.7rem;

  @media (min-width: ${({ theme }) => theme.device.md}) {
    font-size: 0.86rem;
    margin-top: 1.1rem;
  }
`;
export const Language = styled.span`
  margin-left: 0.5rem;
`;
