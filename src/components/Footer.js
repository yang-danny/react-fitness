

import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
  <Box mt="80px" >
    <Stack gap="20px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="20px" pt="20px">
      <img src={Logo} alt="logo" style={{ width: '40px', height: '40px' }} />
    </Stack>
    <Typography variant="h6" sx={{ fontSize: { lg: '20px', xs: '14px' } }} mt="41px" textAlign="center" pb="40px">Develped ❤️ by Danny Yang</Typography>
  </Box>
);

export default Footer;