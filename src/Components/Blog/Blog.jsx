import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Container } from '@mui/material';
import './BlogStyle.css';

export default function Blog() {
  const blogPosts = [
    {
      title: 'Post 1',
      description: 'This is a short description of blog post 1.',
      image: './assets/blogs/blog-1.jpg',
    },
    {
      title: 'Post 2',
      description: 'This is a short description of blog post 2.',
      image: './assets/blogs/blog-2.jpg',
    },
    {
      title: 'Post 3',
      description: 'This is a short description of blog post 3.',
      image: './assets/blogs/blog-3.jpg',
    },
    {
      title: 'Post 4',
      description: 'This is a short description of blog post 3.',
      image: './assets/pic/img20.jpg',
    },
    {
      title: 'Post 5',
      description: 'This is a short description of blog post 3.',
      image: './assets/pic/img21.jpg',
    },
    {
      title: 'Post 6',
      description: 'This is a short description of blog post 3.',
      image: './assets/pic/img22.jpg',
    },
    {
      title: 'Post 7',
      description: 'This is a short description of blog post 3.',
      image: './assets/pic/img23.jpg',
    },
    {
      title: 'Post 8',
      description: 'This is a short description of blog post 3.',
      image: './assets/pic/img24.jpg',
    },
    {
      title: 'Post 9',
      description: 'This is a short description of blog post 3.',
      image: './assets/pic/img5.jpg',
    },
   
  ];

  return (
    <div className="blog-container">
      <div className="blog-banner">
        <Typography variant="h3" className="blog-banner-title">
          Our Blog
        </Typography>
      </div>

      <Container maxWidth="lg" style={{ marginTop: '50px' }}>
        <Grid container spacing={4}>
          {blogPosts.map((post, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card className="blog-card">
                <CardMedia
                  component="img"
                  alt={post.title}
                  height="140"
                  image={post.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {post.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
