import styles from './Subscribe.module.css'
import Man from '../../assets/men.png'
import Woooman from '../../assets/woomen.png'

function Subscribe() {
    return (
        <div className={styles.subscribeBox}>
            <div>
                <img src={Man} alt="" />
            </div>
            <div className={styles.subDescription}>
                <h1>Subscribe To Our Newsletter</h1>
                <p>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                    Scelerisque duis ultrices sollicitudin
                    aliquam sem. Scelerisque duis ultrices sollicitudin
                </p>
                <input type="email" name="email" placeholder='michael@ymail.com' />
                <button>Subscribe Now</button>
            </div>
            <div>

                <img src={Woooman} alt="" />
            </div>
        </div>
    )
}

export default Subscribe;