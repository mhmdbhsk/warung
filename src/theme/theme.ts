import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#5ED99E',
      main: '#2DBE78',
      dark: '#28A96B',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    background: {
      default: '#fff',
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: 'DM Sans',
    body1: {
      '@media (max-width:360px)': {
        fontSize: '.875rem',
      },
    },
    body2: {
      '@media (max-width:360px)': {
        fontSize: '.75rem',
      },
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          html: {
            letterSpacing: 1,
          },
        },
      },
    },
  },
});
