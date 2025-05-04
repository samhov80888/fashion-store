import styles from './Links.module.css'
import TopArrow from '../../assets/TopArrow.png'
import Ask from '../../assets/Ask.png'
import Share from '../../assets/Share.png'
import Bus from '../../assets/Bus.png'
import Box from '../../assets/Box.png'
import Visa from '../../assets/Visa.png'


function Links() {
    return (
        <div className={styles.LinksBox}>
            <div />
            <div>
                <div className={styles.imgBox}>
                    <div>
                        <img src={TopArrow} alt="" />
                        <p>Compare</p>
                    </div>
                    <div className={styles.unicueBox}>
                        <img src={Ask} alt="" />
                        <p>Ask a question</p>
                    </div>
                    <div>
                        <img src={Share} alt="" />
                        <p>Share</p>
                    </div>
                </div>
                <div className={styles.deleveryBox}>
                    <div>
                        <img src={Bus} alt="" />
                        <h5>Estimated Delivery:</h5>
                        <p>Jul 30 - Aug 03</p>
                    </div>
                    <div>
                        <img src={Box} alt="" />
                        <h5>Free Shipping & Returns:</h5>
                        <p>On all orders over $75</p>
                    </div>
                </div>
                <div className={styles.visaBox}>
                    <img src={Visa} alt="" />
                </div>
                <div className={styles.GuaranteeBox}>
                    <h2>Guarantee safe & secure checkout</h2>
                </div>
            </div>
        </div>
    )
}

export default Links;