import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/navbar/navbar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <h1 className={`${styles.title}`}>
        YourBetterAssistant Development Blog!
      </h1>
      <div className={styles.new}>
        <p>Newest Blogs:</p>
      </div>
    </>
  );
};

export default Home;
