import React from 'react';
import { Grid, TextField, Button, Typography, Card, CardContent, Container } from '@mui/material';
import { Phone as PhoneIcon, LocationOn as LocationOnIcon, AccessTime as AccessTimeIcon, Email as EmailIcon, Facebook as FacebookIcon, Twitter as TwitterIcon, Star as StarIcon } from '@mui/icons-material';
import './contactStyle.css';

export default function Contact() {
  return (
    <div className="background-container">
      <div className="banner-map-container">
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.5484087212043!2d88.39189317518425!3d22.647587732063623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDM4JzUxLjAiTiA4OMKwMjMnMjAuNyJF!5e0!3m2!1sen!2sin!4v1633836357563!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      <Container maxWidth="lg" style={{ marginTop: '50px' }}>
        <Typography variant="h4" className="contact-heading" gutterBottom>
          Contact Us
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card className="contact-card">
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Contact Information
                </Typography>
                <div className="info-item">
                  <PhoneIcon />
                  <Typography variant="body1">
                    CALL US
                    <br />
                    123-456-789
                  </Typography>
                </div>
                <div className="info-item">
                  <LocationOnIcon />
                  <Typography variant="body1">
                    LOCATION
                    <br />
                    Kolkata
                  </Typography>
                </div>
                <div className="info-item">
                  <AccessTimeIcon />
                  <Typography variant="body1">
                    OFFICE HOURS
                    <br />
                    Mon - Fri: 10 am - 8 pm
                    <br />
                    Sat, Sun: Closed
                  </Typography>
                </div>
                <div className="info-item">
                  <EmailIcon />
                  <Typography variant="body1">
                    EMAIL
                    <br />
                    info@example.com
                  </Typography>
                </div>
                <div className="social-icons-container">
                  <Button className="social-icon" variant="contained" startIcon={<FacebookIcon />}>
                    Facebook
                  </Button>
                  <Button className="social-icon" variant="contained" startIcon={<TwitterIcon />}>
                    Twitter
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className="contact-card">
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Contact Form
                </Typography>
                <TextField
                  className="contact-form-text-field"
                  label="Enter your Name"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                />
                <TextField
                  className="contact-form-text-field"
                  label="Enter your Email"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                />
                <TextField
                  className="contact-form-text-field"
                  label="Enter your Subject"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                />
                <TextField
                  className="contact-form-text-field"
                  label="Enter your Message"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  multiline
                  rows={4}
                />
                <Button
                  className="submit-button"
                  variant="contained"
                  fullWidth
                  size="large"
                >
                  SUBMIT
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Typography variant="h4" className="customer-heading" gutterBottom style={{ marginTop: '50px' }}>
          Customer Testimonials
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card className="testimonial-card">
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  John Doe
                </Typography>
                <Typography variant="body1" gutterBottom>
                  "Great service and support. Highly recommended!"
                </Typography>
                <div className="star-rating">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card className="testimonial-card">
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Jane Smith
                </Typography>
                <Typography variant="body1" gutterBottom>
                  "Professional and reliable. Excellent experience."
                </Typography>
                <div className="star-rating">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card className="testimonial-card">
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Bob Johnson
                </Typography>
                <Typography variant="body1" gutterBottom>
                  "Fast and efficient. Very satisfied with the service."
                </Typography>
                <div className="star-rating">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
