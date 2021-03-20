import { Typography } from "@material-ui/core";
import { withTheme } from '@material-ui/core/styles';

function Title(props) {
  return <Typography variant="h3" style={{textDecoration: 'underline', textDecorationColor: props.theme.palette.primary.main, paddingBottom: 32}}>{props.title}</Typography>;
}

export default withTheme(Title);