import React from 'react'
import {BiArrowBack} from 'react-icons/bi'
import styles from './Cart.module.scss'
import CurrentOrder from './CurrentOrder'
import PreviousOrder from './PreviousOrder'



const Cart = () => {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
        <div className={styles.title}> 
        <div className={styles.boxIcon}>
                <BiArrowBack className={styles.arrowIcon}/>
            </div>
            <div>
                <span>Place Order</span>
            </div></div>
           
            <div className={styles.boxIcon}>
                <BiArrowBack className={styles.arrowIcon}/>
            </div>
        </div>
        <div className={styles.break}>
            <span>Current Order</span>
            <span>
                <hr />
            </span>
            <span></span>
        </div>
        <div className={styles.detailsContainer}>
            <CurrentOrder/>
        <p className={styles.text}>Add cooking instructions</p>
        </div>
    <div className={styles.break}>
            <span>Previous Order</span>
            <span>
                <hr />
            </span>
            <span></span>
        </div>
        <div className={styles.detailsContainer}>
            <PreviousOrder/>
        </div>
    </div>
  )
}

export default Cart