import { useEffect, useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import ProductCard from '../components/Product/ProductCard';
import ProductsController from '../controllers/productsController';
import { allProductsSelector, filteredProductsSelector, loadingSelector } from '../store/selectors/productsSelector';
import styles from './Home.module.css';
import Btn2 from '../assets/btn2.png';
import Btn5 from '../assets/btn5.png';
import Filters from '../components/Filters/Filters';
import Fashion from '../components/Fashion/Fashion';

function Shop() {
    const products = useSelector(allProductsSelector, shallowEqual);
    const filteredProducts = useSelector(filteredProductsSelector, shallowEqual);
    const loading = useSelector(loadingSelector, shallowEqual);

    const [position, setPosition] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(10);

    useEffect(() => {
        ProductsController.getAllProducts();
    }, []);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.length ? filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct) : products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const totalProducts = filteredProducts.length ? filteredProducts.length : products.length;
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <div>
                <Fashion />
            </div>
            <div className={styles.main}>
                <Filters />
                {loading ? (
                    <div className={styles.loaderWrapper}>
                        <div className={styles.spinner}></div>
                        <p>Loading...</p>
                    </div>
                ) : (
                    <div className={styles.productMain}>
                        <div className={styles.productStyle}>
                            <img src={Btn5} onClick={() => setPosition(true)} alt="" />
                            <img src={Btn2} onClick={() => setPosition(false)} alt="" />
                        </div>
                        <div className={position ? styles.productPosition : styles.products}>
                            {currentProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>

                        <div className={styles.pagination}>
                            {pageNumbers.map((number) => (
                                <button
                                    key={number}
                                    onClick={() => paginate(number)}
                                    className={currentPage === number ? styles.activePage : ''}
                                >
                                    {number}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Shop;
