import Head from "next/head";
import ContactMe from "../components/bio/contactMe";
import Greeting from "../components/bio/greeting";
import Hobbies from "../components/bio/hobbies";
import Projects from "../components/bio/projects";
import WhatIDo from "../components/bio/whatido";
import WorkHistory from "../components/bio/workHistory";
import DevelopmentFlag from "../components/developmentFlag";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rio Arswendo</title>
      </Head>
      <DevelopmentFlag />
      <Greeting />
      <WhatIDo />
      <Projects />
      <Hobbies />
      <WorkHistory />
      <ContactMe />
    </>
  );
}
