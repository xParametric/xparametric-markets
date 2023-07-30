"use client";

import { SiweMessage } from "siwe";
import { APP_NAME } from "@/lib/consts";
import { FC, PropsWithChildren } from "react";
import { WagmiConfig, createConfig } from "wagmi";
import UserModel from "@/app/api/models/userModel";
import { v4 as uuid } from "uuid";
import dbConnect from "@/config/dbConfig";
import {
  ConnectKitProvider,
  SIWEConfig,
  SIWEProvider,
  getDefaultConfig,
} from "connectkit";
const unique_id = uuid();
const config = createConfig(
  getDefaultConfig({
    appName: APP_NAME,
    infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
  })
);

const siweConfig = {
  getNonce: async () => {
    const res = await fetch(`/api/siwe`, { method: "PUT" });
    if (!res.ok) throw new Error("Failed to fetch SIWE nonce");

    return res.text();
  },
  createMessage: ({ nonce, address, chainId }) => {
    return new SiweMessage({
      nonce,
      chainId,
      address,
      version: "1",
      uri: window.location.origin,
      domain: window.location.host,
      statement: "Sign In With Ethereum to prove you control this wallet.",
    }).prepareMessage();
  },
  verifyMessage: ({ message, signature }) => {
    return fetch(`/api/siwe`, {
      method: "POST",
      body: JSON.stringify({ message, signature }),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.ok);
  },

  getSession: async () => {
    const res = await fetch(`/api/siwe`);
    if (!res.ok) throw new Error("Failed to fetch SIWE session");

    const { address, chainId } = await res.json();

    // if (address && chainId) {
    //   try {
    //     await dbConnect();
    //     const user = await UserModel.findOne({ walletAddress: address });

    //     if (!user) {
    //       const createUser = await UserModel.create({
    //         walletAddress: address,
    //         chainId,

    //         //,unique_id: unique_id
    //       });
    //       if (!createUser) {
    //         console.log("Error creating user in MongoDB");
    //       } else {
    //         // return res.status.send("Success");
    //       }
    //     } else {
    //       // Update the chainId if the user already exists
    //       user.chainId = chainId;
    //       await user.save();
    //     }
    //   } catch (error) {
    //     console.error("Error saving user data to MongoDB:", error);
    //   }
    // }

    // localStorage.setItem(`address-${chainId}`, address || "");
    // localStorage.setItem(`chainId`, chainId || "");

    return address && chainId ? { address, chainId } : null;
  },

  signOut: () => fetch(`/api/siwe`, { method: "DELETE" }).then((res) => res.ok),
} satisfies SIWEConfig;

const Web3Provider: FC<PropsWithChildren<{}>> = ({ children }) => (
  <WagmiConfig config={config}>
    <SIWEProvider {...siweConfig}>
      <ConnectKitProvider>{children}</ConnectKitProvider>
    </SIWEProvider>
  </WagmiConfig>
);

export default Web3Provider;
