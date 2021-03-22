import { Container, CssBaseline, Grid, ThemeProvider } from "@material-ui/core";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import Sidebar from "./components/Sidebar";
import { Resume } from "./pages/Resume";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);

const darkTheme = createMuiTheme({
  typography: {
    fontFamily: ["Ubuntu"],
  },
  palette: {
    type: "dark",
    primary: {
      main: "#5AC8FA",
    },
    text: {
      primary: "rgba(255,255,255,0.90)",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  sidebar: {
    backgroundColor: "rgba(18,18,18,0.80)",
    [theme.breakpoints.up("md")]: {
      height: "unset"
    },
  },
}));

function App() {
  let classes = useStyles();
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Grid container>
          <Grid item xs={12} md={3} className={classes.sidebar}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} md={9}>
            <Container disableGutters>
              <Resume />
            </Container>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
