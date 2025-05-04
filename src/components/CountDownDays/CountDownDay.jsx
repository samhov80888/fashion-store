import React, { useState, useEffect } from 'react';
import styles from './CountDown.module.css'

const CountdownDay = () => {

    const targetDate = '2025-05-10T18:00:00';

    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        if (difference <= 0) return null;

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            const updatedTime = calculateTimeLeft();
            setTimeLeft(updatedTime);

            if (!updatedTime) {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    if (!timeLeft) {
        return <div>Ժամկետն ավարտվել է</div>;
    }

    const formatTime = (val) => String(val).padStart(2, '0');

    return (
        <div className={styles.countsBox}>
            <div className={styles.count}>
                <span>{formatTime(timeLeft.days)}</span>
                <span>{formatTime(timeLeft.hours)}</span>
                <span>{formatTime(timeLeft.minutes)}</span>
                <span>{formatTime(timeLeft.seconds)}</span>
            </div>
        </div>
    );
};

export default CountdownDay;
