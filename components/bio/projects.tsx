import { TrendingFlat } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import Link from "../../src/Link";

const Projects = () => {
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
      <Stack spacing={2} direction="column">
        <Typography
          variant="h3"
          data-aos="fade-up"
          component="div"
          align="center"
        >
          My Projects
        </Typography>
        <ProjectCard
          cardTitle="Foo Bar Maker"
          description="This is a description of a foobar maker that is not a real thing. This is a description of a foobar maker that is not a real thing.This is a description of a foobar maker that is not a real thing.This is a description of a foobar maker that is not a real thing.This is a description of a foobar maker that is not a real thing.This is a description of a foobar maker that is not a real thing.This is a description of a foobar maker that is not a real thing.This is a description of a foobar maker that is not a real thing."
          year="2023"
          siteUrl="/"
          isReady
          image="images/placeholder.png"
        />
        <ProjectCard
          cardTitle="Foo Bar Maker"
          description="This is a description of a foobar maker that is not a real thing. This is a description of a foobar maker that is not a real thing.This is a description of a foobar maker that is not a real thing.This is a description of a foobar maker that is not a real thing.This is a description of a foobar maker that is not a real thing.This is a description of a foobar maker that is not a real thing.This is a description of a foobar maker that is not a real thing.This is a description of a foobar maker that is not a real thing."
          year="2023"
          siteUrl="/"
          image="images/placeholder.png"
        />
        <ProjectCard
          cardTitle="Foo Bar Maker"
          description="This is a description of a foobar maker that is not a real thing. This is a description of a foobar maker that is not a real thing.This is a description of a foobar maker that is not a real thing.This is a description of a foobar maker that is not a real thing.This is a description of a foobar maker that is not a real thing.This is a description of a foobar maker that is not a real thing.This is a description of a foobar maker that is not a real thing.This is a description of a foobar maker that is not a real thing."
          year="2023"
          siteUrl="/"
          image="images/placeholder.png"
        />
      </Stack>
    </Box>
  );
};

interface ProjectCardType {
  description: string;
  cardTitle: string;
  isReady?: boolean;
  siteUrl: string;
  image: string;
  year: string;
}

const ProjectCard = ({
  description,
  cardTitle,
  isReady,
  siteUrl,
  image,
  year,
}: ProjectCardType) => {
  return (
    <Container>
      <Card sx={{ display: "flex" }} data-aos="fade-left">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <CardContent>
            <Typography variant="h2">{cardTitle}</Typography>
            <Typography variant="subtitle1">{year}</Typography>
            <Typography variant="body1" paragraph>
              {description}
            </Typography>
          </CardContent>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Stack spacing={2} direction="row">
                {isReady ? <GoToWebsiteButton siteUrl={siteUrl} /> : <ComingSoonButton />}
              </Stack>
            </Box>
          </CardContent>
        </Box>

        <CardMedia
          component="img"
          sx={{ width: 500 }}
          image={image}
          alt="Project Image"
        />
      </Card>
    </Container>
  );
};

const GoToWebsiteButton = ({ siteUrl }) => {
  return (
    <Button variant="contained" color="success" href={siteUrl} component={Link}>
      Go To Website
      <TrendingFlat />
    </Button>
  );
};

const ComingSoonButton = () => {
  return (
    <Button variant="contained" disabled>
      Coming Soon!
    </Button>
  );
};

export default Projects;
