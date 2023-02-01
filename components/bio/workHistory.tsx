import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import experiences from "../../bin/experiences.json";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import humanizeDuration from "humanize-duration";
dayjs.extend(duration);
dayjs.extend(relativeTime);
const MONTH_YEAR = "MMMM YYYY";

const WorkHistory = () => {
  const heightIncrement = 50;
  const boxHeight = 50 + experiences.length * heightIncrement; // Will Expand Depending on how many card

  const history = experiences.map((exp, idx) => {
    const {
      is_freelance: isFreelance,
      office_name: officeName,
      job_desk: jobDesk,
      position,
      from,
      to,
    } = exp;
    const rawDuration = dayjs.duration(
      dayjs(to === "" ? undefined : to).diff(dayjs(from))
    );
    const duration = humanizeDuration(rawDuration.asMilliseconds(), {
      largest: 2,
    });
    return idx % 2 == 0 ? (
      <LeftCard
        officeName={officeName}
        position={position}
        duration={duration}
        from={from}
        key={idx}
        to={to}
        isFreelance={isFreelance}
      ></LeftCard>
    ) : (
      <RightCard
        officeName={officeName}
        position={position}
        duration={duration}
        from={from}
        key={idx}
        to={to}
        isFreelance={isFreelance}
      ></RightCard>
    );
  });

  return (
    <Box
      sx={{
        backgroundColor: "#42a5f5",
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        alignItems: "center",
        height: `${boxHeight}vh`, // Todo: Make this dynamic by increasing by 50 everytime another card is added
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
        <Grid container rowSpacing={1} columnSpacing={2}>
          {history}
        </Grid>
      </Container>
    </Box>
  );
};
// Todo: Make Card Media load different images depending on the array
// Todo: make the card body dynamic

interface HistoryCard {
  position: string;
  duration: string;
  officeName: string;
  from: string;
  to: string;
  isFreelance?: boolean;
}

const LeftCard = ({
  position,
  duration,
  officeName,
  from,
  to,
  isFreelance,
}: HistoryCard) => {
  return (
    <>
      <Grid item xs={4}>
        <WorkData />
      </Grid>
      <Grid item xs={4}>
        <GeneralInfo
          position={position}
          duration={duration}
          officeName={officeName}
          from={from}
          to={to}
          isFreelance={isFreelance}
          align="left"
        />
      </Grid>
      <Grid item xs={4}></Grid>
    </>
  );
};

const RightCard = ({
  position,
  duration,
  officeName,
  from,
  to,
  isFreelance,
}: HistoryCard) => {
  return (
    <>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <GeneralInfo
          position={position}
          from={from}
          to={to}
          duration={duration}
          officeName={officeName}
          isFreelance={isFreelance}
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
    <Card data-aos="fade-up" data-aos-delay="200">
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
        <Typography variant="body1" paragraph component="span">
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
  position: string;
  officeName: string;
  duration: string;
  from: string;
  to: string;
  align: "left" | "right";
  isFreelance?: boolean;
}

const GeneralInfo = ({
  position,
  officeName,
  duration,
  align,
  from,
  to,
  isFreelance,
}: GeneralInfoType) => {
  const freelanceChip = isFreelance ? (
    <Typography align={align} variant="body1" data-aos="fade-up">
      <Chip label="Freelance" color="success" />
    </Typography>
  ) : (
    <></>
  );

  return (
    <>
      <Typography align={align} variant="h4" data-aos="fade-up">
        {position}
      </Typography>
      <Typography align={align} variant="subtitle1" data-aos="fade-up">
        {officeName}
      </Typography>
      <Typography align={align} variant="body1" data-aos="fade-up">
        {dayjs(from).format(MONTH_YEAR)} -{" "}
        {to === "" ? "Current" : dayjs(to).format(MONTH_YEAR)}
      </Typography>
      <Typography align={align} variant="body1" data-aos="fade-up">
        {duration}
      </Typography>
      {freelanceChip}
    </>
  );
};

export default WorkHistory;
