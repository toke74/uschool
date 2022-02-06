import { useState, useEffect, useRef } from "react";
import * as s from "./navbarStyle";
import Link from "next/link";

const authenticated = true;

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const ref = useRef();

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
            {authenticated ? (
              <s.AvatarContainerOnSmallScreen>
                <s.UserAvatar
                  src="https://randomuser.me/api/portraits/women/91.jpg"
                  alt=""
                  width={33}
                  height={33}
                />
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
            {authenticated ? (
              <s.AvatarContainerOnLargeScreen>
                <s.UserAvatar
                  src="https://randomuser.me/api/portraits/women/91.jpg"
                  alt=""
                  width={33}
                  height={33}
                />
              </s.AvatarContainerOnLargeScreen>
            ) : (
              <>
                <s.LoginBtnOnLargeScreen>Log in</s.LoginBtnOnLargeScreen>
                <s.RegisterBtnOnLargeScreen>Sign up</s.RegisterBtnOnLargeScreen>
              </>
            )}
          </s.UserAuthWrapper>
        </s.RightNav>
      </s.Wrapper>
    </s.Container>
  );
}

export default Navbar;
