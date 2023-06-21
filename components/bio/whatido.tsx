import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import styles from '../layout.module.css';

const WhatIDo = () => {
  return (
    <Box
      className={styles.xToWhatIDo}
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        width: 1
      }}
    >
      <Container>
        <Grid container spacing={2} rowSpacing={1}>
          <Grid item xs={12}>
            <Typography variant="h1" data-aos="fade-up" color={"white"}>
              My life wouldn't be the
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h2" data-aos="fade-right" data-aos-delay="200" color={"white"}>
              same without
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography variant="h1" data-aos="fade-left" data-aos-delay="1500" fontSize={190} color={"white"}>
              YOU!
            </Typography>
          </Grid>
          <Grid item xs={5}>
          </Grid>
          <Grid item xs={2}>
            {/* <Image
              src="/images/computer.png"
              width={144}
              height={144}
              alt="profile"
              data-aos="zoom-in-up"
              data-aos-delay="400"
            ></Image> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhatIDo;
