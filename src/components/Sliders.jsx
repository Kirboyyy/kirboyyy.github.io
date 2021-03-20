import React from "react";
import { Grid, Slider, Typography } from "@material-ui/core";
import Title from "./Title";

export default function Sliders(props) {
  return (
    <>
      <Title title="Skills" />
      <Grid container>{props.skills.map((skill) => renderSlider(skill))}</Grid>
      <Title title="Languages" />
      <Grid container>
        {props.languages.map((language) => renderSlider(language))}
      </Grid>
    </>
  );
}

function renderSlider(object) {
  return (
    <React.Fragment key={object.code}>
      <Grid item xs={7}>
        <Typography variant="body1">{object.code}</Typography>
      </Grid>
      <Grid item xs={5} style={{ paddingRight: 8 }}>
        <Slider marks step={20} defaultValue={object.level} disabled />
      </Grid>
    </React.Fragment>
  );
}
