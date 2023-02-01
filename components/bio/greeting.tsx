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
      <Typography variant="h1" data-aos="fade-up">
        Hi, I'm Rio
      </Typography>
      <Typography variant="subtitle1" data-aos="fade-up" data-aos-delay="500">
        Scroll down to know me!
      </Typography>
    </Box>
  );
};

export default Greeting;