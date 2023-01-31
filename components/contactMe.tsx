import { Box, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";

const ContactMe = () => {
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
      {/* Change this to SVG Icon Later */}
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h1" data-aos="fade-up">
              Get in contact with me on:
            </Typography>
          </Grid>
          <Grid item xs={4}>
          </Grid>
          <Grid item xs={1}>
            <Typography
              variant="subtitle1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Link href="https://www.linkedin.com/in/rio-arswendo-rachmad-990a091a9/">
                Linked In
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography
              variant="subtitle1"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Link href="https://www.linkedin.com/in/rio-arswendo-rachmad-990a091a9/">
                Other Link
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography
              variant="subtitle1"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Link href="https://www.linkedin.com/in/rio-arswendo-rachmad-990a091a9/">
                Email
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactMe;
