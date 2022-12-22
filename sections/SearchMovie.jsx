import React, { useState } from 'react';
import {
  Container,
  Box,
  TextField,
  Stack,
  InputAdornment,
  Typography,
  IconButton,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import EastIcon from '@mui/icons-material/East';
import { East } from '@mui/icons-material';
import { ThemeContext } from '@emotion/react';

const SearchMovie = () => {
  const [name, setName] = useState('');
  const theme = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    fetchMovies();
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <Stack>
      <Typography
        sx={{
          fontFamily: 'DM Sans',
          fontSize: '24px',
          fontWeight: 400,
          lineHeight: '31px',
          letterSpacing: '0em',
          textAlign: 'left',
        }}
      >
        Search
      </Typography>
      <TextField
        focused
        fullWidth
        onChange={handleChange}
        value={name}
        color={'primary'}
        size="54px"
        sx={{ borderColor: '#000' }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleSubmit}
                edge="end"
                sx={{
                  cursor: 'pointer',
                }}
              ></IconButton>
              <East />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
    </Stack>
  );
};

export default SearchMovie;
