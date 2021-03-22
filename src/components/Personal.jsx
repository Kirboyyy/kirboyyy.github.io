import { Divider, Grid, Hidden, Typography } from "@material-ui/core";

export default function Personal(props) {
  return (
    <>
      <Grid item xs={12}>
        <Hidden smDown>
          <Typography variant="h2">{props.name}</Typography>
          <Typography
            color="primary"
            style={{ textTransform: "uppercase", lineHeight: 0.6 }}
            variant="h1"
          >
            {props.surname}
          </Typography>
        </Hidden>
        <Typography
          style={{ paddingTop: 8 }}
          dangerouslySetInnerHTML={{ __html: props.description }}
        />
      </Grid>
      <Grid item xs={12}>
        <Divider style={{ marginTop: 8 }} />
      </Grid>
      <Grid item xs={12} md={2}>
        <Typography variant="overline">Location</Typography>
        <Typography>{props.location}</Typography>
      </Grid>
      <Grid item xs={12} md={2}>
        <Typography variant="overline">Phone</Typography>
        <Typography>{props.phone}</Typography>
      </Grid>
      <Grid item xs={12} md={2}>
        <Typography variant="overline">Email</Typography>
        <Typography>{props.mail}</Typography>
      </Grid>
      <Hidden lgUp>
        <Grid item xs={12}>
          <Divider style={{ marginTop: 8 }} />
        </Grid>
      </Hidden>
    </>
  );
}
