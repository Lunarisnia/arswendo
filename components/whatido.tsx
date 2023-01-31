import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const WhatIDo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Container>
        <Grid container spacing={2} rowSpacing={1}>
          <Grid item xs={12}>
            <Typography variant="h1" data-aos="fade-up">
              I'am a Software Developer
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h2" data-aos="fade-right" data-aos-delay="200">
              Based In
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="h1" data-aos="fade-left" data-aos-delay="500">
              Indonesia
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Image
              src="/images/computer.png"
              width={144}
              height={144}
              alt="profile"
              data-aos="zoom-in-up"
              data-aos-delay="700"
            ></Image>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhatIDo;
