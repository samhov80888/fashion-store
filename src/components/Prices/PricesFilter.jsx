import styles from './PricesFilter.module.css'
import { prices } from "../../helpers/constants"
import { useDispatch } from 'react-redux'
import { setFilters } from '../../store/slices/productsSlice'
import { useState } from 'react'

function PricesFilter() {
    const [activePrice, setActivePrice] = useState(null)

    const dispatch = useDispatch()

    const handleClick = (item) => {
        dispatch(setFilters(item))
        setActivePrice(item)
    }

    return (
        <div>
            <h4>Prices</h4>
            <div className={styles.pricesBox}>
                {
                    prices.map((item) => (
                        <button className={
                            activePrice?.min === item?.min && activePrice?.max === item?.max ? styles.active : null
                        } key={item.id} onClick={() => handleClick(item)}>${item.min} - ${item.max}</button>
                    ))
                }
            </div>
        </div>
    )

}

export default PricesFilter;