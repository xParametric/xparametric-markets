import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface LiquidityProps {
  questionId: number;
}
function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const MarketQuestionBreadCrumbs: React.FC<LiquidityProps> = ({
  questionId,
}) => {
  const question = useSelector((state: RootState) => {
    const selectedQuestion = state.questions.questionsData.find(
      (q) => q.id === questionId
    );
    return selectedQuestion;
  });

  if (!question) {
    // Handle the case when the question is not found
    return null;
  }

  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        {/* <Link underline="hover" color="inherit" href="/">
          Weather
        </Link> */}
        <Link underline="hover" color="inherit" href="/">
          {question.category}
        </Link>
        <Typography color="text.primary">{question.subCategory}</Typography>
      </Breadcrumbs>
    </div>
  );
};

export default MarketQuestionBreadCrumbs;
