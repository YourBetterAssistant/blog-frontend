import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/navbar/navbar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <p>Hello World</p>
    </>
  );
};

export default Home;
