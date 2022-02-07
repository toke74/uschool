import styled from "styled-components";
import Image from "next/image";
import {
  MdClose,
  MdMenu,
  MdSearch,
  MdOutlineShoppingCart,
  MdFavoriteBorder,
} from "react-icons/md";

export const Container = styled.nav`
  padding: 1.1rem 1.5rem;
  position: sticky;
  top: 0;
  z-index: 45;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow.md};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.device.lg}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

/* ********************************************
 ****** Left Navbar start**********************
 **********************************************/
export const LeftNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuIcon = styled(MdMenu)`
  cursor: pointer;
  font-size: 1.5rem;
  line-height: 2rem;
  outline: 2px solid transparent;
  outline-offset: 2px;
  background: none;

  @media (min-width: ${({ theme }) => theme.device.lg}) {
    display: none;
  }
`;

export const CloseIcon = styled(MdClose)`
  cursor: pointer;
  font-size: 1.5rem;
  line-height: 2rem;
  outline: 2px solid transparent;
  outline-offset: 2px;
  background: none;

  @media (min-width: ${({ theme }) => theme.device.lg}) {
    display: none;
  }
`;

export const LogoLink = styled.a`
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }

  @media (min-width: ${({ theme }) => theme.device.sm}) {
    font-size: 1.3rem;
  }
`;

export const LogoLetter = styled.span`
  font-size: 1.13rem;
  color: ${({ theme }) => theme.colors.blue_500};

  @media (min-width: ${({ theme }) => theme.device.sm}) {
    font-size: 1.5rem;
  }
`;

export const OnSmallScreen = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchOnSmallScreen = styled(MdSearch)`
  margin-right: 0.75rem;
  font-size: 1.3rem;
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.device.sm}) {
    font-size: 1.6rem;
  }

  @media (min-width: ${({ theme }) => theme.device.lg}) {
    display: none;
  }
`;

export const LoginBtnOnSmallScreen = styled.a`
  font-size: 0.85rem;
  cursor: pointer;
  padding: 0.2rem 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.black};

  &:hover {
    opacity: 0.75;
    border: 1px solid ${({ theme }) => theme.colors.gray_500};
  }

  @media (min-width: ${({ theme }) => theme.device.sm}) {
    font-size: 1.1rem;
    padding: 0.3rem 0.75rem;
  }

  @media (min-width: ${({ theme }) => theme.device.lg}) {
    display: none;
  }
`;

export const AvatarContainerOnSmallScreen = styled.div`
  position: relative;

  @media (min-width: ${({ theme }) => theme.device.lg}) {
    display: none;
  }
`;

export const UserAvatar = styled(Image)`
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  cursor: pointer;

  &:hover {
    opacity: 0.87;
  }
`;

/****************************************************
 ****** Middle Navbar start**************************
 ****************************************************/
export const MiddleNav = styled.div`
  @media (min-width: ${({ theme }) => theme.device.s}) {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.device.lg}) {
    display: flex;
    align-items: center;
    padding: 0.35rem 1rem;
    border: 1px solid ${({ theme }) => theme.colors.gray_500};
    border-radius: 2rem;
  }
`;

export const SearchIcon = styled(MdSearch)`
  font-size: 1.5rem;
  line-height: 2rem;
`;

export const SearchInput = styled.input`
  background: transparent;
  width: 30vw;
  margin-left: 0.5rem;
  font-size: 0.9rem;
  ::placeholder {
    color: ${({ theme }) => theme.colors.gray_500};
  }
`;

/***************************************************
 ****** Right Navbar start**************************
 ***************************************************/
export const RightNav = styled.div`
  margin-top: 0.5rem;
  display: ${(props) => (props.navbarOpen ? "block" : "none")};

  @media (min-width: ${({ theme }) => theme.device.lg}) {
    margin-top: 0;
    display: flex;
    align-items: center;
  }
`;

export const RightUl = styled.ul`
  font-size: 1.3rem;

  @media (min-width: ${({ theme }) => theme.device.lg}) {
    display: flex;
    align-items: center;
    font-size: 1.1rem;
  }
`;

export const RightLi = styled.li`
  margin: 0.75rem 0;
  line-height: 1.25rem;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.blue_400};
  }

  @media (min-width: ${({ theme }) => theme.device.lg}) {
    margin: 0 0.75rem;
  }
`;

export const RightALink = styled.a``;

export const ShoppingCartIcon = styled(MdOutlineShoppingCart)`
  font-size: 1.4rem;
`;

export const FavoriteIcon = styled(MdFavoriteBorder)`
  font-size: 1.4rem;
`;

export const UserAuthWrapper = styled.div`
  @media (min-width: ${({ theme }) => theme.device.s}) {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.device.lg}) {
    display: block;
  }
`;

export const AvatarContainerOnLargeScreen = styled.div`
  position: relative;
`;

export const LoginBtnOnLargeScreen = styled.a`
  cursor: pointer;
  font-size: 1.1rem;
  padding: 0.3rem 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.black};
  margin: 0 1rem;
  &:hover {
    opacity: 0.75;
    border: 1px solid ${({ theme }) => theme.colors.gray_500};
  }
`;

export const RegisterBtnOnLargeScreen = styled.a`
  cursor: pointer;
  font-size: 1.1rem;
  padding: 0.3rem 0.75rem;
  background: ${({ theme }) => theme.colors.blue_500};
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.blue_500};

  &:hover {
    opacity: 0.75;
  }
`;
