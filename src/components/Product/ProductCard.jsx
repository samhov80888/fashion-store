import { useNavigate } from 'react-router-dom'
import styles from "./Product.module.css";

function ProductCard({ product }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/product/${product.id}`)
  }


  return (
    <div className={styles.productCard}>
      <div className={styles.imgBox} onClick={handleClick}>
        <img src={product.image} alt={product.title} className="product-image" />
      </div>
      <h3>{product?.title?.substring(0, 20)}</h3>
      <p>${product.price}</p>
      <p>{product.category}</p>
    </div>
  )
}

export default ProductCard
