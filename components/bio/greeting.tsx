import { KeyboardArrowDown } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const Greeting = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#42a5f5",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        width: 1
      }}
    >
      <Typography variant="h1" data-aos="fade-up" align='center'>
        Hi, I'm Rio.
      </Typography>
      <Typography variant="h4" data-aos="fade-up" align='center'data-aos-delay="200">
        I love building awesome things with code.
      </Typography>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Typography variant="subtitle1" data-aos="fade-down" data-aos-delay="500">
        Scroll down to know me!
      </Typography>
      <KeyboardArrowDown fontSize='large' data-aos="fade-up" data-aos-delay="700" />
    </Box>
  );
};

export default Greeting;
