import React, { useState } from 'react';
import styles from './styles.module.scss';
import Bolt from '../../assets/bolt.png'
import Book from '../../assets/book.png'
import Shopping from '../../assets/shopping.png'
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const BottomNavbar = ({ handleMenuClick }) => {
  const [activeMenu, setActiveMenu] = useState(window.location.pathname); // State to track active menu
  const navigate = useNavigate(); 
  const cartCount = useSelector((state) => state.cart.count);
  
  

  // Function to handle menu item clicks
  const handleClick = (menu) => {
    setActiveMenu(menu); // Update active menu state
    handleMenuClick(menu);
    navigate(`/${menu}`); // Update URL to match the clicked menu
  };


  return (
    <div className={styles.container}>
     <div className={styles.navbarIcons}>
      <div className={styles.navbarIcon} >
        <div className={styles.box}>
          <img src={Bolt} alt="" />
        </div>
      </div>
      <div className={styles.navbarIcon}>
        <div className={styles.box}>
          <img src={Book} alt="" />
        </div>
      </div>
      <div className={styles.navbarIcon} onClick={() => handleClick("place-order")}>
        <div className={styles.box}>
          <img src={Shopping} alt="" />
          {cartCount > 0 && (
            <div className={styles.cartCount}>{cartCount}</div>
          )}
        </div>
      </div>

      </div>
    </div>
  )
}

export default BottomNavbar;