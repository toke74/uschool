import { useState, useEffect, useRef } from "react";
import * as s from "./navbarStyle";
import Link from "next/link";
import { useAppState } from "../../hooks/useAppState";
import ProfileMenu from "../menus/ProfileMenu/ProfileMenu";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  const ref = useRef();
  const { state, dispatch } = useAppState();
  const { user } = state;

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (navbarOpen && ref.current && !ref.current.contains(e.target)) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [navbarOpen]);

  const userMenuHandler = () => {
    setUserMenu(!userMenu);
  };

  return (
    <s.Container ref={ref}>
      <s.Wrapper>
        {/* left Navbar */}
        <s.LeftNav>
          {navbarOpen ? (
            <s.CloseIcon onClick={() => setNavbarOpen(!navbarOpen)} />
          ) : (
            <s.MenuIcon onClick={() => setNavbarOpen(!navbarOpen)} />
          )}

          <Link href="/">
            <s.LogoLink onClick={() => setNavbarOpen(false)}>
              <s.LogoLetter>U</s.LogoLetter>
              School
            </s.LogoLink>
          </Link>

          {/* On Small Screen */}
          <s.OnSmallScreen>
            <s.SearchOnSmallScreen />
            {user ? (
              <s.AvatarContainerOnSmallScreen onClick={userMenuHandler}>
                <s.UserAvatar
                  src="https://randomuser.me/api/portraits/women/91.jpg"
                  alt=""
                  width={33}
                  height={33}
                />
                <ProfileMenu userMenu={userMenu} dispatch={dispatch} />
              </s.AvatarContainerOnSmallScreen>
            ) : (
              <Link href="/login">
                <s.LoginBtnOnSmallScreen onClick={() => setNavbarOpen(false)}>
                  Log in
                </s.LoginBtnOnSmallScreen>
              </Link>
            )}
          </s.OnSmallScreen>
        </s.LeftNav>

        {/* Middle Navbar */}
        <s.MiddleNav>
          <s.SearchIcon />
          <s.SearchInput type="search" placeholder="Search for anycourse" />
        </s.MiddleNav>

        {/* Right Navbar */}
        <s.RightNav navbarOpen={navbarOpen}>
          <s.RightUl>
            <s.RightLi>
              <Link href="/">
                <s.RightALink onClick={() => setNavbarOpen(false)}>
                  Category
                </s.RightALink>
              </Link>
            </s.RightLi>

            <s.RightLi>
              <Link href="/">
                <s.RightALink onClick={() => setNavbarOpen(false)}>
                  Teach on Uschool
                </s.RightALink>
              </Link>
            </s.RightLi>

            <s.RightLi>
              <Link href="/">
                <s.RightALink onClick={() => setNavbarOpen(false)}>
                  <s.ShoppingCartIcon />
                </s.RightALink>
              </Link>
            </s.RightLi>

            <s.RightLi>
              <Link href="/">
                <s.RightALink onClick={() => setNavbarOpen(false)}>
                  <s.FavoriteIcon />
                </s.RightALink>
              </Link>
            </s.RightLi>
          </s.RightUl>
          <s.UserAuthWrapper>
            {user ? (
              <s.AvatarContainerOnLargeScreen onClick={userMenuHandler}>
                <s.UserAvatar
                  src="https://randomuser.me/api/portraits/women/91.jpg"
                  alt=""
                  width={33}
                  height={33}
                />
                <ProfileMenu userMenu={userMenu} dispatch={dispatch} />
              </s.AvatarContainerOnLargeScreen>
            ) : (
              <>
                <Link href="/login">
                  <s.LoginBtnOnLargeScreen>Log in</s.LoginBtnOnLargeScreen>
                </Link>
                <Link href="/register">
                  <s.RegisterBtnOnLargeScreen>
                    Sign up
                  </s.RegisterBtnOnLargeScreen>
                </Link>
              </>
            )}
          </s.UserAuthWrapper>
        </s.RightNav>
      </s.Wrapper>
    </s.Container>
  );
}

export default Navbar;
