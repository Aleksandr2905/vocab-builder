import { Header } from "../../shared/components/Header/Header";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchWords, wordsOwn } from "../../redux/words/operations";
import CircularProgress from "@mui/material/CircularProgress";
import "@mui/material/styles";
import {
  allWords,
  ownWords,
  perPageWords,
  totalPagesWords,
} from "../../redux/words/wordsSelector";
import TableComponent from "../../shared/components/TableComponent/TableComponent";
import {
  ButtonPagination,
  SvgStep,
  WrapPagination,
  WrapperDashboards,
} from "../../shared/components/TableComponent/TableComponent.styled";
import Filtered from "../../shared/components/Filtered/Filtered";
import { useLocation, useParams } from "react-router-dom";
import sprite from "../../shared/images/symbol-defs.svg";
import {
  Picture,
  TextTraining,
  Title,
  WrapTrainingAppsent,
  WrapTrainingAppsentAll,
  WrapTrainingAppsentText,
} from "../TrainingPage/TrainingPage.styled";

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

export const ScreenPage = () => {
  const dispatch = useDispatch();
  const recommend = useSelector(allWords);
  console.log(recommend);
  const dictionary = useSelector(ownWords);
  console.log("dictionary", dictionary);
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = useSelector(totalPagesWords);
  const location = useLocation();
  const { search } = location;
  const queryParams = new URLSearchParams(search);
  const openParam = queryParams.get("open");

  useEffect(() => {
    setCurrentPage(1);
  }, [id, totalPages]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleIncrement = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handleDecrement = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const renderPageButtons = () => {
    const visiblePages = [];
    const startPage = Math.max(1, currentPage - 1);
    const endPage = Math.min(currentPage + 1, totalPages);

    if (startPage > 1) {
      visiblePages.push({ value: 1, key: 1 });
    }

    if (startPage > 2) {
      visiblePages.push({ value: "...", key: "start-ellipsis" });
    }

    for (let i = startPage; i <= endPage; i++) {
      visiblePages.push({ value: i, key: i });
    }

    if (endPage < totalPages - 1) {
      visiblePages.push({ value: "...", key: "end-ellipsis" });
    }

    if (endPage < totalPages) {
      visiblePages.push({ value: totalPages, key: totalPages });
    }

    return visiblePages.map(({ value, key }) => (
      <ButtonPagination
        key={key}
        onClick={() => (value !== "..." ? handlePageChange(value) : null)}
        disabled={value === "..." || value === currentPage}
      >
        {value}
      </ButtonPagination>
    ));
  };

  const columnsRecommend = [
    { Header: "Word", accessor: "en" },
    { Header: "Translation", accessor: "ua" },
    { Header: "Category", accessor: "category" },
    { Header: "", accessor: "..." },
  ];
  const columnsDictionary = [
    { Header: "Word", accessor: "en" },
    { Header: "Translation", accessor: "ua" },
    { Header: "Category", accessor: "category" },
    {
      Header: "Progress",
      accessor: "progress",
      Cell: ({ row }) => {
        const progress = row.values.progress || 0;
        const [anchorEl, setAnchorEl] = React.useState(null);

        const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
        };

        return (
          <>
            <div
              onClick={handleClick}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                justifyContent: "space-evenly",
              }}
            >
              <p>{progress}%</p>
              <CircularProgress
                variant="determinate"
                value={progress}
                thickness={5}
                sx={{
                  width: "26px",
                  color: "rgba(43, 214, 39, 1)",
                  borderRadius: "50%",
                  border: "5px solid rgba(212, 248, 211, 1)",
                  display: "flex",
                }}
              />
            </div>
          </>
        );
      },
    },
    { Header: "", accessor: "..." },
  ];
  useEffect(() => {
    dispatch(fetchWords());
    dispatch(wordsOwn());
  }, [dispatch]);

  return (
    <>
      <Header />
      <WrapperDashboards>
        {id === "recommend" && (
          <>
            <Filtered currentPage={currentPage} />
            <TableComponent columns={columnsRecommend} data={recommend} />
          </>
        )}
        {id === "dictionary" && (
          <>
            <Filtered currentPage={currentPage} open={openParam} />
            <TableComponent columns={columnsDictionary} data={dictionary} />
          </>
        )}
        {totalPages > 0 ? (
          <WrapPagination>
            <ButtonPagination onClick={() => handlePageChange(1)}>
              <SvgStep>
                <use href={sprite + "#icon-first"}></use>
              </SvgStep>
            </ButtonPagination>
            <ButtonPagination onClick={handleDecrement}>
              <SvgStep>
                <use href={sprite + "#icon-prev"}></use>
              </SvgStep>
            </ButtonPagination>
            {renderPageButtons()}
            <ButtonPagination onClick={handleIncrement}>
              <SvgStep>
                <use href={sprite + "#icon-next"}></use>
              </SvgStep>
            </ButtonPagination>
            <ButtonPagination onClick={() => handlePageChange(totalPages)}>
              <SvgStep>
                <use href={sprite + "#icon-last"}></use>
              </SvgStep>
            </ButtonPagination>
          </WrapPagination>
        ) : (
          <WrapTrainingAppsentAll>
            <WrapTrainingAppsent>
              <WrapTrainingAppsentText>
                <Title>We don't have a single word to learn right now. </Title>
                <TextTraining>
                  Please create a word to start the workout. We want to improve
                  your vocabulary and develop your knowledge, so please share
                  the words you are interested in adding to your study.
                </TextTraining>
              </WrapTrainingAppsentText>
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
              <source srcSet={bloodReportTablet1x} media="(max-width: 767px)" />
              <source
                srcSet={bloodReportMobile2x}
                media="(max-width: 767px) and (min-resolution: 2dppx)"
              />
              <source srcSet={bloodReportMobile1x} media="(max-width: 767px)" />
              <img src={bloodReportMobile1x} alt="User" />
            </Picture>
          </WrapTrainingAppsentAll>
        )}
      </WrapperDashboards>
    </>
  );
};
