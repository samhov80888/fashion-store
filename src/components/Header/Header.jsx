import { Link, NavLink } from 'react-router-dom';
import styles from "./Header.module.css";
import shop from '../../assets/shop.png';
import star from '../../assets/star.png';
import people from '../../assets/people.png';
import search from '../../assets/search.png';
import { routes } from '../../routes';
import { useEffect, useState } from 'react';

function Header({ onCartClick }) {

  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = () => {
    const items = JSON.parse(localStorage.getItem('cardItems')) || [];

    const countMap = {};
    items.forEach(item => {
      countMap[item.id] = (countMap[item.id] || 0) + 1;
    });

    const totalCount = Object.values(countMap).reduce((sum, val) => sum + val, 0);

    setCartCount(totalCount);
  };

  useEffect(() => {
    updateCartCount();

    window.addEventListener('cartUpdated', updateCartCount);

    return () => {
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.headerLink}>FASCO</Link>

      <div className={styles.linkDiv}>
        <nav>
          {routes.map(route => (
            <NavLink
              className={({ isActive }) => isActive ? styles.active : ""}
              to={route.path}
              key={route.path}
            >
              {route.name}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        ☰
      </div>

      {menuOpen && (
        <div className={styles.linkDivMedia}>
          <nav>
            {routes.map(route => (
              <NavLink
                className={({ isActive }) => isActive ? styles.active : ""}
                to={route.path}
                key={route.path}
              >
                {route.name}
              </NavLink>
            ))}
          </nav>
          <div className={styles.icons}>
            <HeaderIcons cartCount={cartCount} onCartClick={onCartClick} />
          </div>
        </div>
      )}

      <div className={styles.icons}>
        <HeaderIcons cartCount={cartCount} onCartClick={onCartClick} />
      </div>
    </header>
  );
}

function HeaderIcons({ cartCount, onCartClick }) {
  return (
    <div>
      <button><img src={search} alt="search" /></button>
      <button><img src={people} alt="user" /></button>
      <button><img src={star} alt="favorite" /></button>
      <button onClick={onCartClick} className={styles.btnCount}>
        <img src={shop} alt="cart" />
        <span>{cartCount}</span>
      </button>
    </div>
  );
}

export default Header;
