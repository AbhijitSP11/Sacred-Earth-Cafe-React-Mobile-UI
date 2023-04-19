import React from 'react'
import styles from './FoodCard.module.scss'
import veg from '../../assets/vegIcon.png'
import plusIcon from '../../assets/plus.png'
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice"; 

const FoodCard = ({title, price, image, id, }) => {

    const dispatch = useDispatch();
    const handleClick = () => {
      dispatch(addToCart()); // Dispatch addToCart action when add button is clicked
    };  
  
  return (
    <div className={styles.container}>
        <img className={styles.foodImage} src={image} alt="" />
        <div className={styles.title}>
            <img src={veg} alt="" />
            <span>{title}</span>
        </div>
        <div className={styles.down}>
            <div>{price}</div>
            <div className={styles.addBtn}>
                <div className={styles.plus} onClick={handleClick}>
                <span>
                    <img src={plusIcon} alt="" />
                </span></div>
                <div className={styles.add}>ADD</div>
            </div>
        </div>
    </div>
  )
}

export default FoodCard