// import Plotly from "plotly.js-dist-min";
import React, { useEffect } from "react";
import Web3 from "web3";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";

import { loadWeb3 } from "@/redux/dataSlice";
interface Props {
  questionId: string;
}

interface ChartData {
  time: Date[];
  amount: number[];
}

const ChartContainer: React.FC<Props> = ({ questionId }) => {
  // Use useSelector to access state from the Redux store
  const dispatch = useDispatch<AppDispatch>();

  const { polymarket, account } = useSelector((state: RootState) => state.data);

  // If you need to dispatch any actions, use useDispatch hook
  // const dispatch = useDispatch();

  const fetchGraphData = async () => {
    var data = await polymarket.methods.getGraphData(questionId).call();
    var yesData: ChartData = {
      time: [],
      amount: [],
    };
    var noData: ChartData = {
      time: [],
      amount: [],
    };
    data["0"].forEach((item: any) => {
      var sum = yesData.amount.reduce((a, b) => a + b, 0);
      yesData.amount.push(
        sum + parseFloat(Web3.utils.fromWei(item[1], "ether"))
      );
      yesData.time.push(new Date(parseInt(item[2] + "000")));
    });
    data["1"].forEach((item: any) => {
      var sum = noData.amount.reduce((a, b) => a + b, 0);
      noData.amount.push(
        sum + parseFloat(Web3.utils.fromWei(item[1], "ether"))
      );
      noData.time.push(new Date(parseInt(item[2] + "000")));
    });

    var yes = {
      x: [...yesData.time],
      y: [...yesData.amount],
      mode: "lines+markers",
      name: "Yes",
    };

    var no = {
      x: [...noData.time],
      y: [...noData.amount],
      mode: "lines+markers",
      name: "No",
    };
    var chartData = [yes, no];

    var layout = {
      title: "YES / NO Graph",
    };

    // Plotly.newPlot("myDiv", chartData, layout, { displayModeBar: false });
  };

  useEffect(() => {
    fetchGraphData();

    dispatch(loadWeb3());

    // If you need to dispatch an action on component mount
    // dispatch(yourActionCreator());
  }, [dispatch, questionId]); // Add any dependencies needed for useEffect

  return (
    <>
      <div id="myDiv"></div>
    </>
  );
};

export default ChartContainer;
