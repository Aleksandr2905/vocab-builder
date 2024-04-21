import styled from "styled-components";
import { Field } from "formik";
import { breakpoints } from "../../styles/breakpoints";

const { mobile, tablet, desktop } = breakpoints;

export const TitleModal = styled.h1`
  color: #fcfcfc;
  font-family: "Bold";
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -0.8px;
  margin-bottom: 20px;
`;

export const TextModal = styled.p`
  color: rgba(252, 252, 252, 0.8);

  font-family: "Regular";
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 24px;
`;

export const FieldModal = styled(Field)`
  display: flex;
  padding: 16px 18px;
  justify-content: center;
  align-items: center;
  gap: 18px;
  border-radius: 15px;
  border: 1px solid rgba(252, 252, 252, 0.3);
  color: #fcfcfc;
  background: transparent;
  outline: none;

  font-family: "Regular";
  font-size: 16px;
  line-height: 1.5;

  &::placeholder {
    color: #fcfcfc;
    font-family: "Regular";
    font-size: 16px;
    line-height: 1.5;
  }

  &:hover,
  &:focus {
    border: 1px solid rgba(252, 252, 252, 1);
  }
`;

export const WrapLangModal = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const TextLangModal = styled.p`
  color: #fcfcfc;

  font-family: "Medium";
  font-size: 16px;
  line-height: 1.5;
`;

export const WrapInputModal = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 16px;
  position: relative;
  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
    align-items: center;
    gap: 32px;
  }
`;

export const StyledErrorAuth = styled.div`
  position: absolute;
  top: 58px;
  left: 5px;
  font-size: 12px;
  font-weight: 400;
  color: #fcfcfc;
  transition: all 250ms linear;
`;

export const WrapFormalModal = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 18px;
  margin-bottom: 32px;
  @media screen and (min-width: ${tablet}) {
    margin-top: 70px;
  }
`;

export const ModalBtn = styled.button`
  display: flex;
  padding: 14px 100px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: #fcfcfc;
  border: none;
  color: #121417;
  font-family: "SemiBold";
  word-break: normal;
  font-size: 18px;
  line-height: 1.55;
  &:hover,
  &:focus {
    opacity: 0.4;
    transition: all 250ms linear;
  }
`;

export const ModalBtnCancel = styled.button`
  border-radius: 30px;
  display: flex;
  padding: 14px 90px;
  justify-content: center;
  align-items: center;
  word-break: normal;
  background: transparent;
  border: 1px solid rgba(252, 252, 252, 0.4);
  color: #fcfcfc;
  font-family: "SemiBold";
  font-size: 18px;
  line-height: 1.55;
  &:hover,
  &:focus {
    opacity: 0.4;
    transition: all 250ms linear;
  }
`;

export const WrapBtnModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  @media screen and (min-width: ${tablet}) {
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
`;

export const StyledRadio = styled.input`
  appearance: none;
  margin: 0;
  width: 18px;
  height: 18px;
  border: 2px solid rgba(252, 252, 252, 0.2);
  border-radius: 50%;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 11px;
    height: 11px;
    margin: 2px;
  }
  &:checked::after {
    background-color: rgba(252, 252, 252, 1);
  }
  &:hover::after {
    background-color: rgba(252, 252, 252, 1);
  }
  &:focus {
    border: 2px solid rgba(252, 252, 252, 1);
    outline: none;
  }
`;
export const StyledLabel = styled.label`
  color: #fcfcfc;
  display: flex;
  font-family: "Regular";
  font-size: 14px;
  line-height: normal;
  cursor: pointer;

  gap: 8px;
  /* &::after {
    margin-left: 8px;
    width: 12px;
    height: 15px;
    display: inline-block;
    content: " ";
    -webkit-mask: url("/lock.svg") no-repeat 50% 50%;
    -webkit-mask-size: cover;
    background-color: yellowgreen;
  } */
`;
export const WrapRadioBtn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-top: 8px;
`;

export const PictureModal = styled.picture`
  width: 152px;
  height: 121px;
`;

export const Img = styled.img`
  width: 152px;
  height: 121px;
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const ListWrap = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;
export const AllWrap = styled.div`
  display: flex;
  gap: 32px;
  flex-direction: row;
`;

export const ListModal = styled.ul`
  display: flex;
  gap: 8px;
  flex-direction: column;
  color: #fcfcfc;

  font-family: "Medium";
  font-size: 20px;

  line-height: normal;
`;
