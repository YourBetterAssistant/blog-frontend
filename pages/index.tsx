import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import BlogCard from "../components/blogCard/blogcard";
import NavBar from "../components/navbar/navbar";
import styles from "../styles/Home.module.css";

const Home: NextPage<{ blogs: Blog[] }> = ({ blogs }) => {
  return (
    <>
      <NavBar />
      <h1 className={`${styles.title}`}>
        YourBetterAssistant Development Blog!
      </h1>
      <div className={styles.new}>
        <p>Newest Blogs:</p>
        <BlogCard blogs={blogs} />
      </div>
    </>
  );
};

export default Home;

// export async function getServerSideProps() {
//   const res = await (
//     await fetch("", {
//       method: "GET",
//     })
//   ).json();

//   return {
//     props: {
//       blogs: res,
//     },
//   };
// }
