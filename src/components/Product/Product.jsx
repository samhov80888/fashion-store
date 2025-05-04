import { shallowEqual, useSelector } from "react-redux";
import { allProductsSelector, loadingSelector } from "../../store/selectors/productsSelector";
import styles from './ProductMain.module.css'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ProductsController from "../../controllers/productsController";

function Products() {

    const products = useSelector(allProductsSelector, shallowEqual);
    const loading = useSelector(loadingSelector, shallowEqual);

    const navigate = useNavigate()

    useEffect(() => {
        ProductsController.getAllProducts()
    }, [])

    const handleClick = (id) => {
        navigate(`/product/${id}`)
    }


    return (
        <>
            {
                loading ?
                    <div className={styles.loaderWrapper}>
                        <div className={styles.spinner}></div>
                        <p>Loading...</p>
                    </div> :
                    <div className={styles.productGrid} >
                        {products.map((product) => (
                            <div className={styles.productCard} key={product.id}>
                                <img src={product.image} alt={product.title} onClick={() => handleClick(product.id)} />
                                <h3>{product.title}</h3>
                                <p>${product.price}</p>
                            </div>
                        ))}
                    </div>
            }
        </>

    )
}

export default Products;