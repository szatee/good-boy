import { createTheme } from '@mui/material/styles';
import type { Shadows } from '@mui/material/styles';

const t = createTheme();

export const theme = createTheme(t, {
  palette: {
    background: {
      default: '#FFFFFF',
    },
    primary: {
      main: '#CD8B65',
      dark: 'linear-gradient(94.75deg, rgba(0, 0, 0, 0.24) 0%, rgba(0, 0, 0, 0) 100.7%)',
      light: 'linear-gradient(180deg, #CD8B65 0%, #BB6B3D 100%)',
      contrastText: '#AB7455',
    },
    secondary: {
      main: '#9F9F9F',
      dark: '#585757',
      light: '#DFDFDF',
    },
    text: {
      primary: '#2F2F2F',
    },
  },
  shadows: [
    'none',
    '0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802)',
    ...Array(20).fill('none'),
  ] as Shadows,
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
          padding: '20px 24px',
          borderRadius: '100px',
          textTransform: 'initial',
          fontSize: '14px',
          fontWeight: '800',
          lineHeight: '19px',
        },
        containedPrimary: {
          backgroundImage: 'linear-gradient(180deg, #CD8B65 0%, #BB6B3D 100%)',
          color: '#FFFFFF',
          ':disabled': {
            backgroundImage: 'none',
            backgroundColor: '#9F9F9F',
            color: '#FFFFFF',
          },
        },
        containedSecondary: {
          backgroundColor: '#F3E2D9',
          ':hover': {
            backgroundColor: '#F3E2D9',
          },
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
      [t.breakpoints.down('sm')]: {
        fontSize: '34px',
        lineHeight: '40px',
      },
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
