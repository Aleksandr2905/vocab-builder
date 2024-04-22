import { useState } from "react";
import * as yup from "yup";
import { ErrorMessage, Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { wordsCreate } from "../../../../redux/words/operations";
import { SvgMap } from "../../TrainingRoom/TrainingRoom.styled";
import sprite from "../../../images/symbol-defs.svg";
import { SelectStyled } from "../../Filtered/Filtered.styled";
import { useSelector } from "react-redux";
import {
  FieldModal,
  ModalBtn,
  ModalBtnCancel,
  StyledErrorAuth,
  StyledLabel,
  StyledRadio,
  TextLangModal,
  TextModal,
  TitleModal,
  WrapBtnModal,
  WrapFormalModal,
  WrapInputModal,
  WrapLangModal,
  WrapRadioBtn,
} from "../EditModal/EditModal.styled";

const schema = yup.object({
  en: yup
    .string()
    .required("Field required")
    .matches(/\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/, "Invalid English format"),

  ua: yup
    .string()
    .required("Field required")
    .matches(/^(?![A-Za-z])[А-ЯІЄЇҐґа-яієїʼ\s]+$/u, "Invalid Ukrainian format"),
});

const initialValues = {
  en: "",
  ua: "",
  category: "",
  isIrregular: "",
};

const AddForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.words.categories);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedVerbType, setSelectedVerbType] = useState("");

  const onSubmit = (values, { resetForm }) => {
    dispatch(
      wordsCreate({
        en: values.en,
        ua: values.ua,
        category: selectedCategory,
        ...(selectedCategory === "verb" && { isIrregular: selectedVerbType }),
      })
    );

    resetForm();
    onClose();
  };
  const handleVerbTypeChange = (e) => {
    const verbType = e.target.value;
    setSelectedVerbType(verbType);
  };
  const handleCategoryChange = (e) => {
    const category = e.value;
    if (category === "all") {
      setSelectedCategory("");
      setSelectedVerbType("");
    } else {
      setSelectedCategory(category);
      setSelectedVerbType("");
    }
  };

  const onCancel = () => {
    onClose();
  };

  const customStyles = {
    option: (base, { isFocused, isSelected }) => ({
      ...base,
      border: "none",
      outline: "none",
      boxShadow: "none",
      padding: "4px 14px",
      borderRadius: "14px",
      margin: "0px",
      cursor: "pointer",
      fontFamily: "Medium",
      background: "transparent",
      color: isSelected ? "#121417" : "rgba(18, 20, 23, 0.3)",
      ":hover": {
        color: "rgba(18, 20, 23, 1)",
      },
      ":active": {
        color: "rgba(18, 20, 23, 1)",
      },
      ":focus": {
        color: "rgba(18, 20, 23, 1)",
      },
    }),
    indicatorSeparator: (defaultStyles) => ({
      ...defaultStyles,
      display: "none",
      background: "transparent",
    }),
    menuList: (base) => ({
      ...base,
      background: "FFF",
    }),
    menu: (defaultStyles) => ({
      ...defaultStyles,

      cursor: "pointer",
      borderRadius: "14px",
      fontFamily: "Medium",
      padding: "0px",
      background: "FFF",
      width: "189px",
      minHeight: "100%",
      justifyСontent: "center",
      alignItems: "center",
      border: "1px solid rgba(252, 252, 252, 0.30)",

      color: "rgba(25, 26, 21, 0.30)",
    }),
    dropdownIndicator: (defaultStyles) => ({
      ...defaultStyles,
      cursor: "pointer",
      color: "#FCFCFC",
      padding: "0px",
      margin: "0px",

      background: "transparent",
    }),

    singleValue: (defaultStyles) => ({
      ...defaultStyles,
      color: "#FCFCFC",

      fontFamily: "Medium",
      cursor: "pointer",
      borderRadius: "14px",
      background: "transparent",
      ":active": {
        color: "rgba(18, 20, 23, 1)",
      },
    }),
    valueContainer: (defaultStyles) => ({
      ...defaultStyles,
      background: "transparent",
      color: "rgba(18, 20, 23, 1)",

      ":hover": {
        color: "rgba(18, 20, 23, 1)",
      },
    }),
    control: (defaultStyles) => ({
      ...defaultStyles,
      cursor: "pointer",
      background: "transparent",
      borderRadius: "20px",
      boxShadow: "none",
      color: "#FCFCFC",
      fontFamily: "Medium",
      width: "100%",
      maxWidth: "375px",
      padding: "14px 14px",
      border: "1px solid rgba(252, 252, 252, 0.30)",

      ":active": {
        color: "rgba(18, 20, 23, 1)",
        border: "1px solid rgba(252, 252, 252, 1)",
      },
      ":focus": {
        border: "1px solid rgba(252, 252, 252, 1)",
      },
      ":hover": {
        background: "transparent",
        border: "1px solid rgba(252, 252, 252, 1)",
      },
      "@media screen and (min-width: 768px)": {
        width: "auto",
      },
    }),
    placeholder: (base) => ({
      ...base,
      color: "#FCFCFC",
    }),
  };
  const renderAdditionalOptions = () => {
    if (selectedCategory === "verb") {
      return (
        <>
          <WrapRadioBtn>
            <StyledLabel>
              <StyledRadio
                name="Regular"
                type="radio"
                value="false"
                checked={selectedVerbType === "false"}
                onChange={handleVerbTypeChange}
              />
              Regular
            </StyledLabel>
            <StyledLabel>
              <StyledRadio
                name="Irregular"
                type="radio"
                value="true"
                checked={selectedVerbType === "true"}
                onChange={handleVerbTypeChange}
              />
              Irregular
            </StyledLabel>
          </WrapRadioBtn>
        </>
      );
    }
  };

  return (
    <>
      <TitleModal>Add word</TitleModal>
      <TextModal>
        Adding a new word to the dictionary is an important step in enriching
        the language base and expanding the vocabulary.
      </TextModal>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        <Form>
          <div>
            <SelectStyled
              isSearchable={false}
              placeholder={"Categories"}
              name="category"
              options={categories.map((category) => ({
                value: category,
                label: category,
              }))}
              styles={customStyles}
              onChange={handleCategoryChange}
            />
            {renderAdditionalOptions()}
            <WrapFormalModal>
              <WrapInputModal>
                <label htmlFor="en">
                  <FieldModal
                    type="text"
                    id="en"
                    name="en"
                    placeholder="English"
                  />
                </label>
                <WrapLangModal>
                  <SvgMap>
                    <use href={sprite + "#icon-uk"}></use>
                  </SvgMap>
                  <TextLangModal>English</TextLangModal>
                </WrapLangModal>

                <ErrorMessage name="en">
                  {(m) => <StyledErrorAuth>{m}</StyledErrorAuth>}
                </ErrorMessage>
              </WrapInputModal>
              <WrapInputModal>
                <label htmlFor="ua">
                  <FieldModal
                    type="text"
                    id="ua"
                    name="ua"
                    placeholder="Ukrainian"
                  />
                  <ErrorMessage name="ua">
                    {(m) => <StyledErrorAuth>{m}</StyledErrorAuth>}
                  </ErrorMessage>
                </label>
                <WrapLangModal>
                  <SvgMap>
                    <use href={sprite + "#icon-ua"}></use>
                  </SvgMap>
                  <TextLangModal>Ukrainian</TextLangModal>
                </WrapLangModal>
              </WrapInputModal>
            </WrapFormalModal>
            <WrapBtnModal>
              <ModalBtn type="submit">Save</ModalBtn>
              <ModalBtnCancel type="button" onClick={onCancel}>
                Cancel
              </ModalBtnCancel>
            </WrapBtnModal>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default AddForm;
