import { resultWords } from "../../../../redux/words/wordsSelector";

import { useSelector } from "react-redux";

import orangeBookDesktop1x from "../../../images/orange-book1xdesktop.png";
import orangeBookDesktop2x from "../../../images/orange-book2xdesktop.png";
import orangeBookDesktop1xWebp from "../../../images/orange-book1xdesktopWebp.webp";
import orangeBookDesktop2xWebp from "../../../images/orange-book2xdesktopWebp.webp";

import orangeBookTablet1x from "../../../images/orange-book1xtablet.png";
import orangeBookTablet2x from "../../../images/orange-book2xtablet.png";
import orangeBookTablet1xWebp from "../../../images/orange-book1xtabletWebp.webp";
import orangeBookTablet2xWebp from "../../../images/orange-book2xtabletWebp.webp";

import orangeBookMobile1x from "../../../images/orange-book1xmobile.png";
import orangeBookMobile2x from "../../../images/orange-book2xmobile.png";
import orangeBookMobile1xWebp from "../../../images/orange-book1xmobileWebp.webp";
import orangeBookMobile2xWebp from "../../../images/orange-book2xmobileWebp.webp";
import {
  AllWrap,
  Img,
  ListModal,
  ListWrap,
  PictureModal,
  TextModal,
  TitleModal,
} from "../EditModal/EditModal.styled";

const WordList = ({ onClose }) => {
  const listLearning = useSelector(resultWords);

  const doneWords = listLearning.filter((word) => word.isDone);
  const notDoneWords = listLearning.filter((word) => !word.isDone);

  return (
    <div>
      <TitleModal>Well done</TitleModal>
      <AllWrap>
        <ListWrap>
          <TextModal>Сorrect answers:</TextModal>
          <ListModal>
            {doneWords.map((word) => (
              <li key={word._id}>{word.en}</li>
            ))}
          </ListModal>
        </ListWrap>
        <ListWrap>
          <TextModal>Mistakes:</TextModal>
          <ListModal>
            {notDoneWords.map((word) => (
              <li key={word._id}>{word.en}</li>
            ))}
          </ListModal>
        </ListWrap>
      </AllWrap>
      <PictureModal>
        <source
          srcSet={orangeBookDesktop2xWebp}
          type="image/webp"
          media="(min-width: 1200px) and (min-resolution: 2dppx)"
        />
        <source
          srcSet={orangeBookDesktop1xWebp}
          type="image/webp"
          media="(min-width: 1200px)"
        />
        <source
          srcSet={orangeBookTablet2xWebp}
          type="image/webp"
          media="(max-width: 767px) and (min-resolution: 2dppx)"
        />
        <source
          srcSet={orangeBookTablet1xWebp}
          type="image/webp"
          media="(max-width: 767px)"
        />
        <source
          srcSet={orangeBookMobile2xWebp}
          type="image/webp"
          media="(max-width: 767px) and (min-resolution: 2dppx)"
        />
        <source
          srcSet={orangeBookMobile1xWebp}
          type="image/webp"
          media="(max-width: 767px)"
        />
        <source
          srcSet={orangeBookDesktop2x}
          media="(min-width: 767px) and (min-resolution: 2dppx)"
        />
        <source srcSet={orangeBookDesktop1x} media="(min-width: 767px)" />
        <source
          srcSet={orangeBookTablet2x}
          media="(max-width: 767px) and (min-resolution: 2dppx)"
        />
        <source srcSet={orangeBookTablet1x} media="(max-width: 767px)" />
        <source
          srcSet={orangeBookMobile2x}
          media="(max-width: 767px) and (min-resolution: 2dppx)"
        />
        <source srcSet={orangeBookMobile1x} media="(max-width: 767px)" />
        <Img src={orangeBookMobile1x} alt="User" />
      </PictureModal>
    </div>
  );
};

export default WordList;
