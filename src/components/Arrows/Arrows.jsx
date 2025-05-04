import React from "react";
import styles from "../Slider/Slider.module.css";
import SLiderLine from '../../assets/SliderLine.png'

export const NextArrow = ({ className, onClick }) => (
    <div className={`${className} ${styles.arrow} ${styles.next}`} onClick={onClick}>
        <span>
            <img src={SLiderLine} alt="" />
        </span>
    </div>
);

export const PrevArrow = ({ className, onClick }) => (
    <div className={`${className} ${styles.arrow} ${styles.prev}`} onClick={onClick}>
        <span className={styles.arrowPrev}>
            <img src={SLiderLine} alt="" />
        </span>
    </div>
);
