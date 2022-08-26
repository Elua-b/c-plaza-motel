import styles from "../../styles/Products.module.css";
import Image from "next/image";
import { useState } from "react";
const Products = () => {
  const [size, setSize] = useState(0);
  const pizza = {
    id: 1,
    img: "/pizza3.jpg",
    name: "CAMPANOA",
    price: [19.9, 23.4, 27.9],
    desc: "lorem ipsum is oelready now to update on th cplaza motel Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknow Missingshor Must includenow to update on th cplaza motel Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknow Missingshor Must include  ",
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>${pizza.price[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
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
          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">Double Ingredients</label>
          </div><div className={styles.option}>
            <input
              type="checkbox"
              id="cheese"
              name="cheese"
              className={styles.checkbox}
            />
            <label htmlFor="cheese">Extra Cheese</label>
          </div><div className={styles.option}>
            <input
              type="checkbox"
              id="spicy"
              name="spicy"
              className={styles.checkbox}
            />
            <label htmlFor="spicy">Spicy Sauce</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="garlic"
              name="garlic"
              className={styles.checkbox}
            />
            <label htmlFor="garlic">Garlic Sauce</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity}  />
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
export const getServerSideProps=async()=>{
  const res=await axios.get("http://localhost:3000/api/products")
  return{
    props:{
      productList:res.data
    }
  }
  }
export default Products;
