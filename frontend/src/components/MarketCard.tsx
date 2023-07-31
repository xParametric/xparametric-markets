"use client";
import * as React from "react";
import {
  Container,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import CardThumbnailChartYes from "./CardThumbnailChartYes";
import CardThumbnailChartNo from "./CardThumbnailChartNo";
import Liquidity from "./Liquidity";
import MarketValue from "./MarketValue";
import MarketTradingFee from "./MarketTradingFee";
import MarketQuestionDate from "./MarketQuestionDate";

import ShareMarket from "./ShareMarket";
import BookmarkMarket from "./BookmarkMarket";
import MarketVote from "./MarketVote";
import MarketQuestionBreadCrumbs from "./MarketQuestionBreadCrumbs";
interface MarketCardListProps {
  question: string;
}
const MarketCard: React.FC<MarketCardListProps> = ({ question }) => {
  return (
    <Container maxWidth={"xl"}>
      <Box
        sx={{
          border: 1,
          borderRadius: 1,
          boxShadow: 1,
          borderColor: "#8C8881",
        }}
      >
        <Card sx={{ display: "flex", width: "100%" }}>
          <Box sx={{ width: 100, height: 100, my: "auto", mx: 2 }}>
            <CardMedia
              component="img"
              sx={{
                width: "auto",
                height: "auto",
                maxWidth: "100%",
                maxHeight: "100%",
              }}
              image="https://dl.dropboxusercontent.com/s/zev7x0zcy0lu8x6/token.png"
              alt="Live from space album cover"
            />
          </Box>

          <Grid container>
            <Grid item xs={12} xl={7}>
              <CardContent>
                <Box>
                  <MarketQuestionBreadCrumbs />
                </Box>
                <Typography
                  component="div"
                  variant="h5"
                  id="question"
                  sx={{ py: 1 }}
                >
                  {question}
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={12} xl={5}>
              <Box display="flex" flexDirection={{ xs: "column", xl: "row" }}>
                <Box
                  display="flex"
                  sx={{
                    border: 1,
                    m: 2,
                    p: 2,
                    borderRadius: 1,
                    borderBottomColor: "#284E45",
                    width: "100%",
                  }}
                >
                  <Box width="100%" sx={{ mx: 1 }}>
                    <Box>
                      <Typography variant="body1">Yes</Typography>
                    </Box>
                    <Box display="flex">
                      <Typography variant="subtitle2">0.64USDT</Typography>
                      {/* <TrendingUpIcon /> */}
                    </Box>
                  </Box>
                  <Box sx={{ mx: 1 }}>
                    <CardThumbnailChartYes />
                  </Box>
                </Box>
                <Box
                  display="flex"
                  sx={{
                    border: 1,
                    m: 2,
                    p: 2,
                    borderRadius: 1,
                    borderBottomColor: "#9F3638",
                    width: "100%",
                  }}
                >
                  <Box width="100%" mx={1}>
                    <Box>
                      <Typography variant="body1">No</Typography>
                    </Box>
                    <Box display="flex">
                      <Typography variant="subtitle2">1.4USDT</Typography>
                      {/* <TrendingUpIcon /> */}
                    </Box>
                  </Box>
                  <Box mx={1}>
                    <CardThumbnailChartNo />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Card>
        <Grid
          container
          sx={{
            backgroundColor: "secondary.main",
            color: "primary.light",
          }}
        >
          <Grid item xs={12} xl={5}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "space-between", xl: "space-around" },
                // backgroundColor: "#234823",
                p: 1,
              }}
            >
              <MarketValue />
              <Liquidity />
              <MarketTradingFee />
              <MarketQuestionDate />
            </Box>
          </Grid>
          <Grid item xs={12} xl={4}></Grid>
          <Grid item xs={12} xl={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "space-between", xl: "space-around" },
                // backgroundColor: "#234823",
                p: 1,
              }}
            >
              <ShareMarket />
              <BookmarkMarket />
              <MarketVote />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default MarketCard;
