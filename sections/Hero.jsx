import React from 'react';
import { Container, Box, Typography, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Hero = () => {
  const theme = useTheme();
  return (
    <Box
      component="section"
      sx={{
        padding: '109px 77px',
        backgroundImage: 'url(/header_bg.jpg)',
        width: '100%',
        height: '550px',
      }}
    >
      <Typography
        // component="h2"
        // variant="h2"
        sx={{
          color: '#fff',
          fontWeight: 700,
          // font-family: DM Sans;

          letterSpacing: '-0.05em',
          maxWidth: '273px',
          fontSize: '28px',
          fontWeight: 700,
          lineHeight: '36px',

          textAlign: 'center',
          margin: 'auto',
          [theme.breakpoints.up('md')]: {
            maxWidth: '490px',
            fontSize: '72px',
            lineHeight: '94px',
          },
          [theme.breakpoints.up('lg')]: {
            textAlign: 'left',
            margin: 0,
          },
        }}
      >
        Watch something incredible.
      </Typography>
    </Box>
  );
};

export default Hero;
