import { useParams } from "react-router-dom";
import Login from "../../shared/components/Login/Login";
import Registration from "../../shared/components/Registration/Registration";
import Logo from "../../shared/components/Logo/Logo";

import { GlobalStyles } from "../../shared/components/styles/GlobalStyles.styled";

import illustrationDesktop1x from "../../shared/images/illustration1xdesktop.png";
import illustrationDesktop2x from "../../shared/images/illustration2xdesktop.png";
import illustrationDesktop1xWebp from "../../shared/images/illustration1xdesktopWebp.webp";
import illustrationDesktop2xWebp from "../../shared/images/illustration2xdesktopWebp.webp";

import illustrationMobile1x from "../../shared/images/illustration1xmobile.png";
import illustrationMobile2x from "../../shared/images/illustration2xmobile.png";
import illustrationMobile1xWebp from "../../shared/images/illustration1xmobileWebp.webp";
import illustrationMobile2xWebp from "../../shared/images/illustration2xmobileWebp.webp";
import {
  LogoWrap,
  WelcomePicture,
  WrapperMain,
  Text,
  WelcomeImg,
  PictureWrap,
  TextRegister,
} from "./AuthPage.styled";

const AuthPage = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <GlobalStyles />
      <LogoWrap>
        <Logo />
      </LogoWrap>
      <WrapperMain>
        {id === "login" && <Login />}
        {id === "registration" && <Registration />}
        <PictureWrap>
          <WelcomePicture>
            <source
              srcSet={illustrationDesktop2xWebp}
              type="image/webp"
              media="(min-width: 1200px) and (min-resolution: 2dppx)"
            />
            <source
              srcSet={illustrationDesktop1xWebp}
              type="image/webp"
              media="(min-width: 1200px)"
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
              srcSet={illustrationDesktop2x}
              media="(min-width: 1200px) and (min-resolution: 2dppx)"
            />
            <source
              srcSet={illustrationDesktop1x}
              media="(min-width: 1200px)"
            />
            <source
              srcSet={illustrationMobile2x}
              media="(max-width: 767px) and (min-resolution: 2dppx)"
            />
            <source srcSet={illustrationMobile1x} media="(max-width: 767px)" />
            <WelcomeImg src={illustrationMobile1x} alt="User" />
          </WelcomePicture>
          {id === "registration" ? (
            <TextRegister>Word · Translation · Grammar · Progress</TextRegister>
          ) : (
            <Text>Word · Translation · Grammar · Progress</Text>
          )}
        </PictureWrap>
      </WrapperMain>
    </>
  );
};

export default AuthPage;
