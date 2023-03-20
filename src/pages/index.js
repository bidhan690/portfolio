import Head from "next/head";

import Hero from "@/components/home/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";

import { getData } from "@/helpers/mongodb";

export default function Home({ latestPosts }) {
  return (
    <>
      <Head>
        <title>Bidhan | Full-Stack Developer</title>
        <meta
          name="description"
          content="Hello, My name is bidhan niroula. I am from Nepal. This is my nextjs Portfolio!"
        />

        <link href="/assets/bidhan.ico" rel="icon" type="image/x-icon" />
      </Head>

      <Hero />
      <About />
      <Skills />
      <Projects items={latestPosts} />
      <Contact />
    </>
  );
}

export async function getStaticProps() {
  const data = await getData("projects");
  const latestPosts = data.slice(0, 4);

  return { props: { latestPosts }, revalidate: 300 };
}
