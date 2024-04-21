import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { wordsTasks } from "../../redux/words/operations";
import { Header } from "../../shared/components/Header/Header";
import ProgressBar from "../../shared/components/ProgressBar/ProgressBar";
import TrainingRoom from "../../shared/components/TrainingRoom/TrainingRoom";
import {
  BtnAdd,
  BtnCancel,
  WrapBtn,
} from "../../shared/components/TrainingRoom/TrainingRoom.styled";
import {
  Picture,
  TextTraining,
  Title,
  WrapTraining,
  WrapTrainingAppsent,
  WrapTrainingAppsentAll,
  WrapTrainingAppsentText,
} from "./TrainingPage.styled";

import bloodReportDesktop1x from "../../shared/images/blood-report1xdesktop.png";
import bloodReportDesktop2x from "../../shared/images/blood-report2xdesktop.png";
import bloodReportDesktop1xWebp from "../../shared/images/blood-report1xdesktopWebp.webp";
import bloodReportDesktop2xWebp from "../../shared/images/blood-report2xdesktopWebp.webp";

import bloodReportTablet1x from "../../shared/images/blood-report1xtablet.png";
import bloodReportTablet2x from "../../shared/images/blood-report2xtablet.png";
import bloodReportTablet1xWebp from "../../shared/images/blood-report1xtabletWebp.webp";
import bloodReportTablet2xWebp from "../../shared/images/blood-report2xtabletWebp.webp";

import bloodReportMobile1x from "../../shared/images/blood-report1xmobile.png";
import bloodReportMobile2x from "../../shared/images/blood-report2xmobile.png";
import bloodReportMobile1xWebp from "../../shared/images/blood-report1xmobileWebp.webp";
import bloodReportMobile2xWebp from "../../shared/images/blood-report2xmobileWebp.webp";
import { useNavigate } from "react-router-dom";

const TrainingPage = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [disable, setDisable] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(wordsTasks())
      .then((response) => setTasks(response.payload.tasks))
      .catch((error) => console.error("Error fetching categories:", error));
  }, [dispatch]);

  const handleNextClick = (translation) => {
    const currentTask = tasks[currentTaskIndex];
    if (currentTask && currentTaskIndex < tasks.length - 1) {
      const userAnswer = {
        task: currentTask.task,
        userTranslation: translation,
      };
      setUserAnswers((prevUserAnswers) => [...prevUserAnswers, userAnswer]);
      setCurrentTaskIndex(currentTaskIndex + 1);
    } else {
      setDisable(true);
    }
  };

  return (
    <>
      <Header />
      <WrapTraining>
        <ProgressBar
          totalTasks={tasks.length}
          userAnswers={userAnswers.length}
        />
        {tasks.length > 0 ? (
          <TrainingRoom
            currentTask={tasks[currentTaskIndex]}
            onNextClick={handleNextClick}
            disable={disable}
            tasks={tasks}
            currentTaskIndex={currentTaskIndex}
          />
        ) : (
          <>
            <WrapTrainingAppsentAll>
              <WrapTrainingAppsent>
                <WrapTrainingAppsentText>
                  <Title>
                    You don't have a single word to learn right now.{" "}
                  </Title>
                  <TextTraining>
                    Please create or add a word to start the workout. We want to
                    improve your vocabulary and develop your knowledge, so
                    please share the words you are interested in adding to your
                    study.
                  </TextTraining>
                </WrapTrainingAppsentText>
                <WrapBtn>
                  <BtnAdd
                    type="submit"
                    onClick={() => navigate(`/home/dictionary?open=true`)}
                  >
                    Add word
                  </BtnAdd>
                  <BtnCancel type="submit" onClick={() => navigate(-1)}>
                    Cancel
                  </BtnCancel>
                </WrapBtn>
              </WrapTrainingAppsent>
              <Picture>
                <source
                  srcSet={bloodReportDesktop2xWebp}
                  type="image/webp"
                  media="(min-width: 1200px) and (min-resolution: 2dppx)"
                />
                <source
                  srcSet={bloodReportDesktop1xWebp}
                  type="image/webp"
                  media="(min-width: 1200px)"
                />
                <source
                  srcSet={bloodReportTablet2xWebp}
                  type="image/webp"
                  media="(max-width: 767px) and (min-resolution: 2dppx)"
                />
                <source
                  srcSet={bloodReportTablet1xWebp}
                  type="image/webp"
                  media="(max-width: 767px)"
                />
                <source
                  srcSet={bloodReportMobile2xWebp}
                  type="image/webp"
                  media="(max-width: 767px) and (min-resolution: 2dppx)"
                />
                <source
                  srcSet={bloodReportMobile1xWebp}
                  type="image/webp"
                  media="(max-width: 767px)"
                />
                <source
                  srcSet={bloodReportDesktop2x}
                  media="(min-width: 767px) and (min-resolution: 2dppx)"
                />
                <source
                  srcSet={bloodReportDesktop1x}
                  media="(min-width: 767px)"
                />
                <source
                  srcSet={bloodReportTablet2x}
                  media="(max-width: 767px) and (min-resolution: 2dppx)"
                />
                <source
                  srcSet={bloodReportTablet1x}
                  media="(max-width: 767px)"
                />
                <source
                  srcSet={bloodReportMobile2x}
                  media="(max-width: 767px) and (min-resolution: 2dppx)"
                />
                <source
                  srcSet={bloodReportMobile1x}
                  media="(max-width: 767px)"
                />
                <img src={bloodReportMobile1x} alt="User" />
              </Picture>
            </WrapTrainingAppsentAll>
          </>
        )}
      </WrapTraining>
    </>
  );
};

export default TrainingPage;
