import styles from "./ProductDetailInfo.module.css";
import stars from '../../assets/starsDetail.png'
import star from '../../assets/star.png'
import ayes from '../../assets/ayes.png'
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import SizeFilter from "../Size/SizeFilter";
import ColorsFilter from "../Colors/ColorsFilter";
import AddCart from "../AddCart/AddCart";

function ProductDetailInfo({ product }) {

    return (
        <div className={styles.mainBox}>
            <div className={styles.imgBox}>
                <img src={product.image} alt="" />
            </div>
            <div className={styles.descriptionBox}>
                <p>Fasco</p>
                <div className={styles.titleBox}>
                    <div>
                        <h2>{product.title?.substring(0, 20)}</h2>
                        <div className={styles.reatingBox}>
                            <img src={stars} alt="" />
                            <span>({Math.floor(product.rating?.rate)})</span>
                        </div>
                    </div>
                    <div className={styles.starBox}>
                        <img src={star} alt="" />
                    </div>
                </div>
                <div className={styles.pricesBox}>
                    <h3>${product.price}</h3>
                    <p>${Math.floor(Math.random() * 500)}</p>
                    <span>SAVE {Math.floor(Math.random() * 50)}%</span>
                </div>
                <div className={styles.ayesBox}>
                    <img src={ayes} alt="" />
                    <p>{Math.floor(Math.random() * 500)} people are viewing this right now</p>
                </div>
                <div className={styles.timerBox}>
                    <p>Hurry up! Sale ends in:</p>
                    <CountdownTimer color={'#FF706B'} />
                </div>
                <div className={styles.stockBox}>
                    <p>Only {Math.floor(Math.random() * 50)} item(s) left in stock!</p>
                    <div className={styles.linerBox}>
                        <hr className={styles.lineOne} />
                        <hr style={{
                            border: '3px solid #EF2D2D',
                            position: 'absolute',
                            zIndex: '1',
                            top: '0',
                            margin: '0',
                            width: Math.floor(Math.random() * 80),
                            borderRadius: '2px'
                        }} />
                    </div>
                </div>
                <div className={styles.sizeBox}>
                    <SizeFilter display='flex' flexWrap='wrap' width='100%' />
                </div>
                <div>
                    <ColorsFilter />
                </div>
                <div>
                    <AddCart product={product} />
                </div>
            </div>
        </div>
    )
}

export default ProductDetailInfo;