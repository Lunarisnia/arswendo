import { Email, Favorite, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import styles from '../layout.module.css';

const ContactMe = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#000000',
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
            <Typography variant="h1" data-aos="fade-down" data-aos-delay="1000" color='white'>
              Happy Birthday My Love!
            </Typography>
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={1}>
            <Link href="https://www.linkedin.com/in/rio-arswendo-rachmad-990a091a9/" >
              <Favorite color={"error"} fontSize='large' data-aos="zoom-in-up" data-aos-delay="1200" />
            </Link>
          </Grid>
          <Grid item xs={1}>
            <Link href="https://www.instagram.com/notepad_pro/">
              <Favorite color='primary' fontSize='large' data-aos="zoom-in-up" data-aos-delay="1300" />
            </Link>
          </Grid>
          <Grid item xs={1}>
            <Link href="mailto:r.arswendo.r@gmail.com">
              <Favorite color='info' fontSize='large' data-aos="zoom-in-up" data-aos-delay="1400" />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactMe;
