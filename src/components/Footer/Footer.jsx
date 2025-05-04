import { Link, NavLink } from 'react-router-dom'
import styles from './Footer.module.css'
import { routes } from '../../routes'

function Footer() {
  return (
    <footer className={styles.footerBox}>
      <div className={styles.footerMain}>
        <div className={styles.footerLinks}>
          <Link to="/" className={styles.headerLink}>FASCO</Link>
          <div>
            <nav>
              {
                routes.map(route => (
                  <NavLink className={({ isActive }) => isActive ? styles.active : ""} to={route.path} key={route.path}>{route.name}</NavLink>
                ))
              }
            </nav>
          </div>
        </div>
        <div>
          <p>Copyright © 2022 FASCO . All Rights Reseved.</p>
        </div>
      </div>


    </footer>
  )
}

export default Footer
