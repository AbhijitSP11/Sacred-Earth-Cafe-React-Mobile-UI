import React from 'react'
import styles from './Special.module.scss'
import food from '../../assets/dessert.jpg'
import Arrow from '../../assets/ArrowUp.png'
import FoodCard from '../../components/FoodCard/FoodCard'
import { SpecialData } from '../../json/SpecialData'

const Special = () => {

  
  return (
    <div className={styles.container}>
    <div className={styles.header}>
      <img src={food} alt="" />
    </div>
    <div className={styles.head}>
      <span>
        Today's Special
      </span>
      <span>
        <hr />
      </span>
      <span>
        <img src={Arrow} alt="" />
      </span>
    </div>
    <div className={styles.specialGrid}>
    {
      SpecialData.map((item)=> (
        <FoodCard key={item.id} title={item.title} price={item.price} image={item.image}/>
      ))
    }
    </div>

    </div>



  )
}

export default Special