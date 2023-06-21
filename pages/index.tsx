import { Stack } from "@mui/material";
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
        <title>A Normal Looking Website</title>
      </Head>
      {/* <DevelopmentFlag /> */}
      <Greeting />
      <WhatIDo />
      {/* <Stack spacing={30} direction="column" sx={{ backgroundColor: "#2979ff" }}>
        <Projects />
        <Hobbies />
      </Stack> */}
      {/* <WorkHistory /> */}
      <ContactMe />
    </>
  );
}
