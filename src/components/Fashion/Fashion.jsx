import styles from "./Fashion.module.css";
import { Link } from 'react-router-dom'
import arrow from '../../assets/arrow.png'

function Fashion() {
  return (
    <div className={styles.fashion}>
      <h1>Fashion</h1>
      <div className={styles.linkBox}>
        <nav>
          <Link to="/">Home</Link>
          <img src={arrow} alt="" />
          <Link to="/#">Fashion</Link>
        </nav>
      </div>
    </div>
  )
}

export default Fashion;