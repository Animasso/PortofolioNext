import About from "@/components/About";
import Contact from "@/components/Contact";
import Main from "@/components/Main";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portofolio Asid||Frontend Dev</title>
        <meta name="description" content="Portofolio Frontend Dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
