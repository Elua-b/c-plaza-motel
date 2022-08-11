
import styles from "../../styles/Products.module.css";
import Image from 'next/image'
import { useState } from "react";
const Products = () => {
  const [size,setSize] =useState(0);
    const pizza={
        id:1,
        img:'/pizza3.jpg',
        name:'CAMPANOA',
        price:[19.9,23.4,27.9],
        desc:"lorem ipsum is oelready now to update on th cplaza motel Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknow Missingshor Must includenow to update on th cplaza motel Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknow Missingshor Must include  "
    };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} layout="fill" alt=""/>
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>${pizza.price[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
      </div>
      <div></div>
    </div>
  )
}

export default Products
