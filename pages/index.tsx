import { Container } from "@mui/material";
import Head from "next/head";
import ContactMe from "../components/bio/contactMe";
import Greeting from "../components/bio/greeting";
import WhatIDo from "../components/bio/whatido";
import WorkHistory from "../components/bio/workHistory";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rio Arswendo Rachmad</title>
      </Head>
      <Greeting />
      <WhatIDo />
      {/* Add My Work History And Projects Section */}
      <WorkHistory /> 
      <ContactMe />
    </>
  );
}
