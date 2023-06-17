import React from 'react'
import {BiArrowBack} from 'react-icons/bi'
import styles from './Cart.module.scss'
import CurrentOrder from './CurrentOrder'
import PreviousOrder from './PreviousOrder'
import { connect, useSelector } from "react-redux";



const Cart = () => {
    const currentOrderItems = useSelector(state => state.currentOrder.items);
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
        {currentOrderItems.map((item, index) => (
            <CurrentOrder key={item.index} title={item.title} price={item.price}/>
            ))}
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
const mapStateToProps = (state) => {
    return {
      currentOrderItems: state.currentOrder.items
    };
  };
  
  // Connect the component to the Redux store
  export default connect(mapStateToProps)(Cart);