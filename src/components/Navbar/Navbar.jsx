import React, { useState } from 'react'
import styles from './Navbar.module.scss'
import logo from '../../assets/logo.png'
import account from '../../assets/record.png'
import hash from '../../assets/Group.png';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(window.location.pathname); // State to track active menu
    const navigate = useNavigate(); // Hook to get the navigate function from react-router-dom
  
    // Function to handle menu item clicks
    const handleMenuClick = (menu) => {
      setActiveMenu(menu); // Update active menu state
      navigate(`/${menu}`); // Update URL to match the clicked menu
    };



  return (
    <div className={styles.container}>

     <div className={styles.head}>
        <div className={styles.left}>
            <img src={logo} alt="logo" />
            <span className={styles.heading}>Sacred Cafe</span>
        </div>

        <div className={styles.right}>
            <div className={styles.iconBox}>
                <img src={account} alt="account" />
            </div>
            <div className={styles.iconBox}>
                <img src={hash} alt="hash" />
            </div>
        </div>
        </div>
        <div>
          <ul className={styles.menuList}>
            <li
              className={`${styles.menuItem} ${activeMenu === 'special' ? styles.active : ''}`}
              onClick={() => handleMenuClick('special')}
            >
              Special
            </li>
            <li
              className={`${styles.menuItem} ${activeMenu === 'main' ? styles.active : ''}`}
              onClick={() => handleMenuClick('main')}
            >
              Main
            </li>
            <li
              className={`${styles.menuItem} ${activeMenu === 'desserts' ? styles.active : ''}`}
              onClick={() => handleMenuClick('desserts')}
            >
              Desserts
            </li>
            <li
              className={`${styles.menuItem} ${activeMenu === 'beverages' ? styles.active : ''}`}
              onClick={() => handleMenuClick('beverages')}
            >
              Beverages
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar