import React from 'react';
import { Container, Box, Typography } from '@mui/material';
// @mui
import { styled, useTheme, alpha } from '@mui/material/styles';

const StyledLogo = styled('div')(({ theme }) => ({
  boxSizing: 'border-box',
  // position: 'absolute',
  width: '193px',
  height: '60px',
  padding: '14px 19px',
  // left: '77px',
  // top: '40px',
  border: '1px solid #FFFFFF',
  [theme.breakpoints.down('lg')]: {
    margin: 'auto',
  },
}));

const Header = () => {
  return (
    <Box
      component="header"
      sx={{ padding: '40px 77px', backgroundColor: '#292929' }}
    >
      <StyledLogo>
        <Typography
          variant="h5"
          sx={{
            color: '#fff',
            // position: 'absolute',
            // width: 156.7,
            // height: 32.94,
            // left: 96,
            // top: 54,
          }}
        >
          My TestApp
        </Typography>
      </StyledLogo>
    </Box>
  );
};

export default Header;
