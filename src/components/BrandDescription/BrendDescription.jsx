import styles from './BrandDescription.module.css'
import Brend from '../../assets/Brand.png'
import { sizeArray } from '../../helpers/constants';

function BrendDescription() {

    const sizRandom = sizeArray[Math.floor(Math.random() * sizeArray.length)];

    const unicueSize = sizeArray?.filter((item) => sizRandom.size === item.size)

    return (
        <div className={styles.BrendBox}>
            <div className={styles.BrendImg}>
                <img src={Brend} alt="" className={styles.BrandImgOne} />
            </div>
            <div className={styles.BrendText}>
                <h5>Women Collection</h5>
                <h2>Peaky Blinders</h2>
                <a>DESCRIPTION</a>
                <p className={styles.textMain}>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                    Scelerisque duis ultrices sollicitudin
                    aliquam sem.
                    Scelerisque duis ultrices sollicitudin.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Scelerisque duis.
                </p>
                <div className={styles.priceBox}>
                    <p>Size:</p>
                    {
                        unicueSize?.map((item) => (
                            <button key={item.id}

                            >
                                {item.size}
                            </button>
                        ))
                    }
                </div>
                <h3>${Math.floor(Math.random() * 200)}</h3>
                <button className={styles.priceBtn}>Buy Now</button>
            </div>
        </div>
    )
}

export default BrendDescription;