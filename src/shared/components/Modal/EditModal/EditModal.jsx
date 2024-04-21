import * as yup from "yup";
import { ErrorMessage, Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { wordsEdit } from "../../../../redux/words/operations";
import { SvgMap } from "../../TrainingRoom/TrainingRoom.styled";
import sprite from "../../../images/symbol-defs.svg";
import {
  FieldModal,
  ModalBtn,
  ModalBtnCancel,
  StyledErrorAuth,
  TextLangModal,
  WrapBtnModal,
  WrapFormalModal,
  WrapInputModal,
  WrapLangModal,
} from "./EditModal.styled";

const schema = yup.object({
  en: yup
    .string()
    .matches(/\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/, "Invalid English format"),

  ua: yup
    .string()
    .matches(/^(?![A-Za-z])[А-ЯІЄЇҐґа-яієїʼ\s]+$/u, "Invalid Ukrainian format"),
});

const EditWordForm = ({ id, onClose }) => {
  const dispatch = useDispatch();

  const initialValues = {
    en: id.en || "",
    ua: id.ua || "",
  };
  const onSubmit = (values, { resetForm }) => {
    dispatch(
      wordsEdit({
        wordsId: id._id,
        values: {
          en: values.en,
          ua: values.ua,
          category: id.category,
          isIrregular: id.isIrregular,
        },
      })
    );

    resetForm();
    onClose();
  };

  const onCancel = () => {
    onClose();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      <Form>
        <WrapFormalModal>
          <WrapInputModal>
            <label htmlFor="en">
              <FieldModal type="text" id="en" name="en" placeholder="English" />
              <ErrorMessage name="en">
                {(m) => <StyledErrorAuth>{m}</StyledErrorAuth>}
              </ErrorMessage>
            </label>
            <WrapLangModal>
              <SvgMap>
                <use href={sprite + "#icon-uk"}></use>
              </SvgMap>
              <TextLangModal>English</TextLangModal>
            </WrapLangModal>
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
          <WrapBtnModal>
            <ModalBtn type="submit">Save</ModalBtn>
            <ModalBtnCancel type="button" onClick={onCancel}>
              Cancel
            </ModalBtnCancel>
          </WrapBtnModal>
        </WrapFormalModal>
      </Form>
    </Formik>
  );
};

export default EditWordForm;
