import { createMuiTheme } from '@material-ui/core/styles';
import lightGreen from '@material-ui/core/colors/lightGreen';
import deepOrange from '@material-ui/core/colors/deepOrange';
import orange from '@material-ui/core/colors/orange';
import red from '@material-ui/core/colors/red'

export default createMuiTheme({
  palette: {
    primary: lightGreen,
    secondary: deepOrange,
    error: red
  },
  status: {
    danger: orange
  }
});