import PortfolioEarnings from "@/components/PortfolioEarnings";
import PorfolioTotalBalance from "@/components/PortfolioUI/PorfolioTotalBalance";
import PortfolioContainer from "@/components/PortfolioUI/PortfolioContainer";
import React from "react";

const portfolio = () => {
  return (
    <div>
      <PortfolioContainer />
      {/* <PortfolioEarnings /> */}
      <PorfolioTotalBalance />
    </div>
  );
};

export default portfolio;
