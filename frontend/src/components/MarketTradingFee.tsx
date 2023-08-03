import { Box, Typography } from "@mui/material";
import React from "react";
import PercentIcon from "@mui/icons-material/Percent";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface MarketTradingFeeProps {
  questionId: number;
}

const MarketTradingFee: React.FC<MarketTradingFeeProps> = ({ questionId }) => {
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
          <PercentIcon />
        </Box>
        <Box>
          <Typography variant="subtitle1" fontWeight={600}>
            {question.tradingFee}
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default MarketTradingFee;
