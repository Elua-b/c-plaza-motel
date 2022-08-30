import React, { useState } from "react";
import styles from "../../styles/Admin.module.css";
import Image from "next/image";
import axios from "axios";
function index({orders,products}) {
  const [productList,setProductList]=useState(products)
  const [orderList,setOrderList]=useState(orders)

  const handleDelete=async (id)=>{
    try {
      const res=await axios.delete("http://localhost:3000/api/products/"+id)
      setProductList(productList.filter((product)=>product._id !== id))
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Products</h1>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trTitle}>
              <th>Image</th>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          {productList.map((product)=>(
            <tbody key={product._id}>
            <tr className={styles.trTitle}>
              <td>
                <Image
                  src={product.img}
                  width={50}
                  height={50}
                  objectFit="cover"
                  alt=""
                />
              </td>
              <td>{product._id.slice(0,5)}...</td>
              <td>{product.title}</td>
              <td>{product.prices[0]}</td>
              <td>
                <button className={styles.button}>Edit</button>
                <button className={styles.button} onClick={()=>handleDelete(product._id)}>Delete</button>
              </td>
            </tr>
          </tbody>
          ))}
          
        </table>
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>Orders</h1>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trTitle}>
              <th>Id</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {orderList.map((order)=>(

            <tbody key>
            <tr className={styles.trTitle}>
              <td>{"4546787980943455".slice(0, 5)}...</td>
              <td>john Doe</td>
              <td>$50</td>
              <td>paid</td>
              <td>preparing</td>
              <td>
                <button className="">Next stage</button>
              </td>
            </tr>
          </tbody>
            ))}
        </table>
      </div>
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const productRes = await axios.get("http://localhost:3000/api/products");
  const orderRes = await axios.get("http://localhost:3000/api/orders");

  return {
    props: {
      orders: orderRes.data,
      products: productRes.data,
    },
  };
};
export default index;
