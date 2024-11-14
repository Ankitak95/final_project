import React from 'react';
import { Box, Button, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import Cards from "./Cards/Cards"
import FeatureGrid from "./FeatureGrid/FeatureGrid"
import Product from "./Product/Product"
import Icons from "./Icons/Icons"
import Banner from "./banner/banner"

const FullScreenSection = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '130vh',
  padding: '0 10%',
  backgroundColor: '#121212',
  color: 'white',
});

const ContentSection = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  alignItems: 'center',
});

const TextSection = styled(Box)({
  maxWidth: '50%',
});

const ImageSection = styled(Box)({
  maxWidth: '50%',
  display: 'flex',
  justifyContent: 'center',
});

const SmallImagesSection = styled(Grid)({
  marginTop: '2rem',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
});

const SmallImageContainer = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'white',
  margin: '0 10px',
});

const App = () => {
  return (
    <>
    <FullScreenSection>
      <ContentSection>
        <TextSection>
          <Typography variant="h2" component="h1" gutterBottom>
            Headphones Wireless
          </Typography>
          <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos.
          </Typography>
          <Button variant="contained" color="secondary">
            Buy and Listen
          </Button>
        </TextSection>
        <ImageSection>
          <img src="./assets/assets/headphone.png" alt="Headphones" style={{ width: '100%' }} />
        </ImageSection>
      </ContentSection>
      <SmallImagesSection container spacing={2}>
        <SmallImageContainer item>
          <img src="./assets/assets/headphone4.png" alt="Modal Brown" style={{ width: '100px' }} />
          <Typography variant="body2">$100</Typography>
          <Typography variant="body2">Modal Brown</Typography>
        </SmallImageContainer>
        <SmallImageContainer item>
          <img src="./assets/assets/headphone2.png" alt="Lime Green" style={{ width: '100px' }} />
          <Typography variant="body2">$100</Typography>
          <Typography variant="body2">Lime Green</Typography>
        </SmallImageContainer>
        <SmallImageContainer item>
          <img src="./assets/assets/headphone3.png" alt="Ocean Blue" style={{ width: '100px' }} />
          <Typography variant="body2">$100</Typography>
          <Typography variant="body2">Ocean Blue</Typography>
        </SmallImageContainer>
      </SmallImagesSection>
    </FullScreenSection>
    <br />
    <Cards/>
    <br />
    <FeatureGrid/> <hr />
    <Product/>
    <Icons/>
    <Banner/>
    </> );
};

export default App;
