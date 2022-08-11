
import styles from "../../styles/Products.module.css";
import Image from 'next/image'
const Products = () => {
    const pizza={
        id:1,
        img:'/pizza3.jpg',
        name:'CAMPANOA',
        price:[19.9,23.4,27.9],
        desc:"lorem ipsum is oelready now to update on th cplaza motel"
    };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} layout="fill" alt=""/>
        </div>
      </div>
      <div className={styles.right}></div>
    </div>
  )
}

export default Products
