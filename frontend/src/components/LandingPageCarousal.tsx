"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { loadQuestions, initialQuestionsState } from "@/redux/questionSlice";

// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Container } from "@mui/material";
import CarousalCard from "./CarousalCard";

interface LandingPageCarousalProps {
  // Add the questionIds prop to the LandingPageCarousal component
  questionId: number[];
}

// SwiperCore.use([Autoplay]);
const LandingPageCarousal: React.FC<LandingPageCarousalProps> = ({
  questionId,
}) => {
  const dispatch = useDispatch();

  // Load questions data from the Redux store
  useEffect(() => {
    // Simulate fetching data from an API or backend
    const fetchData = async () => {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Dispatch the action to load the questions data into the store
      dispatch(loadQuestions(initialQuestionsState.questionsData));
    };

    fetchData();
  }, [dispatch]);

  const questionsData = useSelector(
    (state: RootState) => state.questions.questionsData
  );

  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        loop={true}
        // loopFillGroupWithBlank={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        // navigation={true}
        modules={[Autoplay, A11y, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
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
          <SwiperSlide
            key={questionItem.id}
            style={{ justifyContent: "center", display: "flex" }}
          >
            <CarousalCard
              questionId={questionItem.id}
              // betValueNo={question.betValueNo}
              // betValueYes={question.betValueYes}
              // imageUrl={question.imageUrl}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default LandingPageCarousal;
