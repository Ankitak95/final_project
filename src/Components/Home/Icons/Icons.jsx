import React from 'react';
import { Box, Grid, Container } from '@mui/material';

const Icons = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        {/* Images Grid */}
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ textAlign: 'center' }}>
          <Grid item xs={12} sm={2}>
            <Box
              component="img"
              sx={{
                width: '100px',
                height: '100px',
                objectFit: 'contain',
                margin: 'auto', // Center image within grid item
                display: 'block', // Ensure block display for proper margin handling
              }}
              alt="Image 1"
              src={`${process.env.PUBLIC_URL}/assets/brand/br-1.png`}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Box
              component="img"
              sx={{
                width: '100px',
                height: '100px',
                objectFit: 'contain',
                margin: 'auto', // Center image within grid item
                display: 'block', // Ensure block display for proper margin handling
              }}
              alt="Image 2"
              src={`${process.env.PUBLIC_URL}/assets/brand/br-2.png`}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Box
              component="img"
              sx={{
                width: '100px',
                height: '100px',
                objectFit: 'contain',
                margin: 'auto', // Center image within grid item
                display: 'block', // Ensure block display for proper margin handling
              }}
              alt="Image 3"
              src={`${process.env.PUBLIC_URL}/assets/brand/br-3.png`}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Box
              component="img"
              sx={{
                width: '100px',
                height: '100px',
                objectFit: 'contain',
                margin: 'auto', // Center image within grid item
                display: 'block', // Ensure block display for proper margin handling
              }}
              alt="Image 4"
              src={`${process.env.PUBLIC_URL}/assets/brand/br-4.png`}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Box
              component="img"
              sx={{
                width: '100px',
                height: '100px',
                objectFit: 'contain',
                margin: 'auto', // Center image within grid item
                display: 'block', // Ensure block display for proper margin handling
              }}
              alt="Image 5"
              src={`${process.env.PUBLIC_URL}/assets/brand/br-5.png`}
            />
          </Grid>
        </Grid>
      </Container>
      <hr />
      <br />
    </Box>
  );
};

export default Icons;
