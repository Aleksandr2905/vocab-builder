import CircularProgress from "@mui/material/CircularProgress";
import "@mui/material/styles";
import { ProgressWrap, TextInCirc } from "./ProgressBar.styled";

const ProgressBar = ({ totalTasks, userAnswers }) => {
  const progress = Math.round((userAnswers / (totalTasks - 1)) * 100);

  return (
    <ProgressWrap>
      <TextInCirc>{progress}</TextInCirc>
      <CircularProgress
        variant="determinate"
        value={progress}
        thickness={5}
        sx={{
          width: "60px",
          height: "60px",
          color: "rgba(43, 214, 39, 1)",
          borderRadius: "50%",
          border: "5px solid rgba(212, 248, 211, 1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </ProgressWrap>
  );
};

export default ProgressBar;
