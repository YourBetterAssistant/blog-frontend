/* eslint-disable @next/next/no-img-element */
import styles from "../../styles/navbar.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
export default function NavBar() {
  const { asPath } = useRouter();
  const [down, setDown] = useState<boolean>(false);
  console.log(asPath);
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>

      <div className={`${styles.topnav} ${down ? styles.responsive : null}`}>
        <img
          alt="Logo Image"
          src="/favicon.ico"
          width={"30px"}
          height={"30px"}
          className={`${styles.logo}`}
        ></img>

        <Link href="/">
          <a className={` ${asPath == "/" ? styles.active : ""}`}>Home</a>
        </Link>
        <Link href="/blosg">
          <a className={` ${asPath == "blogs" ? styles.active : ""}`}>Blogs</a>
        </Link>
        <Link href="/about">
          <a className={` ${asPath == "about" ? styles.active : ""}`}>About</a>
        </Link>
        <Link href="https://yourbetterassistant.me">Main Page</Link>
        <Link href="login" passHref>
          <Button className={styles.login}>Login</Button>
        </Link>
        <i
          className={`fa fa-bars ${styles.icon} fa-lg`}
          onClick={() => setDown(!down)}
        ></i>
      </div>
    </>
  );
}
