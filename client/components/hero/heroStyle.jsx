import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

/***************************************************
 ****** Hero start *********************************
 ***************************************************/
export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.gray_100};
  height: 70%;
`;

export const Wrapper = styled.div`
  padding: 2rem 0.7rem 2rem 1.4rem;

  @media (min-width: ${({ theme }) => theme.device.sm}) {
    display: flex;
    align-items: center;
  }

  @media (min-width: ${({ theme }) => theme.device.md}) {
    padding: 2rem 2rem 2rem 3rem;
  }
`;

/***************************************************
 ****** Hero Right start ***************************
 ***************************************************/

export const RightHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.device.sm}) {
    align-items: flex-start;
  }
`;
export const Heading = styled.h1`
  font-size: 1.5rem;

  @media (min-width: ${({ theme }) => theme.device.md}) {
    font-size: 2.5rem;
  }

  @media (min-width: ${({ theme }) => theme.device.lg}) {
    font-size: 3rem;
  }
`;
export const Paragraph = styled.p`
  margin: 0.75rem 0;

  @media (min-width: ${({ theme }) => theme.device.md}) {
    font-size: 1.35rem;
    margin: 0.75rem 1.5rem 0.75rem 0;
  }
`;

export const JoinUsLink = styled(Link)``;

export const JoinUsALink = styled.a`
  padding: 0.75rem 1.5rem;
  border-radius: 0.15rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue_500};
  @media (min-width: ${({ theme }) => theme.device.md}) {
    font-size: 1.35rem;
  }
`;

/***************************************************
 ****** Hero Lsft start ****************************
 ***************************************************/

export const LeftHero = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.device.sm}) {
    display: block;
  }
`;
export const HeroImage = styled(Image)``;
