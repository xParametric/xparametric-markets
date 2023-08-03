import { Box, Typography } from "@mui/material";
import React from "react";
import WaterDropIcon from "@mui/icons-material/WaterDropOutlined";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface LiquidityProps {
  questionId: number;
}

const Liquidity: React.FC<LiquidityProps> = ({ questionId }) => {
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
          <WaterDropIcon />
        </Box>
        <Box>
          <Typography variant="subtitle1" fontWeight={600}>
            ${question.liquidity} k
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Liquidity;
