import React from "react";
import dynamic from "next/dynamic";

const CarousalDynamicLoading = dynamic(
  () => import("@/components/LandingPageCarousal"),
  {
    ssr: false, // This will ensure that the component is not rendered on the server side
    loading: () => {
      return <p>Loading...</p>;
    },
  }
);
export default CarousalDynamicLoading;
