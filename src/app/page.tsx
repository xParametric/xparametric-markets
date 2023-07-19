"use client";
import styles from "./page.module.css";
import Image from "next/image";
import { ConnectKitButton } from "connectkit";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <ConnectKitButton />
    </div>
  );
};

export default Home;
