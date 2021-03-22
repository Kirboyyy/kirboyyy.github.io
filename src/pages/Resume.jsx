import React from "react";
import { Grid, makeStyles, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import data from "../data/data.json";
import Personal from "../components/Personal";
import Sliders from "../components/Sliders";
import Hobbies from "../components/Hobbies";
import Experience from "../components/Experience";

const useStyles = makeStyles((theme) => ({
  background: {
    background:
      "linear-gradient(0deg, rgba(18, 18, 18, 0.85), rgba(18, 18, 18, 0.95)), url(/img/background.jpg) no-repeat center center fixed",
    backgroundSize: "cover",
    position: "fixed",
    top: 0,
    left: 0,
    minWidth: "100%",
    minHeight: "100%",
    zIndex: -1337,
  },
}));

export function Resume() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"), {
    defaultMatches: true,
  });
  return (
    <>
      <div className={classes.background} />
      <Grid container spacing={isMobile ? 0 : 8} style={{ padding: 8 }}>
        <Grid container item xs={12}>
          <Personal {...data.personal} />
        </Grid>
        <Grid item xs={12} lg={9} xl={4}>
          <Sliders skills={data.skills} languages={data.languages} />
        </Grid>
        <Grid item xs={12} lg={3} xl={2}>
          <Hobbies hobbies={data.hobbies} isMobile={isMobile} />
        </Grid>
        <Grid item xs={12} xl={6}>
          <Experience experience={data.experience} />
        </Grid>
      </Grid>
    </>
  );
}
