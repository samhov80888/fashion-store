import { useParams } from 'react-router-dom';
import { sizeArray } from '../../helpers/constants'
import styles from './SizeFilter.module.css'

function SizeFilter({ display, flexWrap, width }) {

  const { id } = useParams()
  const sizRandom = sizeArray[Math.floor(Math.random() * sizeArray.length)];

  return (
    <div>
      <div className={!id ? styles.sizeText : styles.sizeTextId}>
        <h4>Size</h4>
        <p>{id ? sizRandom.size : null}</p>
      </div>
      <div className={styles.buttonsBox} style={{ display: display, flexWrap: flexWrap, width: width, }}>
        {
          sizeArray.map((item) => (
            <button key={item.id}
              className={id && sizRandom.size === item.size ? styles.active : styles.inactive}
            >
              {item.size}
            </button>
          ))
        }
      </div>
    </div>

  )
}

export default SizeFilter
