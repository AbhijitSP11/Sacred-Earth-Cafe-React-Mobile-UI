import React, { useState } from 'react'
import styles from './Main.module.scss'
import Arrow from '../../assets/ArrowUp.png'
import BowlCard from '../../components/BowlCard/BowlCard'
import { FoodData } from '../../json/FoodData'

const Food = () => {
  const [showModal, setShowModal] = useState(false); // State to track modal visibility
  const [showOverlay, setShowOverlay] = useState(false); // State to track overlay visibility

  const handleModalToggle = () => {
    setShowModal(!showModal); // Toggle modal visibility
    setShowOverlay(!showOverlay); // Toggle overlay visibility
  };
  return (
    <div className={styles.container}>
    <div className={styles.head}>
      <span>
        Acai bowls
      </span>
      <span>
        <hr />
      </span>
      <span>
        <img src={Arrow} alt="" />
      </span>
    </div>
    {FoodData.map((item)=> (
      <BowlCard title={item.title} image={item.image} price={item.price} key={item.id}/>
    ))
    }
    <button className={styles.menuButton}  onClick={handleModalToggle}>
        Menu
      </button>
      {showOverlay && <div className={styles.menuOverlay} onClick={handleModalToggle} />}

        {/* Modal container */}
      {showModal && (
        <div className={styles.menuContainer}>
          {/* Modal content */}
          <div className={styles.menuContent}>
            {/* Content of the modal goes here */}
            
            <div className={styles.header}>
            <span>Menu</span>
            <button className={styles.closeButton} onClick={handleModalToggle}>
              <h4>x</h4> 
            </button>
            </div>
            <hr />
            <p>Veg only</p>
            <p>Contains Egg</p>
            <hr />
            {/* Close button for the modal */}
           
          </div>
        </div>
      )}
    </div>
  )
}

export default Food