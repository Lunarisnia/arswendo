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
  const history = experiences.map((exp, idx) => {
    const {
      is_freelance: isFreelance,
      office_name: officeName,
      job_desk: jobDesk,
      image: cardImage,
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
        jobDesk={jobDesk}
        cardImage={cardImage}
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
        jobDesk={jobDesk}
        cardImage={cardImage}
      ></RightCard>
    );
  });

  return (
    <Box
      sx={{
        backgroundColor: "#42a5f5",
        display: "flex",
        justifyContent: "stretch",
        flexDirection: "column",
        alignItems: "center",
        width: 1,
      }}
    >
      <br />
      <br />
      <br />
      <br />
      <Typography variant="h1" data-aos="fade-up" component='div'>Work History</Typography>
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Grid container rowSpacing={1} columnSpacing={2}>
          {history}
        </Grid>
      </Container>
      <br />
      <br />
      <br />
      <br />
    </Box>
  );
};

interface HistoryCard {
  position: string;
  duration: string;
  officeName: string;
  from: string;
  to: string;
  isFreelance?: boolean;
  jobDesk: Array<string>;
  cardImage: string;
}

const LeftCard = ({
  position,
  duration,
  officeName,
  from,
  to,
  isFreelance,
  jobDesk,
  cardImage,
}: HistoryCard) => {
  return (
    <>
      <Grid item xs={4}>
        <WorkData cardImage={cardImage} jobDesk={jobDesk} />
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
  jobDesk,
  cardImage,
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
        <WorkData cardImage={cardImage} jobDesk={jobDesk} />
      </Grid>
    </>
  );
};

interface WorkDataType {
  cardImage: string;
  jobDesk: Array<string>;
}

const WorkData = ({ cardImage, jobDesk }: WorkDataType) => {
  const jobDeskList = jobDesk.map((job) => (<li>{job}</li>));

  return (
    <Card data-aos="fade-up" data-aos-delay="200">
      <CardMedia
        component="img"
        image={cardImage}
        alt="Work Photo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          Responsibilities
        </Typography>
        <Typography variant="body1" paragraph component="span">
          <ul>
            {jobDeskList}
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
