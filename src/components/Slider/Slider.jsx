import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styles from "./Slider.module.css";
import { shallowEqual, useSelector } from "react-redux";
import { allProductsSelector } from "../../store/selectors/productsSelector";
import ProductsController from "../../controllers/productsController";
import { NextArrow, PrevArrow } from "../Arrows/Arrows";

const CustomSlider = () => {

    const products = useSelector(allProductsSelector, shallowEqual);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        ProductsController.getAllProducts()
    }, [])

    const settings = {
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 3,
        focusOnSelect: true,
        afterChange: (index) => setCurrent(index),
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <Slider {...settings}>
            {products?.map((item, index) => (
                <div
                    key={item.id}
                    className={`${styles.slideItem} ${index === current - 1 ? styles.active : ""}`}
                >
                    <div className={styles.slideContent}>
                        <img src={item.image} alt="" />
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default CustomSlider;
