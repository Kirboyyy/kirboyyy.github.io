import { Avatar, Grid, makeStyles, Typography } from "@material-ui/core";
import Title from "./Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.primary.main,
    fontSize: theme.typography.h4.fontSize,
  },
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    backgroundColor: "transparent",
    border: "1px solid " + theme.palette.primary.main,
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

export default function Hobbies(props) {
  const classes = useStyles();

  return (
    <>
      <Title title="Hobbies" />
      <Grid container spacing={props.isMobile ? 2 : 4}>
        {props.hobbies.map((hobby) => (
          <Grid item xs={6} key={hobby.title}>
            <Avatar className={classes.avatar}>
              <FontAwesomeIcon className={classes.icon} icon={hobby.icon} />
            </Avatar>
            <Typography align="center">{hobby.title}</Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
