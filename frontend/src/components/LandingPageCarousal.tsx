"use client";
// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import WeatherInsuranceCarousalCard from "./CarousalCard";
import { Container } from "@mui/material";

// SwiperCore.use([Autoplay]);

export default function LandingPageCarousal() {
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
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        loop={true}
        // loopFillGroupWithBlank={true}
        autoplay={{ delay: 1000 }}
        navigation={true}
        modules={[Autoplay, A11y, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 150,
          },

          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
      >
        {questionsData.map((questionItem) => (
          <SwiperSlide key={questionItem.id}>
            <WeatherInsuranceCarousalCard
              question={questionItem.question}
              betValueNo={questionItem.betValueNo}
              betValueYes={questionItem.betValueYes}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
