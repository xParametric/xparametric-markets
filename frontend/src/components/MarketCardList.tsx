import { Container } from "@mui/material";
import MarketCard from "./MarketCard";

const MarketCardList = () => {
  const questionsData = [
    {
      id: 1,
      question:
        "Will the number of insurance claims related to weather events in 2023 be higher than in 2022?",
      betValueYes: 10,
      betValueNo: 20,
    },
    {
      id: 2,
      question:
        "Which region will experience the highest number of weather-related insurance claims in 2023?",
      betValueYes: 23,
      betValueNo: 20,
    },
    {
      id: 3,
      question:
        "Will there be a record-breaking hurricane during the 2023 Atlantic hurricane season that will lead to significant insurance payouts?",
      betValueYes: 54,
      betValueNo: 12,
    },
    {
      id: 4,
      question:
        "Will the 2023 winter season be the costliest for insurance companies due to weather-related incidents?",
      betValueYes: 81,
      betValueNo: 94,
    },
    {
      id: 5,
      question:
        "What will be the total amount of insurance losses caused by wildfires in 2023?",
      betValueYes: 17,
      betValueNo: 3,
    },
    {
      id: 6,
      question:
        "Will any major insurance company introduce a new weather-related insurance product or coverage option in 2023?",
      betValueYes: 14,
      betValueNo: 42,
    },
  ];
  return (
    <Container maxWidth="xl">
      {questionsData.map((questionItem) => (
        <div key={questionItem.id}>
          {" "}
          <MarketCard question={questionItem.question} />
        </div>
      ))}
    </Container>
  );
};

export default MarketCardList;
