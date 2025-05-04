import ColorsFilter from '../Colors/ColorsFilter'
import PricesFilter from '../Prices/PricesFilter'
import SizeFilter from '../Size/SizeFilter'
import CategoriesFilter from '../Categories/CategoriesFilter'
import styles from './Filters.module.css'

function Filters() {
    return <div className={styles.filtersBox}>
        <div>
            <h1>Filters</h1>
            <SizeFilter display='flex' flexWrap='wrap' width='80%' />
        </div>
        <div>
            <ColorsFilter />
        </div>
        <div>
            <PricesFilter />
        </div>
        <div>
            <CategoriesFilter />
        </div>
    </div>
}

export default Filters