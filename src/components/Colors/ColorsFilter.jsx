import { useParams } from 'react-router-dom';
import { colors } from '../../helpers/constants';
import styles from './ColorsFilter.module.css';

function ColorsFilter() {

  const { id } = useParams();
  const colorSlice = colors.slice(0, 3)
  const colorRandom = colorSlice[Math.floor(Math.random() * colorSlice.length)];

  return (
    <div>
      <h4 className={id ? styles.colorsTitle : null}>Colors</h4>
      <div className={!id ? styles.buttonsBox : styles.buttonsBoxId}>
        {
          !id ? colors.map((item) => (
            <button
              key={item.id}
              style={{
                backgroundColor: item.color,
                width: '25px',
                height: '25px',
                borderRadius: '50%',
                border: 'none',
                cursor: 'pointer'
              }} />
          )) : colors.slice(0, 3).map((item) => (
            <div key={item.id} className={id && colorRandom.color === item.color ? styles.active : null}>
              <button
                style={{
                  backgroundColor: item.color,
                  width: '25px',
                  height: '25px',
                  borderRadius: '50%',
                  border: 'none',
                  cursor: 'pointer'
                }} />
            </div>
          ))
        }
      </div>
    </div>

  )
}

export default ColorsFilter;
