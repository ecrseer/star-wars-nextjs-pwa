import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// tema boilerplate
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#555',
    },
    typography: {
        fontFamily: [
          'Arial', 
          'Chilanka',
          'cursive',
        ].join(','),
      },
      
  },
});

export default theme;