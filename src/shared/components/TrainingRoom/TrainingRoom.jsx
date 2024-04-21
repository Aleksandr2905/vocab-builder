import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { wordsAnswers } from "../../../redux/words/operations";
import sprite from "../../images/symbol-defs.svg";
import { Modal } from "../Modal/Modal";
import WordList from "../Modal/WordList/WordsList";
import {
  BtnAdd,
  BtnCancel,
  BtnNext,
  InputTranslate,
  LabelTranslate,
  SvgArrow,
  SvgMap,
  TextLang,
  WrapBtn,
  WrapInput,
  WrapLang,
  WrapTrainingRoom,
  WrapTranslator,
} from "./TrainingRoom.styled";

const TrainingRoom = ({
  currentTask,
  onNextClick,
  disable,
  tasks,
  currentTaskIndex,
}) => {
  const [uaTranslation, setUaTranslation] = useState("");
  const [enTranslation, setEnTranslation] = useState("");

  // const [tasks, setTasks] = useState([]);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const isUaTask = currentTask.task === "ua";
  const isEnTask = currentTask.task === "en";
  const dispatch = useDispatch();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // useEffect(() => {
  //   setTasks((prevTasks) => [...prevTasks, currentTask]);
  // }, [currentTask]);

  const handleTranslationChange = (e) => {
    if (isUaTask) {
      setUaTranslation(e.target.value);
    } else if (isEnTask) {
      setEnTranslation(e.target.value);
    }
  };

  const handleNextClick = () => {
    if (uaTranslation === "" && enTranslation === "") {
      return toast.info("Check your input");
    }
    onNextClick({ ua: uaTranslation, en: enTranslation });
    const updatedAnswers = isUaTask
      ? [
          ...answers,
          {
            _id: currentTask._id,
            ua: uaTranslation,
            en: currentTask.en,
            task: currentTask.task,
          },
        ]
      : isEnTask
      ? [
          ...answers,
          {
            _id: currentTask._id,
            ua: currentTask.ua,
            en: enTranslation,
            task: currentTask.task,
          },
        ]
      : answers;

    setAnswers(updatedAnswers);
    setUaTranslation("");
    setEnTranslation("");
  };
  useEffect(() => {
    console.log("use", answers);
  }, [answers]);

  const handleSaveClick = () => {
    if (answers.length === currentTaskIndex) {
      if (uaTranslation === "" && enTranslation === "") {
        return toast.info("Check your input");
      }
      const updatedAnswers = isUaTask
        ? dispatch(
            wordsAnswers([
              ...answers,
              {
                _id: currentTask._id,
                ua: uaTranslation,
                en: currentTask.en,
                task: currentTask.task,
              },
            ])
          )
        : isEnTask
        ? dispatch(
            wordsAnswers([
              ...answers,
              {
                _id: currentTask._id,
                ua: currentTask.ua,
                en: enTranslation,
                task: currentTask.task,
              },
            ])
          )
        : answers;
    } else {
      dispatch(wordsAnswers(answers));
    }
    setUaTranslation("");
    setEnTranslation("");
    openModal();
  };
  const handleCancelClick = () => {
    setAnswers([]);
    setUaTranslation("");
    setEnTranslation("");
    navigate("/home/dictionary");
  };

  return (
    <WrapTrainingRoom>
      <WrapTranslator>
        <WrapInput>
          <LabelTranslate>
            {isUaTask ? (
              <InputTranslate
                placeholder={"Введіть переклад"}
                type="text"
                value={uaTranslation}
                onChange={handleTranslationChange}
                disabled={false}
              />
            ) : (
              <InputTranslate
                placeholder={"Please translate"}
                type="text"
                value={currentTask.ua}
                disabled={true}
              />
            )}
            <WrapLang>
              <SvgMap>
                <use href={sprite + "#icon-ua"}></use>
              </SvgMap>
              <TextLang>Ukrainian</TextLang>
            </WrapLang>
            <BtnNext onClick={handleNextClick} disabled={disable}>
              Next
              <SvgArrow>
                <use href={sprite + "#icon-linie"}></use>
              </SvgArrow>
            </BtnNext>
          </LabelTranslate>
        </WrapInput>
        <WrapInput>
          <LabelTranslate>
            {isEnTask ? (
              <InputTranslate
                placeholder={"Please translate"}
                type="text"
                value={enTranslation}
                onChange={handleTranslationChange}
                disabled={false}
              />
            ) : (
              <InputTranslate
                placeholder={"Please translate"}
                type="text"
                value={currentTask.en}
                disabled={true}
              />
            )}
            <WrapLang>
              <SvgMap>
                <use href={sprite + "#icon-uk"}></use>
              </SvgMap>
              <TextLang>English</TextLang>
            </WrapLang>
          </LabelTranslate>
        </WrapInput>
      </WrapTranslator>
      <WrapBtn>
        <BtnAdd type="submit" onClick={() => handleSaveClick()}>
          Save
        </BtnAdd>
        {isOpen && (
          <Modal onClose={closeModal} isOpen={isOpen}>
            <WordList />
          </Modal>
        )}
        <BtnCancel type="submit" onClick={() => handleCancelClick()}>
          Cancel
        </BtnCancel>
      </WrapBtn>
    </WrapTrainingRoom>
  );
};

export default TrainingRoom;
