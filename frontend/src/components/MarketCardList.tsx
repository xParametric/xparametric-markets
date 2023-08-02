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
      imageUrl:
        "https://img.etimg.com/thumb/msid-45558039,width-1200,height-900,imgsize-88568,overlay-economictimes/photo.jpg",
    },
    {
      id: 2,
      question:
        "Which region will experience the highest number of weather-related insurance claims in 2023?",
      betValueYes: 23,
      betValueNo: 20,
      imageUrl:
        "https://www.hdfcergo.com/images/default-source/commercial-insurance/rainfall-index-insurance.jpg",
    },
    {
      id: 3,
      question:
        "Will there be a record-breaking hurricane during the 2023 Atlantic hurricane season that will lead to significant insurance payouts?",
      betValueYes: 54,
      betValueNo: 12,
      imageUrl:
        "https://images.foxweather.com/static.foxweather.com/www.foxweather.com/content/uploads/2022/04/668/376/Screen-Shot-2022-04-26-at-9.30.48-PM.png?ve=1&tl=1",
    },
    {
      id: 4,
      question:
        "Will the 2023 winter season be the costliest for insurance companies due to weather-related incidents?",
      betValueYes: 81,
      betValueNo: 94,
      imageUrl:
        "https://image.cnbcfm.com/api/v1/image/106984947-1638805192615-gettyimages-1355856268-2008-12-24_powerline_down_north-vancouver.jpeg?v=1638805250",
    },
    {
      id: 5,
      question:
        "What will be the total amount of insurance losses caused by wildfires in 2023?",
      betValueYes: 17,
      betValueNo: 3,
      imageUrl:
        "https://www.crcgroup.com/Portals/34/WebSitesCreative_PostIt/12958/f6932f5e-c367-4ff2-a84e-c82d50bd8eba.jpg",
    },
    {
      id: 6,
      question:
        "Will any major insurance company introduce a new weather-related insurance product or coverage option in 2023?",
      betValueYes: 14,
      betValueNo: 42,
      imageUrl:
        "https://www.spectrumweatherinsurance.com/wp-content/uploads/2018/03/umbrella-2904775_640.jpg",
    },
  ];
  return (
    <Container maxWidth="xl">
      {questionsData.map((questionItem) => (
        <div key={questionItem.id}>
          {" "}
          <MarketCard
            question={questionItem.question}
            imageUrl={questionItem.imageUrl}
          />
        </div>
      ))}
    </Container>
  );
};

export default MarketCardList;
