import React from 'react'
import styles from './PreviousOrder.module.scss'
import veg from '../../assets/vegIcon.png'
import plusIcon from '../../assets/plus.png'

const PreviousOrder = () => {
  return (
    <div className={styles.details}>
    <div className={styles.priceAndImg}>
        <img src={veg} alt="" />
        <div className={styles.price}>
        Sunrise 
            <div>200</div>
        </div>
    </div>

<div className={styles.addBtn}>
    <div className={styles.plus}>
        <span>
            <img src={plusIcon} alt="" />
        </span>
    </div>
    <div className={styles.add}>1</div>
    <div className={styles.plus}>
        <span>
            <img src={plusIcon} alt="" />
        </span>
    </div>
</div>
</div>
  )
}

export default PreviousOrder