import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

// Styled components
const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#333',
  color: '#fff',
  padding: theme.spacing(6, 0),
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: '#bbb',
  textDecoration: 'none',
  display: 'block',
  marginBottom: theme.spacing(1),
  '&:hover': {
    color: '#fff',
    textDecoration: 'underline',
  },
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: '#bbb',
  '&:hover': {
    color: '#fff',
  },
}));

// Footer Component
const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Section */}
          <Grid item xs={12} sm={3}>
            <FooterTitle variant="h6">Company</FooterTitle>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Our Services</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Affiliate Program</FooterLink>
          </Grid>

          {/* Get Help Section */}
          <Grid item xs={12} sm={3}>
            <FooterTitle variant="h6">Get Help</FooterTitle>
            <FooterLink href="#">FAQ</FooterLink>
            <FooterLink href="#">Shipping</FooterLink>
            <FooterLink href="#">Returns</FooterLink>
            <FooterLink href="#">Order Status</FooterLink>
            <FooterLink href="#">Payment Options</FooterLink>
          </Grid>

          {/* Online Shop Section */}
          <Grid item xs={12} sm={3}>
            <FooterTitle variant="h6">Online Shop</FooterTitle>
            <FooterLink href="#">Watch</FooterLink>
            <FooterLink href="#">Bag</FooterLink>
            <FooterLink href="#">Shoes</FooterLink>
            <FooterLink href="#">Dress</FooterLink>
          </Grid>

          {/* Follow Us Section */}
          <Grid item xs={12} sm={3}>
            <FooterTitle variant="h6">Follow Us</FooterTitle>
            <Box display="flex" justifyContent="flex-start" gap={1}>
              <SocialIconButton href="#" aria-label="Facebook">
                <Facebook />
              </SocialIconButton>
              <SocialIconButton href="#" aria-label="Twitter">
                <Twitter />
              </SocialIconButton>
              <SocialIconButton href="#" aria-label="Instagram">
                <Instagram />
              </SocialIconButton>
              <SocialIconButton href="#" aria-label="LinkedIn">
                <LinkedIn />
              </SocialIconButton>
            </Box>
          </Grid>
        </Grid>
        
      </Container>
    </FooterContainer>
  );
};

export default Footer;
