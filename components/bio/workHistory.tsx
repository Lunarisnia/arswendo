import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { ReactNode } from "react";

const WorkHistory = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#42a5f5",
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        alignItems: "center",
        height: "400vh", // Todo: Make this dynamic by increasing by 100 everytime another card is added
        width: 1,
      }}
    >
      <br />
      <br />
      <br />
      <br />
      <Typography variant="h1">Work History</Typography>
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Grid container rowSpacing={40} columnSpacing={2}>
          <LeftCard />
          <RightCard />
          <LeftCard />
          <RightCard />
        </Grid>
      </Container>
    </Box>
  );
};
// Todo: Make Card Media load different images depending on the array
// Todo: make the card body dynamic
// Todo: Map my work history on an array
const LeftCard = () => {
  return (
    <>
      <Grid item xs={4}>
        <WorkData />
      </Grid>
      <Grid item xs={4}>
        <GeneralInfo
          position="[Position]"
          duration="[Duration]"
          officeName="[At OfficeName]"
          align="left"
        />
      </Grid>
      <Grid item xs={4}></Grid>
    </>
  );
};

const RightCard = () => {
  return (
    <>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <GeneralInfo
          position="[Position]"
          duration="[Duration]"
          officeName="[At OfficeName]"
          align="right"
        />
      </Grid>
      <Grid item xs={4}>
        <WorkData />
      </Grid>
    </>
  );
};

const WorkData = () => {
  return (
    <Card data-aos='fade-up' data-aos-delay='200'>
      <CardMedia
        component="img"
        sx={{ height: 200 }}
        image="/images/placeholder.png"
        alt="Work Photo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          Responsibilities
        </Typography>
        <Typography variant="body1" paragraph component='span'>
          <ul>
            <li>
              Developed a Back End using ExpressJS for an urgent AI Analytics
              project in under A Week.
            </li>
            <li>
              Worked closely with Quality Assurance to deliver high quality
              product.
            </li>
            <li>Written a lot of unit test.</li>
          </ul>
        </Typography>
      </CardContent>
    </Card>
  );
};

interface GeneralInfoType {
  children?: ReactNode;
  position: string;
  officeName: string;
  duration: string;
  align: "left" | "right";
}

const GeneralInfo = ({
  children,
  position,
  officeName,
  duration,
  align,
}: GeneralInfoType) => {
  return (
    <>
      <Typography align={align} data-aos="fade-up">{position}</Typography>
      <Typography align={align} data-aos="fade-up">{officeName}</Typography>
      <Typography align={align} data-aos="fade-up">{duration}</Typography>
      {children}
    </>
  );
};

export default WorkHistory;
