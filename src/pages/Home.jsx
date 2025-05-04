import { Link, useNavigate } from 'react-router-dom'
import styles from './Home.module.css'
import { shallowEqual, useSelector } from 'react-redux';
import { allProductsSelector, loadingSelector } from '../store/selectors/productsSelector';
import ProductsController from '../controllers/productsController';
import { useEffect } from 'react';

function Home() {

  const products = useSelector(allProductsSelector, shallowEqual);
  const loading = useSelector(loadingSelector, shallowEqual);

  const navigate = useNavigate()

  useEffect(() => {
    ProductsController.getAllProducts()
  }, [])

  return (
    <>
      {
        loading ?
          <div className={styles.loaderWrapper}>
            <div className={styles.spinner}></div>
            <p>Loading...</p>
          </div> : <section className={styles.home}>
            <div className={styles.preview}>
              <h2>Featured Products</h2>
              <div className={styles.products}>
                {products.map(product => (
                  <Link to={`/product/${product.id}`} className={styles.productCard} key={product.id}>
                    <img src={product.image} alt={product.title} />
                    <h3>{product.title}</h3>
                    <p>${product.price}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
      }
    </>

  )
}

export default Home
