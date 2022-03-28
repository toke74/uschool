import Image from "next/image";
import styled from "styled-components";
import {
  MdOutlineDashboard,
  MdOutlineShoppingCart,
  MdFavoriteBorder,
  MdPowerSettingsNew,
  MdSettings,
  MdSchool,
  MdOutlineSchool,
  MdPayment,
} from "react-icons/md";

export const Container = styled.div`
  display: ${({ userMenu }) => (userMenu ? "block" : "none")};
  ::before {
    content: "";
    width: 1.65rem;
    height: 1.65rem;
    display: block;
    position: absolute;
    left: 0.31rem;
    top: 3.097rem;
    transform: rotate(45deg);
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
      0 8px 10px -6px rgb(0 0 0 / 0.1);
    z-index: 10;
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 4rem;
  left: -9.5rem;
  max-width: 20rem;
  width: 12rem;
  min-width: min-content;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
  z-index: 10;
`;

export const MenuList = styled.ul`
  list-style-type: none;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const MenuListItem = styled.li`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray_100};
  }
`;

export const MenuListLink = styled.a`
  margin-left: 1rem;
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.black};

  &:hover {
    color: ${({ theme }) => theme.colors.blue_600};
  }
`;

export const Divider = styled.div`
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray_100};
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

export const DashboardIcon = styled(MdOutlineDashboard)`
  font-size: 1.25rem;
  margin-right: 1.75rem;
  color: ${({ theme }) => theme.colors.slate_500};

  &:hover {
    color: ${({ theme }) => theme.colors.blue_600};
  }
`;
export const SchoolIcon = styled(MdSchool)`
  font-size: 1.25rem;
  margin-right: 1.75rem;
  color: ${({ theme }) => theme.colors.slate_500};

  &:hover {
    color: ${({ theme }) => theme.colors.blue_600};
  }
`;

export const ShoppingCartIcon = styled(MdOutlineShoppingCart)`
  font-size: 1.25rem;
  margin-right: 1.75rem;
  color: ${({ theme }) => theme.colors.slate_500};

  &:hover {
    color: ${({ theme }) => theme.colors.blue_600};
  }
`;

export const FavoriteBorderIcon = styled(MdFavoriteBorder)`
  font-size: 1.25rem;
  margin-right: 1.75rem;
  color: ${({ theme }) => theme.colors.slate_500};

  &:hover {
    color: ${({ theme }) => theme.colors.blue_600};
  }
`;

export const OutlineSchoolIcon = styled(MdOutlineSchool)`
  font-size: 1.25rem;
  margin-right: 1.75rem;
  color: ${({ theme }) => theme.colors.slate_500};

  &:hover {
    color: ${({ theme }) => theme.colors.blue_600};
  }
`;

export const SettingsIcon = styled(MdSettings)`
  font-size: 1.25rem;
  margin-right: 1.75rem;
  color: ${({ theme }) => theme.colors.slate_500};

  &:hover {
    color: ${({ theme }) => theme.colors.blue_600};
  }
`;

export const PaymentIcon = styled(MdPayment)`
  font-size: 1.25rem;
  margin-right: 1.75rem;
  color: ${({ theme }) => theme.colors.slate_500};

  &:hover {
    color: ${({ theme }) => theme.colors.blue_600};
  }
`;

export const PowerSettingsIcon = styled(MdPowerSettingsNew)`
  font-size: 1.25rem;
  margin-right: 1.75rem;
  color: ${({ theme }) => theme.colors.slate_500};

  &:hover {
    color: ${({ theme }) => theme.colors.blue_600};
  }
`;
