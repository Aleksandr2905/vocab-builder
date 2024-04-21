import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SelectStyled,
  TextFilter,
  SvgSearch,
  Label,
  KeyText,
  ValueText,
  StudyDiv,
  RightWrap,
  LeftWrap,
  WrapAll,
  WrapRightBtn,
  StyledRadio,
  StyledLabel,
  WrapRadioBtn,
  SearchButton,
} from "./Filtered.styled";
import icon from "../../images/symbol-defs.svg";
import sprite from "../../images/symbol-defs.svg";

import {
  fetchWords,
  wordsCategories,
  wordsOwn,
  wordsStatistics,
} from "../../../redux/words/operations";
import {
  Button,
  SvgArrow,
  TextTrain,
} from "../TableComponent/TableComponent.styled";
import { statisticsWords } from "../../../redux/words/wordsSelector";
import { useNavigate, useParams } from "react-router-dom";
import { Modal } from "../Modal/Modal";
import AddForm from "../Modal/AddWord/AddWord";
import { customStyles } from "./CustomStyles";

const Filtered = ({ currentPage, perPage, open }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.words.categories);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(open);

  const statistics = useSelector(statisticsWords);
  const { id } = useParams();
  const [selectedVerbType, setSelectedVerbType] = useState("");
  const [searchTermDebounce, setSearchTermDebounce] = useState("");

  useEffect(() => {
    if (id === "recommend") {
      dispatch(
        fetchWords({
          page: currentPage,
          category: selectedCategory,
          verb: selectedVerbType,
          search: searchTermDebounce,
        })
      );
    }
    if (id === "dictionary") {
      dispatch(
        wordsOwn({
          page: currentPage,
          category: selectedCategory,
          verb: selectedVerbType,
          search: searchTermDebounce,
        })
      );
    }
  }, [
    dispatch,
    id,
    currentPage,
    selectedCategory,
    selectedVerbType,
    searchTermDebounce,
  ]);

  useEffect(() => {
    dispatch(wordsStatistics());

    if (categories.length < 1) {
      dispatch(wordsCategories());
    }
  }, [dispatch]);

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
  const renderAdditionalOptions = () => {
    if (selectedCategory === "verb") {
      return (
        <>
          <WrapRadioBtn>
            <StyledLabel>
              <StyledRadio
                type="radio"
                value="false"
                checked={selectedVerbType === "false"}
                onChange={handleVerbTypeChange}
              />
              Regular
            </StyledLabel>
            <StyledLabel>
              <StyledRadio
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
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setAddOpen(false);
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setSearchTermDebounce(searchTerm);
    }
  };
  const handleSearch = () => {
    setSearchTermDebounce(searchTerm);
  };

  return (
    <>
      <WrapAll>
        <LeftWrap>
          <div>
            <Label>
              <TextFilter
                type="text"
                value={searchTerm}
                placeholder="Find the word"
                onChange={handleSearchTermChange}
                onKeyPress={handleKeyPress}
              />
              <SearchButton onClick={handleSearch}>
                <SvgSearch>
                  <use href={icon + "#icon-search"}></use>
                </SvgSearch>
              </SearchButton>
            </Label>
          </div>
          <div>
            <SelectStyled
              isSearchable={false}
              placeholder={"Categories"}
              options={categories.map((category) => ({
                value: category,
                label: category,
              }))}
              onChange={handleCategoryChange}
              styles={customStyles}
            />
          </div>

          {renderAdditionalOptions()}
        </LeftWrap>
        <RightWrap>
          <StudyDiv>
            <KeyText>To study:</KeyText>
            <ValueText>{statistics}</ValueText>
          </StudyDiv>
          <WrapRightBtn>
            {id === "dictionary" && (
              <Button onClick={() => openModal()}>
                <TextTrain>Add word</TextTrain>
                <SvgArrow>
                  <use href={sprite + "#icon-plus"}></use>
                </SvgArrow>
              </Button>
            )}
            {(isOpen || addOpen) && (
              <Modal onClose={closeModal} isOpen={isOpen}>
                <AddForm onClose={closeModal} />
              </Modal>
            )}
            <Button onClick={() => navigate("/training")}>
              <TextTrain>Train oneself</TextTrain>
              <SvgArrow>
                <use href={sprite + "#icon-linie"}></use>
              </SvgArrow>
            </Button>
          </WrapRightBtn>
        </RightWrap>
      </WrapAll>
    </>
  );
};

export default Filtered;
