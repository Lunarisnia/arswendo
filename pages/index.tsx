import Head from "next/head";
import ContactMe from "../components/bio/contactMe";
import Greeting from "../components/bio/greeting";
import Skills from "../components/bio/skills";
import WhatIDo from "../components/bio/whatido";
import WorkHistory from "../components/bio/workHistory";
import DevelopmentFlag from "../components/developmentFlag";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rio Arswendo Rachmad</title>
      </Head>
      <DevelopmentFlag />
      <Greeting />
      <WhatIDo />
      {/* Add My Work History And Projects Section */}
      <WorkHistory />
      <Skills />
      <ContactMe />
    </>
  );
}
