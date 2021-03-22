import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Grid, Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import data from "../data/data.json";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(24),
    height: theme.spacing(24),
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: theme.spacing(1),
  },
}));

export default function Sidebar(props) {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        justify="center"
        style={{ marginBottom: 8, marginTop: 8 }}
      >
        <Grid item xs={12}>
          <Avatar
            alt={data.personal.fullName}
            src="/img/profile.jpg"
            className={classes.large}
          />
          <Typography variant="h5" align="center">
            {data.personal.fullName}
          </Typography>
          <Typography variant="h4" align="center" color="primary">
            {data.personal.position}
          </Typography>
        </Grid>
        <Grid item xs={12} justify="center" container spacing={2}>
          {data.socials.map((social) => (
            <Grid item xs={2} lg={2} key={social.alt}>
              <Link href={social.url}>
                <FontAwesomeIcon size="3x" icon={social.icon}></FontAwesomeIcon>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
