import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Container, Button } from '@mui/material';
import './aboutStyle.css';

export default function About() {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO',
      description: 'John is the CEO and has over 20 years of experience in the industry.',
      image: './assets/pic/img5.jpg',
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      description: 'Jane is the CTO and leads the technology department.',
      image: './assets/pic/img22.jpg',
    },
    {
      name: 'Bob Johnson',
      role: 'COO',
      description: 'Bob is the COO and oversees daily operations.',
      image: './assets/pic/img24.jpg',
    },
  ];

  return (
    <div className="about-us-container">
      <div className="about-us-banner">
        <Typography variant="h3" className="about-us-banner-title">
          About Us
        </Typography>
      </div>

      <Container maxWidth="lg" style={{ marginTop: '50px' }}>
        <Typography variant="h4" className="about-us-heading" gutterBottom>
          Our Team
        </Typography>

        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card className="about-us-card">
                <CardMedia
                  component="img"
                  alt={member.name}
                  height="140"
                  image={member.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {member.role}
                  </Typography>
                  <Typography variant="body1">
                    {member.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h4" className="about-us-heading" gutterBottom style={{ marginTop: '50px' }}>
          Our Mission
        </Typography>
        <Typography variant="body1" paragraph>
        Our mission is to deliver high-quality headphones that bring exceptional sound experiences to our customers. We are committed to innovation and sustainability, using eco-friendly materials and cutting-edge technology. We believe in the power of music to connect and inspire, and our goal is to enhance the way people experience sound every day.        </Typography>

        <Typography variant="h4" className="about-us-heading" gutterBottom style={{ marginTop: '50px' }}>
          Our Vision
        </Typography>
        <Typography variant="body1" paragraph>
        Our vision is to be a global leader in the headphone industry, recognized for our commitment to innovation, quality, and sustainability. We aim to set new standards in audio technology and customer satisfaction, making a positive impact on the world through our products.        </Typography>

        <Typography variant="h4" className="about-us-heading" gutterBottom style={{ marginTop: '50px' }}>
          Contact Us
        </Typography>
        <Button variant="contained" color="primary" href="/contact">
          Get in Touch
        </Button>
      </Container>
    </div>
  );
}
