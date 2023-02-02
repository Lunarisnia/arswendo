import { ExitToApp } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import styles from "../layout.module.css";

const Hobbies = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#2979ff",
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        alignItems: "center",
        width: 1,
      }}
    >
      <Typography variant="h3" data-aos="fade-up" component="div">
        My Hobbies
      </Typography>
      <MyTopFour />
      <Stack spacing={4} direction="column"></Stack>
    </Box>
  );
};

// Todo: Shows my favorite shows, video games, steam replays (?)

const MyTopFour = () => {
  return (
    <Container data-aos='fade-left' data-aos-delay='100'>
      <Grid container rowSpacing={1} columnSpacing={2}>
        <Grid item xs={12}>
          <Box className={styles.myTopFive}>
            <Typography align="center" variant="h3">
              My Favorite Videogames
            </Typography>
            <Typography align="center" variant="subtitle1">
              These games are important to me and I hope you give it a try as well!
            </Typography>
            <br />
            <Grid container>
              <Grid item lg={3}>
                <GameCard />
              </Grid>
              <Grid item lg={3}>
                <GameCard />
              </Grid>
              <Grid item lg={3}>
                <GameCard />
              </Grid>
              <Grid item lg={3}>
                <GameCard />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

const GameCard = () => {
  return (
    <Card className={styles.topFourCard}>
      <Box className={styles.overlayPopup}>
        <Box
          sx={{
            backgroundColor: "gray",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 1,
          }}
          component="a"
          href="https://na.finalfantasyxiv.com/"
          target="__blank"
        >
          <IconButton>
            <ExitToApp fontSize="large" />
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        image="/images/ffxiv.png"
        alt="ALT"
        component="img"
        sx={{objectFit: 'cover'}}
        height={300}
      />
      <CardContent className={styles.transparentContainer}>
        <Typography color="white" variant="h3">
          FINAL FANTASY 14
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Hobbies;
