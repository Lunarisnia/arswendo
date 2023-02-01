import { Container } from "@mui/material";
import ContactMe from "../components/bio/contactMe";
import Greeting from "../components/bio/greeting";
import WhatIDo from "../components/bio/whatido";
import WorkHistory from "../components/bio/workHistory";

export default function Home() {
  return (
    <>
      <Greeting />
      <WhatIDo />
      {/* Add My Work History And Projects Section */}
      <WorkHistory /> 
      <ContactMe />
    </>
  );
}
