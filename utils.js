import { createTheme } from '@mui/material/styles';
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 321,
      md: 834,
      //   md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export { theme };
