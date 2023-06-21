import { KeyboardArrowDown } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const Greeting = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000000",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        width: 1
      }}
    >
      <Typography variant="h1" data-aos="fade-up" align='center' color={"white"}>
        Hi, Welcome
      </Typography>
      <Typography variant="h4" data-aos="fade-up" align='center'data-aos-delay="200" color={"white"}>
        I present to you this little gift
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
      <Typography variant="subtitle1" data-aos="fade-down" data-aos-delay="500" color={"white"}>
        Scroll down to know more!
      </Typography>
      <KeyboardArrowDown fontSize='large' data-aos="fade-up" data-aos-delay="700" fill={"white"}/>
    </Box>
  );
};

export default Greeting;
