import { Grid, Hidden, Paper, Typography } from "@material-ui/core";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@material-ui/lab";
import Title from "../components/Title";
export default function Experience(props) {
  return (
    <>
      <Title title="Experience" />
      <Hidden mdDown>
        <Timeline>
          {props.experience.map((experience, key) => (
            <div key={key}>
              <TimelineItem>
                <TimelineOppositeContent>
                  {key % 2 === 0 ? (
                    <Typography variant="body2" color="textSecondary">
                      {experience.time}
                    </Typography>
                  ) : (
                    <Paper elevation={3} style={{ padding: 8 }}>
                      <Typography variant="h6" component="h1">
                        {experience.title}
                      </Typography>
                      <Typography>{experience.subTitle}</Typography>
                    </Paper>
                  )}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot>{/*  <FastfoodOutlined />*/}</TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  {key % 2 === 0 ? (
                    <Paper elevation={3} style={{ padding: 8 }}>
                      <Typography variant="h6" component="h1">
                        {experience.title}
                      </Typography>
                      <Typography>{experience.subTitle}</Typography>
                    </Paper>
                  ) : (
                    <Typography variant="body2" color="textSecondary">
                      {experience.time}
                    </Typography>
                  )}
                </TimelineContent>
              </TimelineItem>
            </div>
          ))}
        </Timeline>
      </Hidden>
      <Hidden lgUp>
        <Grid container spacing={2}>
          {props.experience.map((experience, key) => (
            <Grid item xs={12} key={key}>
              <Paper style={{ padding: 4 }}>
                <Typography variant="subtitle2">{experience.time}</Typography>
                <Typography variant="h6">{experience.title}</Typography>
                <Typography variant="subtitle1">
                  {experience.subTitle}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Hidden>
    </>
  );
}
