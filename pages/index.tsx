import { Container } from "@mui/material";
import ContactMe from "../components/contactMe";
import Greeting from "../components/greeting";
import WhatIDo from "../components/whatido";

export default function Home() {
  return (
    <>
      <Container maxWidth={false} sx={{ backgroundColor: "lightblue" }}>
        <Greeting />
        <WhatIDo />
        <ContactMe />
      </Container>
    </>
  );
}
