import {
  TrendingFlat,
} from "@mui/icons-material";
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
        height: "100vh",
        width: 1,
      }}
    >
      <br />
      <br />
      <br />
      <br />
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
        />
      </Stack>
    </Box>
  );
};

interface ProjectCardType {
  description: string;
  cardTitle: string;
  siteUrl: string;
  year: string;
}

const ProjectCard = ({
  cardTitle,
  year,
  description,
  siteUrl,
}: ProjectCardType) => {
  return (
    <Container>
      <Card sx={{ display: "flex" }} data-aos="fade-left">
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent:'space-between' }}>
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
                <Button
                  variant="contained"
                  color="success"
                  href={siteUrl}
                  component={Link}
                >
                  Go To Website
                  <TrendingFlat />
                </Button>
              </Stack>
            </Box>
          </CardContent>
        </Box>

        <CardMedia
          component="img"
          sx={{ width: 500 }}
          image="/images/placeholder.png"
          alt="Live from space album cover"
        />
      </Card>
    </Container>
  );
};

export default Projects;
