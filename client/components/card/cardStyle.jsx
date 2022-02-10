import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  margin: 0 1rem;
  cursor: pointer;
`;

export const CardImage = styled(Image)`
  object-fit: cover;
`;

/***************************************************
 ****** Card body start ****************************
 ***************************************************/
export const CardBody = styled.div`
  margin: 0.5rem 0.5rem 1.2rem 0.5rem;
`;

export const CardTitle = styled.h5`
  margin-bottom: 0.35rem;
  color: ${({ theme }) => theme.colors.gray_900};
`;

export const Instructor = styled.div`
  font-size: 0.9rem;
  line-height: 1rem;
  cursor: pointer;
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
`;

export const RatingSection = styled.div`
  display: flex;
  align-items: center;
`;

export const RatingNumber = styled.div`
  margin-right: 0.35rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.red_800};
`;

export const TotalRating = styled.div`
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-left: 0.35rem;
`;

export const Price = styled.div`
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 700;
`;

export const ButtonGroup = styled.div`
  margin-top: 0.5rem;
`;
export const BestSellerBtn = styled.button`
  padding: 0.125rem 0.5rem;
  font-weight: 700;
  background: ${({ theme }) => theme.colors.yellow_200};
`;
export const NewCourseBtn = styled.button`
  padding: 0.125rem 0.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.red_300};
  background: ${({ theme }) => theme.colors.red_900};
`;
