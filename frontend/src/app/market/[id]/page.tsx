"use client";
import moment from "moment";
import Head from "next/head";

import Image from "next/image";
import { useParams } from "next/navigation";

import React, { useCallback, useEffect, useState } from "react";
import Web3 from "web3";
import ChartContainer from "../../../components/Chart/ChartContainer";
// import Navbar from "../../../components/Navbar";
import { useData } from "@/context/DataContext";
// import Link from "next/link";
import {
  Paper,
  Box,
  Typography,
  Avatar,
  TextField,
  Button,
  Link,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)({
  padding: "16px",
  borderRadius: "8px",
  border: "1px solid #e0e0e0",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
});

const StyledBox = styled(Box)({
  width: "100%",
  padding: "8px",
  marginTop: "8px",
  cursor: "pointer",
  textAlign: "center",
  borderRadius: "4px",
});

const StyledTextField = styled(TextField)({
  width: "100%",
  margin: "8px 0",
});
const DescriptionBox = styled(Box)({
  width: "66%", // equivalent to w-2/3 in Tailwind
  flexDirection: "column",
});

const ResolutionSourceTypography = styled(Typography)({
  marginTop: "16px",
  marginBottom: "16px",
  paddingTop: "8px",
  paddingBottom: "8px",
  backgroundColor: "#f5f5f5", // equivalent to bg-gray-100 in Tailwind
  borderRadius: "16px",
  paddingLeft: "12px",
});

export interface MarketProps {
  id: string;
  title: string;
  imageHash: string;
  totalAmount: number;
  totalYes: number;
  totalNo: number;
  description: string;
  endTimestamp: number;
  resolverUrl: any;
}

