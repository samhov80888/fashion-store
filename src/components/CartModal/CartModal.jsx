import React, { useEffect, useState } from 'react';
import styles from './CartModal.module.css';

const CartModal = ({ isOpen, onClose }) => {
    const [cartItems, setCartItems] = useState([]);

    const totalPrice = cartItems.reduce((total, item) => {
        return total + item.price * item.count;
    }, 0);

    const handleQuantityChange = (id, type) => {
        const items = JSON.parse(localStorage.getItem('cardItems')) || [];

        const updated = items.map(item => {
            if (item.id === id) {
                if (type === 'increment') {
                    return { ...item, count: item.count + 1 };
                } else if (type === 'decrement' && item.count > 1) {
                    return { ...item, count: item.count - 1 };
                }
            }
            return item;
        });

        localStorage.setItem('cardItems', JSON.stringify(updated));
        setCartItems(updated);
        window.dispatchEvent(new Event('cartUpdated'));
    };

    const handleRemoveItem = (id) => {
        const items = JSON.parse(localStorage.getItem('cardItems')) || [];
        const updated = items.filter(item => item.id !== id);

        localStorage.setItem('cardItems', JSON.stringify(updated));
        setCartItems(updated);
        window.dispatchEvent(new Event('cartUpdated'));
    };

    useEffect(() => {
        if (isOpen) {
            const items = JSON.parse(localStorage.getItem('cardItems')) || [];
            setCartItems(items);
        }
    }, [isOpen]);

    return (
        <div className={`${styles.overlay} ${isOpen ? styles.show : ''}`}>
            <div className={styles.cart}>
                <div className={styles.title}>
                    <h2>Shopping Cart</h2>
                    <button className={styles.closeButton} onClick={onClose}>×</button>
                </div>

                <div className={styles.priceDescription}>
                    <p>Buy <span>{Math.floor(totalPrice)}</span>$ more and get <span>Free shipping</span></p>
                </div>

                <div>
                    {cartItems.map((item, index) => (
                        <div key={index} className={styles.productDetailBox}>
                            <img src={item.image} alt={item.title} />
                            <div>
                                <h4>{item.title?.substring(0, 20)}</h4>
                                <p>Color: red</p>
                                <h5>${Math.floor(item.price * item.count)}</h5>

                                <div className={styles.countBox}>
                                    <span onClick={() => handleQuantityChange(item.id, 'decrement')}>-</span>
                                    <h4>{item.count}</h4>
                                    <span onClick={() => handleQuantityChange(item.id, 'increment')}>+</span>
                                </div>

                                <button onClick={() => handleRemoveItem(item.id)} className={styles.removeBtn}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}

                    <div className={styles.checkboxBox}>
                        <input type="checkbox" id="cb1" />
                        <p>For <span>${Math.floor(totalPrice)}</span> please wrap the product</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartModal;
