import styled from "styled-components";
import { breakpoints } from "../../shared/components/styles/breakpoints";

const { mobile, tablet, desktop } = breakpoints;

export const WrapTraining = styled.div`
  padding: 10px;
  background: #f8f8f8;
  width: 100vw;
  height: 100vh;
  position: relative;
  @media screen and (min-width: ${tablet}) {
    padding: 20px 30px 0 30px;
  }
  @media screen and (min-width: ${desktop}) {
    padding: 66px 100px 0 100px;
  }
`;

export const WrapTrainingAppsent = styled.div`
  display: flex;
  flex-direction: column;
`;
export const WrapTrainingAppsentText = styled.div`
  max-width: 581px;
`;

export const Title = styled.h2`
  color: #121417;

  font-family: "Medium";
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 32px;
`;

export const TextTraining = styled.p`
  color: #121417;
  font-family: "Regular";
  font-size: 16px;
  line-height: 1.5;
`;

export const Picture = styled.picture`
  width: 144px;
  height: 166px;
  @media screen and (min-width: ${tablet}) {
    width: 205px;
    height: 230px;
  }
`;

export const WrapTrainingAppsentAll = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 75px 0 0 0;
  flex-direction: column-reverse;
  @media screen and (min-width: ${tablet}) {
    padding: 140px 0 0 0;
    gap: 32px;
  }
  @media screen and (min-width: ${desktop}) {
    flex-direction: row;
    padding: 193px 0 0 0;
  }
`;
