import { useEffect, useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import ProductCard from '../components/Product/ProductCard';
import ProductsController from '../controllers/productsController';
import { allProductsSelector, filteredProductsSelector, loadingSelector } from '../store/selectors/productsSelector';
import styles from './Home.module.css';
import Btn1 from '../assets/btn1.png'
import Btn2 from '../assets/btn2.png'
import Btn3 from '../assets/btn3.png'
import Btn4 from '../assets/btn4.png'
import Btn5 from '../assets/btn5.png'
import Filters from '../components/Filters/Filters';
import Fashion from '../components/Fashion/Fashion';

function Shop() {
    const products = useSelector(allProductsSelector, shallowEqual);
    const filteredProducts = useSelector(filteredProductsSelector, shallowEqual);
    const loading = useSelector(loadingSelector, shallowEqual);

    const [position, setPosition] = useState(false)

    useEffect(() => {
        ProductsController.getAllProducts()
    }, [])

    return (
        <div>
            <div>
                <Fashion />
            </div>
            <div className={styles.main}>
                <Filters />
                {loading ? <div className="page">Loading...</div>
                    :
                    <div className={styles.productMain}>
                        <div className={styles.productStyle}>
                            <img src={Btn5} onClick={() => setPosition(true)} alt="" />
                            <img src={Btn2} onClick={() => setPosition(false)} alt="" />
                        </div>
                        <div className={position ? styles.productPosition : styles.products}>
                            {
                                filteredProducts.length ?
                                    filteredProducts?.map((product) => (
                                        <ProductCard key={product.id} product={product} />
                                    )) :
                                    products?.map((product) => (
                                        <ProductCard key={product.id} product={product} />
                                    ))
                            }
                        </div>
                    </div>

                }
            </div>
        </div>
    )
}

export default Shop
