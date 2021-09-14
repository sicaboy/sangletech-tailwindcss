import Head from "next/head";
import Layout from "../components/Layout";
import Home from "./Home";

export default function Main() {
  return (
    <div>
      <Head>
        <title>Sang Le Tech</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <Layout>
        <Home />
      </Layout>
    </div>
  );
}
