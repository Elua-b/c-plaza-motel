import styles from "../../styles/Products.module.css";
import axios from 'axios'
import Image from "next/image";
import { useState } from "react";
const Products = ({product}) => {
  const [size, setSize] = useState(0);
 
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={product.img} layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{product.name}</h1>
        <span className={styles.price}>${product.prices[size]}</span>
        <p className={styles.desc}>{product.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/size.png" alt="" layout="fill" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/size.png" alt="" layout="fill" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/size.png" alt="" layout="fill" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          {product.extraOptions.map((option)=>{
return(
  <div className={styles.option} key={option._id}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">{option.text}</label>
          </div>
)
          })}
          
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity}  />
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
export const getServerSideProps=async({params})=>{
  const res=await axios.get(`http://localhost:3000/api/products/${params.id}`)
  return{
    props:{
      product:res.data
    }
  }
  }
export default Products;
