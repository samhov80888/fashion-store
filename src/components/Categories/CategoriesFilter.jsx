import styles from './CategoriesFilter.module.css'
import { categories } from "../../helpers/constants"
import { useDispatch } from 'react-redux'
import { setFilters } from '../../store/slices/productsSlice'
import { useState } from 'react'

function CategoriesFilter() {
    const [activeCategorie, setActiveCategorie] = useState(null)

    const dispatch = useDispatch()

    const handleClick = (item) => {
        dispatch(setFilters(item))
        setActiveCategorie(item)
    }

    return (
        <div className={styles.categoryMain}>
            <h4>Categories</h4>
            <div className={styles.categoryBox}>
                {
                    categories.map((item) => (
                        <button className={
                            activeCategorie === item ? styles.active : null
                        } key={item} onClick={() => handleClick(item)}>{item}</button>
                    ))
                }
            </div>
        </div>
    )

}

export default CategoriesFilter;