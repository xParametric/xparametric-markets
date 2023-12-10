import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import ClientLayout from "./Web3Provider";
import { FC, PropsWithChildren } from "react";
import theme from "@/styles/theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { ReduxProvider } from "@/redux/provider";
// const raleway = Raleway({
//   subsets: ["latin"],
// });

// import { DataProvider } from "../../contexts/DataContext";
// import "../styles/globals.css";

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <DataProvider>
//       <Component {...pageProps} />
//     </DataProvider>
//   );
// }
// export default MyApp;

export const metadata: Metadata = {
  title: "Parametrica",
  description:
    "Parametrica is a decentralized climate prediction market. It is a transparent, secure, and user-friendly platform where participants can speculate, transfer and invest in climate-related risk.",
};

const RootLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          {" "}
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ClientLayout>
              <Header />
              {children}
              <Footer />
            </ClientLayout>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
};

export default RootLayout;
