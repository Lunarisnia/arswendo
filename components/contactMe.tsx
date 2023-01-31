import { Email, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import styles from './layout.module.css';

const ContactMe = () => {
  return (
    <Box
      className={styles.xToContactMe}
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
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h1" data-aos="fade-down" color='white'>
              Get in contact with me on:
            </Typography>
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={1}>
            <Link href="https://www.linkedin.com/in/rio-arswendo-rachmad-990a091a9/" >
              <LinkedIn color='primary' fontSize='large' data-aos="zoom-in-up" data-aos-delay="200" />
            </Link>
          </Grid>
          <Grid item xs={1}>
            <Link href="https://www.instagram.com/notepad_pro/">
              <Instagram color='primary' fontSize='large' data-aos="zoom-in-up" data-aos-delay="300" />
            </Link>
          </Grid>
          <Grid item xs={1}>
            <Link href="mailto:r.arswendo.r@gmail.com">
              <Email color='primary' fontSize='large' data-aos="zoom-in-up" data-aos-delay="400" />
            </Link>
          </Grid>
          <Grid item xs={1}>
            <Link href="https://twitter.com/hyung_ji_">
              <Twitter color='primary' fontSize='large' data-aos="zoom-in-up" data-aos-delay="500" />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactMe;
