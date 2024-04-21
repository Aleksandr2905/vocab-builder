import * as s from "./Header.styled.js";
import { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
import { useAuth } from "../../hooks/useAuth.js";
import { signOut } from "../../../redux/auth/operations.js";
import { useDispatch } from "react-redux";
import { selectUserName } from "../../../redux/auth/authSelectors";
import { useSelector } from "react-redux";
import icon from "../../images/symbol-defs.svg";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import illustrationTablet1x from "../../images/illustration1xtablet.png";
import illustrationTablet2x from "../../images/illustration2xtablet.png";
import illustrationTablet1xWebp from "../../images/illustration1xtabletWebp.webp";
import illustrationTablet2xWebp from "../../images/illustration2xtabletWebp.webp";
import illustrationMobile1x from "../../images/illustrationBM1xmobile.png";
import illustrationMobile2x from "../../images/illustrationBM2xmobile.png";
import illustrationMobile1xWebp from "../../images/illustrationBM1xmobileWebp.webp";
import illustrationMobile2xWebp from "../../images/illustrationBM2xmobileWebp.webp";

export const Header = () => {
  const { isLoggedIn } = useAuth();
  const [loggedIn, setLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await dispatch(signOut());
      setLoggedIn(false);
      navigate("/login");
    } catch (error) {
      console.error("Failed to sign out:", error);
    }
  };

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setLoggedIn(isLoggedIn);
  }, [isLoggedIn, name]);

  return (
    <div>
      <s.WrapperHeader>
        <Logo />
        <s.NavWrapper>
          <Navigation />
        </s.NavWrapper>
        <s.ModalDiv>
          <s.WrapperRight>
            <s.NameText>{name}</s.NameText>
            <s.SvgWrapper>
              <s.SvgUser>
                <use href={icon + "#icon-user"}></use>
              </s.SvgUser>
            </s.SvgWrapper>
            <s.BtnLogOut onClick={handleLogout}>
              Log out
              <s.SvgLogOut>
                <use href={icon + "#icon-exit"}></use>
              </s.SvgLogOut>
            </s.BtnLogOut>
            {!isMenuOpen ? (
              <s.BtnBurger onClick={handleMenuToggle}>
                <s.SvgBurger>
                  <use href={icon + "#icon-nav"}></use>
                </s.SvgBurger>
              </s.BtnBurger>
            ) : null}
          </s.WrapperRight>
        </s.ModalDiv>
      </s.WrapperHeader>
      {isMenuOpen ? (
        <s.MenuHeader>
          <s.WrapperMenu>
            <s.NameTextBurger>{name}</s.NameTextBurger>
            <s.SvgWrapperBurger>
              <s.SvgUserBurger>
                <use href={icon + "#icon-user"}></use>
              </s.SvgUserBurger>
            </s.SvgWrapperBurger>
            <s.BtnBurgerClose onClick={handleMenuToggle}>
              <s.SvgBurgerClose>
                <use href={icon + "#icon-x"}></use>
              </s.SvgBurgerClose>
            </s.BtnBurgerClose>
          </s.WrapperMenu>
          <s.WrapBurgerLogOut>
            <s.BtnLogOutBurger onClick={handleLogout}>
              Log out
              <s.SvgLogOutBurger>
                <use href={icon + "#icon-exit"}></use>
              </s.SvgLogOutBurger>
            </s.BtnLogOutBurger>
          </s.WrapBurgerLogOut>
          <Navigation />
          <s.BurgerPicture>
            <source
              srcSet={illustrationTablet2xWebp}
              type="image/webp"
              media="(min-width: 768px) and (min-resolution: 2dppx)"
            />
            <source
              srcSet={illustrationTablet1xWebp}
              type="image/webp"
              media="(min-width: 768px)"
            />
            <source
              srcSet={illustrationMobile2xWebp}
              type="image/webp"
              media="(max-width: 767px) and (min-resolution: 2dppx)"
            />
            <source
              srcSet={illustrationMobile1xWebp}
              type="image/webp"
              media="(max-width: 767px)"
            />
            <source
              srcSet={illustrationTablet2x}
              media="(min-width: 768px) and (min-resolution: 2dppx)"
            />
            <source srcSet={illustrationTablet1x} media="(min-width: 768px)" />
            <source
              srcSet={illustrationMobile2x}
              media="(max-width: 767px) and (min-resolution: 2dppx)"
            />
            <source srcSet={illustrationMobile1x} media="(max-width: 767px)" />
            <img src={illustrationMobile1x} alt="User" />
          </s.BurgerPicture>
        </s.MenuHeader>
      ) : null}
    </div>
  );
};
