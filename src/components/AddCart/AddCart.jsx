import { useState } from 'react';
import styles from './AddCart.module.css';

function AddCart({ product }) {
    const [count, setCount] = useState(1);

    const handleAddToCard = () => {
        const cardItems = JSON.parse(localStorage.getItem('cardItems')) || [];

        const existingIndex = cardItems.findIndex(item => item.id === product.id);

        if (existingIndex !== -1) {
            cardItems[existingIndex].count += count;
        } else {
            cardItems.push({ ...product, count });
        }

        localStorage.setItem('cardItems', JSON.stringify(cardItems));
        window.dispatchEvent(new Event('cartUpdated'));
    };

    const handleInputChange = (e) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value >= 1) {
            setCount(value);
        }
    };

    return (
        <div className={styles.addCartBox}>
            <h4>Quantity</h4>
            <div className={styles.btnBox}>
                <div className={styles.countBox}>
                    <button
                        onClick={() => setCount(prev => (prev > 1 ? prev - 1 : 1))}
                    >-</button>
                    <input
                        type="number"
                        value={count}
                        onChange={handleInputChange}
                        min={1}
                    />
                    <button onClick={() => setCount(prev => prev + 1)}>+</button>
                </div>
                <button onClick={handleAddToCard} className={styles.btn}>
                    Add to cart
                </button>
            </div>
        </div>
    );
}

export default AddCart;
