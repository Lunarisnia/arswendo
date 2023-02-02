import { Box, Grid, Typography } from "@mui/material";

const Skills = () => {
  return (
    <Box
      sx={{
        backgroundColor: "blue",
        display: "flex",
        justifyContent: "stretch",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        width: 1,
      }}
    >
      <br />
      <br />
      <br />
      <br />
      <Typography variant="h1" data-aos="fade-up" component="div">
        Skills
      </Typography>
      <br />
      <br />
      <br />
      <br />
      <Grid container>
        <Grid item xs={5} sx={{backgroundColor: "black"}}>
        </Grid>
        <Grid item xs={2} sx={{backgroundColor: "red"}}>
          <Typography>Hello</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Skills;
