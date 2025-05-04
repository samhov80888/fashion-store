import React, { useState, useEffect, useRef } from 'react';

const CountdownTimer = ({ color }) => {
    const initialTime = 6 * 60 * 60 * 1000;
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 0) {
                    clearInterval(intervalRef.current);
                    return 0;
                }
                return prevTime - 100;
            });
        }, 100);

        return () => clearInterval(intervalRef.current);
    }, []);

    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((timeLeft % 1000) / 100);

    const formatTime = (val) => String(val).padStart(2, '0');

    return (
        <div style={{ fontSize: '2rem', textAlign: 'center', color: color }}>
            {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}:{milliseconds}
        </div>
    );
};

export default CountdownTimer;