const Details = () => {
  const { id } = useParams();

  const { polymarket, account, loadWeb3, loading, polyToken } = useData();
  const [market, setMarket] = useState<MarketProps>();
  const [selected, setSelected] = useState<string>("YES");
  const [dataLoading, setDataLoading] = useState(true);
  const [button, setButton] = useState<string>("Trade");

  const [input, setInput] = useState("");

  const getMarketData = useCallback(async () => {
    var data = await polymarket.methods.questions(id).call({ from: account });
    setMarket({
      id: data.id,
      title: data.question,
      imageHash: data.creatorImageHash,
      totalAmount: parseInt(data.totalAmount),
      totalYes: parseInt(data.totalYesAmount),
      totalNo: parseInt(data.totalNoAmount),
      description: data.description,
      endTimestamp: parseInt(data.endTimestamp),
      resolverUrl: data.resolverUrl,
    });
    setDataLoading(false);
  }, [account, id, polymarket]);

  const handleTrade = async () => {
    var bal = await polyToken.methods.balanceOf(account).call();
    setButton("Please wait");

    if (input && selected === "YES") {
      if (parseInt(input) < parseInt(Web3.utils.fromWei(bal, "ether"))) {
        await polyToken.methods
          .approve(polymarket._address, Web3.utils.toWei(input, "ether"))
          .send({ from: account });
        await polymarket.methods
          .addYesBet(id, Web3.utils.toWei(input, "ether"))
          .send({ from: account });
      }
    } else if (input && selected === "NO") {
      if (parseInt(input) < parseInt(Web3.utils.fromWei(bal, "ether"))) {
        await polyToken.methods
          .approve(polymarket._address, Web3.utils.toWei(input, "ether"))
          .send({ from: account });
        await polymarket.methods
          .addNoBet(id, Web3.utils.toWei(input, "ether"))
          .send({ from: account });
      }
    }
    await getMarketData();
    setButton("Trade");
  };

  useEffect(() => {
    loadWeb3().then(() => {
      if (!loading) getMarketData();
    });
  }, [loading]);

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <Head>
        <title>Polymarket</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar /> */}
      <main className="w-full flex flex-col sm:flex-row py-4 max-w-5xl">
        {dataLoading ? (
          <div className="flex flex-col justify-center items-center h-full w-full pt-10">
            <div className="text-center">
              <div className="text-3xl font-bold">Loading...</div>
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-col pt-1">
            <Paper
              style={{
                padding: "24px",
                display: "flex",
                alignItems: "start",
                border: "1px solid #e2e2e2",
              }}
            >
              <Box style={{ display: "flex", flexDirection: "row" }}>
                <Avatar
                  src={`https://ipfs.infura.io/ipfs/${market?.imageHash}`}
                  style={{ width: "55px", height: "55px", marginRight: "16px" }}
                  alt="Market"
                />
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    flex: "1 1 50%",
                  }}
                >
                  <Typography variant="caption" style={{ color: "gray" }}>
                    US currency affairs
                  </Typography>
                  <Typography variant="h6">{market?.title}</Typography>
                </Box>
              </Box>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: "12px",
                }}
              >
                <Paper
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    padding: "12px",
                    backgroundColor: "#f5f5f5",
                  }}
                >
                  <Typography variant="caption" style={{ color: "gray" }}>
                    Market End on
                  </Typography>
                  <Typography variant="body1">
                    {market?.endTimestamp
                      ? moment(
                          parseInt(market?.endTimestamp.toFixed(0))
                        ).format("MMMM D, YYYY")
                      : "N/A"}
                  </Typography>
                </Paper>
                <Paper
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    padding: "12px",
                    backgroundColor: "#f5f5f5",
                    marginLeft: "16px",
                  }}
                >
                  <Typography variant="caption" style={{ color: "gray" }}>
                    Total Volume
                  </Typography>
                  <Typography variant="body1">
                    {Web3.utils.fromWei(
                      market?.totalAmount.toString() ?? "0",
                      "ether"
                    ) ?? 0}{" "}
                    POLY
                  </Typography>
                </Paper>
              </Box>
            </Paper>
            <Box className="flex flex-col space-y-3">
              <Box sx={{ mt: 5, width: "100%" }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={8}>
                    <StyledPaper sx={{ width: "100%", height: 400 }}>
                      <ChartContainer questionId={market?.id ?? "0"} />
                    </StyledPaper>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <StyledPaper>
                      <Typography
                        variant="h6"
                        sx={{ width: "100%", textAlign: "center" }}
                      >
                        Buy
                      </Typography>
                      <hr style={{ width: "100%", margin: "16px 0" }} />
                      <Typography variant="subtitle1">Pick Outcome</Typography>

                      {/* YES Option */}
                      <StyledBox
                        sx={{
                          backgroundColor:
                            selected === "YES" ? "#4caf50" : "#f5f5f5",
                          color: selected === "YES" ? "#fff" : "inherit",
                        }}
                        onClick={() => setSelected("YES")}
                      >
                        <Typography variant="subtitle2">
                          YES{" "}
                          {market?.totalAmount
                            ? (
                                (market?.totalYes * 100) /
                                market?.totalAmount
                              ).toFixed(2)
                            : "0"}
                          %
                        </Typography>
                      </StyledBox>

                      {/* NO Option */}
                      <StyledBox
                        sx={{
                          backgroundColor:
                            selected === "NO" ? "#4caf50" : "#f5f5f5",
                          color: selected === "NO" ? "#fff" : "inherit",
                        }}
                        onClick={() => setSelected("NO")}
                      >
                        <Typography variant="subtitle2">
                          NO{" "}
                          {market?.totalAmount
                            ? (
                                (market?.totalNo * 100) /
                                market?.totalAmount
                              ).toFixed(2)
                            : "0"}
                          %
                        </Typography>
                      </StyledBox>

                      <Typography variant="body2" sx={{ mt: 2 }}>
                        How much?
                      </Typography>

                      {/* Input Field */}
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          border: "1px solid #e0e0e0",
                        }}
                      >
                        <StyledTextField
                          type="search"
                          name="q"
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          placeholder="0"
                          autoComplete="off"
                        />
                        <Typography variant="body2" sx={{ mx: 2 }}>
                          POLY |
                        </Typography>
                        <Link
                          component="button"
                          sx={{
                            fontSize: "0.875rem",
                            color: "#1976d2",
                            textDecoration: "underline",
                            cursor: "pointer",
                          }}
                        >
                          Max
                        </Link>
                      </Box>

                      <Button
                        variant="contained"
                        color="secondary"
                        sx={{ mt: 2, py: 2, width: "100%" }}
                        onClick={handleTrade}
                        disabled={button !== "Trade"}
                      >
                        {button}
                      </Button>
                    </StyledPaper>
                  </Grid>
                </Grid>
              </Box>
              <DescriptionBox>
                <Typography variant="subtitle1" sx={{ py: 3 }}>
                  Description
                </Typography>
                <Typography>{market?.description}</Typography>
                <ResolutionSourceTypography variant="body1">
                  Resolution Source :{" "}
                  <Link href={market?.resolverUrl} underline="hover">
                    {market?.resolverUrl}
                  </Link>
                </ResolutionSourceTypography>
              </DescriptionBox>
            </Box>
          </div>
        )}
      </main>
    </div>
  );
};

export default Details;
