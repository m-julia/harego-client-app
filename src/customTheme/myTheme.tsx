import { createMuiTheme } from '@material-ui/core/styles';

const myTheme = createMuiTheme({
  palette: {
    primary: {
      light: 'a6a6a6',
      main: '#ffcc23',
      dark: '#37474f',
      contrastText: '#37474f',
    },
    secondary: {
      light: 'a6a6a6',
      main: '#ffcc23',
      dark: '#ffcc23',
      contrastText: '#000',
    },
  },
});

export default myTheme;