import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    background: {
      default: '#FFFFFF',
    },
    primary: {
      main: '#CD8B65',
      light:
        'linear-gradient(94.75deg, rgba(0, 0, 0, 0.24) 0%, rgba(0, 0, 0, 0) 100.7%)',
    },
    text: {
      primary: '#2F2F2F',
      secondary: '#9F9F9F',
    },
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          background: '#FEFEFE',
          boxShadow: '0px 1px 0px rgba(0, 0, 0, 0.08)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '100px',
          textTransform: 'initial',
          fontSize: '14px',
          fontWeight: '800',
          lineHeight: '19px',
        },
      },
    },
  },
  typography: {
    fontFamily: ['Public Sans', 'sans-serif'].join(','),
    h1: {
      fontSize: '46px',
      fontWeight: '700',
      lineHeight: '52px',
      fontFamily: ['Hind', 'sans-serif'].join(','),
    },
    h2: {
      fontSize: '16px',
      fontWeight: '800',
      lineHeight: '19px',
    },
    h3: {
      fontSize: '16px',
      fontWeight: '600',
      lineHeight: '21px',
    },
    h4: {
      fontSize: '14px',
      fontWeight: '800',
      lineHeight: '19px',
    },
  },
});
