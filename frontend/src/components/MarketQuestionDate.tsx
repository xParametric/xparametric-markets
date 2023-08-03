import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface MarketQuestionDateProps {
  questionId: number;
}

const MarketQuestionDate: React.FC<MarketQuestionDateProps> = ({
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
    <div>
      <Box display={"flex"}>
        <Box>
          <CalendarMonthIcon />
        </Box>
        <Box>
          <Typography variant="subtitle1" fontWeight={600}>
            {question.expiryDate}
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default MarketQuestionDate;
