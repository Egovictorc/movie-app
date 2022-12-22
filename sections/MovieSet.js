import { Box, Typography, Stack } from '@mui/material';
import React from 'react';

const MovieSet = () => {
  return (
    <Stack rowGap={'18px'}>
      <Typography
        sx={{
          fontFamily: 'DM Sans',
          fontSize: '24px',
          fontWeight: 400,
          lineHeight: '31px',
          textAlign: 'left',
        }}
      >
        Category name
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '10px',
        }}
      >
        {[...Array(5)].map((movie, index) => (
          <Movie key={index} />
        ))}
      </Box>
    </Stack>
  );
};

export default MovieSet;

const Movie = () => {
  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        borderRadius: '12px',
        backgroundColor: '#000',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        sx={{
          fontFamily: 'DM Sans',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '24px',
          //   lineHeight: '31px',
          // alignitems: center;
          color: '#FFFFFF',
        }}
      >
        Movie Name
      </Typography>
    </Box>
  );
};
