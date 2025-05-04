import { Outlet } from 'react-router-dom'
import '../assets/styles/Layout.css'
import { useState } from 'react'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CartModal from '../components/CartModal/CartModal';
import styles from './Layout.module.css'

function Layout() {

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
  };

  return (
    <div className="layout">
      <Header onCartClick={toggleCart} />
      <CartModal isOpen={isCartOpen} onClose={toggleCart} />
      <main onClick={() => setIsCartOpen(false)} className={isCartOpen ? styles.opac : null}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
