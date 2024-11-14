import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SecurityIcon from '@mui/icons-material/Security';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

// FeatureCard Component
const FeatureCard = ({ icon, title, description }) => {
    return (
        <Box 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '30px',
                borderRadius: '20px',
                boxShadow: 'rgb(101, 60, 182)',
                backgroundColor: 'white' // Ensure a background color for better visibility
            }}
        >
            <Box sx={{ width: '60px', height: '50px', marginBottom: '20px', color:'red'}}>{icon}</Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{title}</Typography>
            <Typography variant="body2" sx={{ color: 'gray' }}>{description}</Typography>
        </Box>
    );
};

// FeatureGrid Component
const features = [
    {
        icon: <LocalShippingIcon style={{ fontSize: 60 }} />,
        title: "Free Shipping",
        description: "Free Shipping On All Orders"
    },
    {
        icon: <AttachMoneyIcon style={{ fontSize: 60 }} />,
        title: "Safe Money",
        description: "30 Days Money Back"
    },
    {
        icon: <SecurityIcon style={{ fontSize: 60 }} />,
        title: "Secure Payment",
        description: "All Payment Secure"
    },
    {
        icon: <HeadsetMicIcon style={{ fontSize: 40 }} />,
        title: "Online Support 24/7",
        description: "Technical Support 24/7"
    }
];

const FeatureGrid = () => {
    return (

        <Grid container spacing={4} justifyContent="center">
            {features.map((feature, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                    <FeatureCard
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

// Main App Component
const App = () => {
    return (
        <Container>
            <FeatureGrid />
        </Container>
    );
};

export default App;
