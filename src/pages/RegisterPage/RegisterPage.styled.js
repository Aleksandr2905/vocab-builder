import styled from "styled-components";
import imgMob from "../../assets/image/mobile/mobile-main@1x.png";
import imgMob2x from "../../assets/image/mobile/mobile-main@2x.png";

export const Section = styled.section`
  max-width: 375px;
  margin: auto;
  height: 100vh;

  > :first-child {
    padding: 16px 0 0 16px;
  }
`;

export const Img = styled.div`
  margin: 12px auto 8px;
  width: 247px;
  height: 191px;
  background-image: url(${imgMob});
  background-size: 247px 191px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${imgMob2x});
  }
`;
