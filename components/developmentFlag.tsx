import { AppBar, Toolbar, Typography } from "@mui/material";

const DevelopmentFlag = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          STILL IN DEVELOPMENT
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default DevelopmentFlag;
