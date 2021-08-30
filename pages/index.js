import * as obj from "../app/components";
import { checkComponentCount } from "../app/utils";
checkComponentCount(obj, "pages.index");

// import { Data2 } from "../data2";

import { DemoForm } from "../app/components";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Redux Toolkit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <img src="/logo.svg" className={styles.logo} alt="logo" />
      </header>

      <main>
        <p>Hello</p>
        {/* <DemoForm /> */}
      </main>
    </div>
  );
}
