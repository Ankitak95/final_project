import React, { useEffect, useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import './banner.css';

export default function Banner() {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-12-31T00:00:00') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{' '}
      </span>
    );
  });

  return (
    <div className="timer-banner">
      <Container maxWidth="sm" className="timer-container">
        <Typography variant="h5" className="timer-message">
          Special Offer Ends In:
        </Typography>
        <Typography variant="h6" className="timer-countdown">
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </Typography>
        <Button variant="contained" color="primary" className="shop-now-button">
          Shop Now
        </Button>
      </Container>
    </div>
  );
}
