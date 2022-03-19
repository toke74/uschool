import Link from "next/link";
import { ref } from 'react'
import axios from "axios";
import { useRouter } from "next/router";
import {
  Container,
  Divider,
  FavoriteBorderIcon,
  MenuList,
  MenuListItem,
  MenuListLink,
  OutlineSchoolIcon,
  PaymentIcon,
  PowerSettingsIcon,
  SchoolIcon,
  SettingsIcon,
  ShoppingCartIcon,
  UserAvatar,
  Wrapper,
} from "./profileMenuStyle";
import { LOGOUT } from "../../../appState/actions/userActions";
import { useToast } from "../../../hooks/useToast";

const ProfileMenu = ({ userMenu, dispatch }) => {
  const router = useRouter();
  const toast = useToast();

  const logout = async () => {
    dispatch({ type: LOGOUT });
    window.localStorage.removeItem("user");
    const { data } = await axios.get("/api/v1/auth/logout");
    toast("success", data.message);
    router.push("/login");
  };

  return (
    <Container userMenu={userMenu} ref={ref}>
      <Wrapper>
        <MenuList>
          {/* User avatar item */}
          <MenuListItem>
            <Link href="/">
              <MenuListLink>
                <UserAvatar
                  src="https://randomuser.me/api/portraits/women/91.jpg"
                  alt=""
                  width={33}
                  height={33}
                />
                <span style={{ marginLeft: "1rem" }}>Sarah Jack</span>
              </MenuListLink>
            </Link>
          </MenuListItem>

          <Divider />

          {/* Learning item */}
          <MenuListItem>
            <Link href="/">
              <MenuListLink>
                <SchoolIcon />
                <span>My Learning</span>
              </MenuListLink>
            </Link>
          </MenuListItem>

          {/* Cart item */}
          <MenuListItem>
            <Link href="/">
              <MenuListLink>
                <ShoppingCartIcon />
                <span>My Cart</span>
              </MenuListLink>
            </Link>
          </MenuListItem>

          {/* Wishlist item */}
          <MenuListItem>
            <Link href="/">
              <MenuListLink>
                <FavoriteBorderIcon />
                <span>Wishlist</span>
              </MenuListLink>
            </Link>
          </MenuListItem>

          {/* Teach on Uschool item */}
          <MenuListItem>
            <Link href="/">
              <MenuListLink>
                <OutlineSchoolIcon />
                <span> Teach on Uschool</span>
              </MenuListLink>
            </Link>
          </MenuListItem>

          <Divider />

          {/* Account Settings item */}
          <MenuListItem>
            <Link href="/">
              <MenuListLink>
                <SettingsIcon />
                <span>Account Settings</span>
              </MenuListLink>
            </Link>
          </MenuListItem>

          {/* Payment Methods item */}
          <MenuListItem>
            <Link href="/">
              <MenuListLink>
                <PaymentIcon />
                <span>Payment Methods</span>
              </MenuListLink>
            </Link>
          </MenuListItem>

          <Divider />

          {/* Log Out item */}
          <MenuListItem onClick={logout}>
            <Link href="/">
              <MenuListLink>
                <PowerSettingsIcon />
                <span>Log Out</span>
              </MenuListLink>
            </Link>
          </MenuListItem>
        </MenuList>
      </Wrapper>
    </Container>
  );
};

export default ProfileMenu;
