import FeStar from '../../assets/festar.png'
import FeTrue from '../../assets/fetrue.png'
import FeBox from '../../assets/febox.png'
import FeThelepohne from '../../assets/fetelephone.png'
import styles from './Features.module.css'

function Features() {
    return (
        <div className={styles.features}>
            <div className={styles.featuresBox}>
                <img src={FeStar} alt="" />
                <div>
                    <h3>High Quality</h3>
                    <p>crafted from top materials</p>
                </div>
            </div>
            <div className={styles.featuresBox}>
                <img src={FeTrue} alt="" />
                <div>
                    <h3>Warrany Protection</h3>
                    <p>Over 2 years</p>
                </div>
            </div>
            <div className={styles.featuresBox}>
                <img src={FeBox} alt="" />
                <div>
                    <h3>Free Shipping</h3>
                    <p>Order over 150 $</p>
                </div>
            </div>
            <div className={styles.featuresBox}>
                <img src={FeThelepohne} alt="" />
                <div>
                    <h3>24 / 7 Support</h3>
                    <p>Dedicated support</p>
                </div>
            </div>
        </div>
    )
}


export default Features;