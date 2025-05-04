import CountdownDay from '../CountDownDays/CountDownDay';
import CenterMode from '../Slider/Slider';
import styles from './DealOfMount.module.css'

function DealOfMount() {
    return (
        <div className={styles.dealBox}>
            <div className={styles.timerBox}>
                <div>
                    <h1>People Also Loved</h1>
                    <p>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Scelerisque
                        duis ultrices sollicitudin aliquam sem.
                        Scelerisque duis ultrices sollicitudin
                    </p>
                    <button>Buy Now</button>
                    <h3>Hurry, Before It’s Too Late!</h3>
                    <CountdownDay />
                </div>

            </div>
            <div className={styles.sliderBox}>
                <CenterMode />
            </div>
        </div>
    )
}

export default DealOfMount;