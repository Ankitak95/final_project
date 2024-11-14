import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';

// Dummy product data
const products = [
    { id: 1, name: 'Boat Headphone', price: '$120', image: './assets/product/img1.jpg' },
    { id: 2, name: 'Rocky Mountain', price: '$420', image: '/assets/product/img8.jpg' },
    { id: 3, name: 'Goggles', price: '$320', image: '/assets/product/img3.jpg' },
    { id: 4, name: 'Printed', price: '$220', image: '/assets/product/img4.jpg' },
    { id: 5, name: 'Boat Headphone', price: '$120', image: '/assets/product/img5.jpg' },
    { id: 6, name: 'Rocky Mountain', price: '$420', image: '/assets/product/img6.jpg' },
    { id: 7, name: 'Goggles', price: '$320', image: '/assets/product/img7.jpg' },
    { id: 8, name: 'Printed', price: '$220', image: '/assets/product/img8.jpg' },

];

const Product = () => {
    return (
        <Box sx={{ py: 8, textAlign: 'center', bgcolor:'rgb(101, 60, 182)' }}>
            <Container maxWidth="lg">
                <Typography 
                    variant="h2" 
                    gutterBottom 
                    sx={{ 
                        fontWeight: 'bold', 
                        textAlign: 'center', 
                        mb: 6,
                        fontSize: { xs: '2.5rem', md: '3.5rem' },
                        color: '#000'
                    }}
                >
                    Our Products
                </Typography>
                <Typography variant="subtitle1" gutterBottom sx={{ mb: 6, color: '#666' }}>
                    Explore Our Products
                </Typography>
                <Grid container spacing={6} justifyContent="center">
                    {products.map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Card sx={{ maxWidth: 345, margin: 'auto', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                                <CardMedia
                                    component="img"
                                    alt={product.name}
                                    height="200"
                                    image={product.image}
                                    title={product.name}
                                />
                                <CardContent>
                                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {product.price}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Product;
