import React from 'react'
import styles from './CurrentOrder.module.scss'
import veg from '../../assets/vegIcon.png'
import plusIcon from '../../assets/plus.png'



const CurrentOrder = ({title, price}) => {
   
    
  return (
    <div className={styles.details}>
    <div className={styles.priceAndImg}>
        <img src={veg} alt="" />
        <div className={styles.price}>
        {title}
            <div>{price}</div>
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

export default CurrentOrder