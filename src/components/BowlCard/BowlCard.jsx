import React from 'react'
import styles from './BowlCard.module.scss'
import plusIcon from '../../assets/plus.png'
import veg from '../../assets/vegIcon.png'
const BowlCard = ({title, image, price, id}) => {
  return (
    <div className={styles.container}>
        <div>
            <img src={image} alt="" />
        </div>
        <div className={styles.right}>
            <div className={styles.heading}>
                {title}
            </div>
            
            <div className={styles.down}>
                <div className={styles.veg}>
                    <img src={veg} alt="" />
                    <span>{price}</span>
                </div>
                <div className={styles.addBtn}>
                    <div className={styles.plus}>
                    <span>
                        <img src={plusIcon} alt="" />
                    </span></div>
                    <div className={styles.add}>ADD</div>
                </div>
            </div>
                
        </div>
    </div>

  )
}

export default BowlCard