import "@/styles/globals.css";
import Layout from "@/components/header/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Bidhan | Full-Stack Developer</title>
        <meta
          name="description"
          content="Hello, My name is Bidhan Niroula. I am from Nepal. This is my NextJS Portfolio!"
        />

        <link href="/assets/bidhan.ico" rel="icon" type="image/x-icon" />
      </Head>
      <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  
  );
}
