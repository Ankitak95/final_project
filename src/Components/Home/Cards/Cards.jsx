import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import './CardsStyle.css';

const items = [
    {
        title: "Enjoy With",
        product: "Earphone",
        buttonText: "Browse",
        image: "assets/category/earphone.png",
        backgroundColor: "#333",
        textColor: "white"
    },
    {
        title: "Enjoy With",
        product: "Gadget",
        buttonText: "Browse",
        image: "assets/category/watch.png",
        backgroundColor: "#f5a623",
        textColor: "black"
    },
    {
        title: "Enjoy With",
        product: "Laptop",
        buttonText: "Browse",
        image: "assets/category/macbook.png",
        backgroundColor: "#d32f2f",
        textColor: "white"
    },
    {
        title: "Enjoy With",
        product: "Laptop",
        buttonText: "Browse",
        image: "assets/category/gaming.png",
        backgroundColor: "#e0e0e0",
        textColor: "black"
    },
    {
        title: "Enjoy With",
        product: "VR",
        buttonText: "Browse",
        image: "assets/category/vr.png",
        backgroundColor: "#4caf50",
        textColor: "white"
    },
    {
        title: "Enjoy With",
        product: "Gadget",
        buttonText: "Browse",
        image: "assets/category/speaker.png",
        backgroundColor: "#2196f3",
        textColor: "white"
    }
];

function Cards() {
    return (
        <Grid container spacing={2} padding={2}>
            {items.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Box
                        className="promotional-card"
                        style={{ backgroundColor: item.backgroundColor, color: item.textColor }}
                    >
                        <Typography variant="h6">{item.title}</Typography>
                        <Typography variant="h4" component="div" className="promotional-product">
                            {item.product.split(' ').map((word, idx) => (
                                <span key={idx}>{word}<br /></span>
                            ))}
                        </Typography>
                        <Button variant="contained" color="error">
                            {item.buttonText}
                        </Button>
                        <img src={item.image} alt={item.product} className="promotional-image" />
                    </Box>
                </Grid>
            ))}
        </Grid>
    );
}

export default Cards;
