import { Container, Grid, Box, Typography, Button } from "@mui/material";

import TotalEarnings from "./TotalEarnings";
import OpenPositions from "./OpenPostions";
import LiquidityEarnings from "./LiquidityEarnings";
import LiquidityProvided from "./LiquidityProvided";
import PorfolioTotalBalance from "./PorfolioTotalBalance";
import React, { useCallback, useEffect, useState } from "react";
import Web3 from "web3";

import { PortfolioMarketCard } from "../PortfolioMarketCard";

import styles from "../styles/Home.module.css";
import Head from "next/head";
import { loadWeb3 } from "@/redux/dataSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

export interface MarketProps {
  id: string;
  title?: string;
  imageHash?: string;
  totalAmount?: string;
  totalYes?: string;
  totalNo?: string;
  userYes?: string;
  hasResolved?: boolean;
  userNo?: string;
  timestamp?: string;
  endTimestamp?: string;
}

export interface QuestionsProps {
  id: string;
  title?: string;
  imageHash?: string;
  totalAmount?: string;
  totalYes?: string;
  totalNo?: string;
  hasResolved?: boolean;
  endTimestamp?: string;
}
const PortfolioContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { polymarket, account, loading } = useSelector(
    (state: RootState) => state.data
  );
  const [markets, setMarkets] = useState<MarketProps[]>([]);
  const [portfolioValue, setPortfolioValue] = useState<number>(0);
  const [allQuestions, setAllQuestions] = useState<QuestionsProps[]>([]);
  const [openPositions, setOpenPositions] = useState<number>(0);

  const getMarkets = useCallback(async () => {
    var totalQuestions = await polymarket.methods
      .totalQuestions()
      .call({ from: account });
    for (var i = 0; i < totalQuestions; i++) {
      var questions = await polymarket.methods
        .questions(i)
        .call({ from: account });
      allQuestions.push({
        id: questions.id,
        title: questions.question,
        imageHash: questions.creatorImageHash,
        totalAmount: questions.totalAmount,
        totalYes: questions.totalYesAmount,
        totalNo: questions.totalNoAmount,
        hasResolved: questions.eventCompleted,
        endTimestamp: questions.endTimestamp,
      });
    }

    var dataArray: MarketProps[] = [];
    var totalPortValue = 0;
    for (var i = 0; i < totalQuestions; i++) {
      var data = await polymarket.methods
        .getGraphData(i)
        .call({ from: account });
      data["0"].forEach((item: any) => {
        if (item[0] == account) {
          dataArray.push({
            id: i.toString(),
            userYes: item[1].toString(),
            timestamp: item[2].toString(),
          });
          totalPortValue += parseInt(item[1]);
        }
      });
      data["1"].forEach((item: any) => {
        if (item[0] == account) {
          dataArray.push({
            id: i.toString(),
            userNo: item[1].toString(),
            timestamp: item[2].toString(),
          });
          totalPortValue += parseInt(item[1]);
        }
      });
    }
    setPortfolioValue(totalPortValue);
    for (var i = 0; i < dataArray.length; i++) {
      var question = allQuestions.find((item) => item.id == dataArray[i].id);
      dataArray[i].title = question!.title;
      dataArray[i].imageHash = question!.imageHash;
      dataArray[i].totalAmount = question!.totalAmount;
      dataArray[i].totalYes = question!.totalYes;
      dataArray[i].totalNo = question!.totalNo!;
      dataArray[i].hasResolved = question!.hasResolved;
      dataArray[i].endTimestamp = question!.endTimestamp;
    }
    setMarkets(dataArray);
  }, [account, polymarket]);

  useEffect(() => {
    dispatch(loadWeb3()).then(() => {
      if (!loading) {
        getMarkets();
      }
    });
  }, [dispatch, loading, getMarkets]);

  return (
    <Container maxWidth="xl">
      <Grid container justifyContent={"space-around"}>
        <Grid item>
          {" "}
          <TotalEarnings />
        </Grid>
        <Grid item>
          {" "}
          <OpenPositions />
        </Grid>
        <Grid item>
          {" "}
          <LiquidityProvided />
        </Grid>
        <Grid item>
          {" "}
          <LiquidityEarnings />
        </Grid>
        {/* <Box
          boxShadow={1}
          borderRadius={3}
          width={"100%"}
          height={100}
          padding={2}
          my={2}
          sx={{
            backgroundImage:
              " linear-gradient(to right top, #1752f0, #5351ec, #7151e8, #8851e4, #9b51df)",
          }}
        >
          <Grid container>
            <Grid >
              <Typography>Portfolio Value</Typography>
            </Grid>
            <Grid xl={5}>
              <Typography>USD Value</Typography>
            </Grid>
            <Grid >
              <Box display={"flex"}>
                <Button variant="contained">Deposit</Button>
                <Button variant="outlined">Withdraw</Button>
              </Box>
            </Grid>
          </Grid>
        </Box> */}
      </Grid>
      <Grid container px={1}>
        {" "}
        <PorfolioTotalBalance />
      </Grid>
      <Grid container>
        <div className={styles.container}>
          <Head>
            <title>Polymarket</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className="w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap py-4 flex-grow max-w-5xl">
            <div className="w-full flex flex-col pt-1">
              <div className="p-10 bg-blue-700 rounded-lg flex flex-row justify-evenly">
                <div className="flex flex-col items-center">
                  <h1 className="text-white opacity-50 text-lg">
                    Portfolio Value
                  </h1>
                  <h1 className="text-white text-4xl font-bold">
                    {Web3.utils.fromWei(portfolioValue.toString())} POLY
                  </h1>
                </div>
              </div>
              <span className="font-bold my-3 text-lg">
                Your Market Positions
              </span>
              {markets.map((market) => (
                <PortfolioMarketCard
                  id={market.id}
                  title={market.title!}
                  imageHash={market.imageHash!}
                  totalAmount={market.totalAmount!}
                  totalYes={market.totalYes!}
                  totalNo={market.totalNo!}
                  userYes={market.userYes!}
                  userNo={market.userNo!}
                  key={market.id!}
                  hasResolved={market.hasResolved!}
                  timestamp={market.timestamp!}
                  endTimestamp={market.endTimestamp!}
                />
              ))}
            </div>
          </main>
        </div>
      </Grid>
    </Container>
  );
};

export default PortfolioContainer;
