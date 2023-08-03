import { Box, Typography } from "@mui/material";
import React from "react";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface MarketValueProps {
  questionId: number;
}

const MarketValue: React.FC<MarketValueProps> = ({ questionId }) => {
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
          <LeaderboardIcon />
        </Box>
        <Box>
          <Typography variant="subtitle1" fontWeight={600}>
            ${question.volume}.k
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default MarketValue;
