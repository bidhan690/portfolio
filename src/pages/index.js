import Head from "next/head";

import Hero from "@/components/home/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bidhan | Full-Stack Developer</title>
        <meta
          name="description"
          content="Hello, My name is bidhan niroula. I am from Nepal. This is my nextjs Portfolio!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
