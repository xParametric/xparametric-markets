import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import ClientLayout from "./Web3Provider";
import { FC, PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Parametrica",
  description:
    "Parametrica is a decentralized climate prediction market. It is a transparent, secure, and user-friendly platform where participants can speculate, transfer and invest in climate-related risk.",
};

const RootLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
};

export default RootLayout;
