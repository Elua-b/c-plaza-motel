import React from "react";
import styles from "../../styles/Admin.module.css";
import Image from "next/image";
import axios from "axios";
function index() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.title}>Products</div>
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
          <tbody>
            <tr className={styles.trTitle}>
              <td>
                <Image
                  src="/food2.jpg"
                  width={50}
                  height={50}
                  objectFit="cover"
                  alt=""
                />
              </td>
              <td>pizzaId</td>
              <td>pizza Title</td>
              <td>$50</td>
              <td>
                <button className={styles.button}>Edit</button>
                <button className={styles.button}>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.item}>
        <div className={styles.title}>Orders</div>
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
          <tbody>
            <tr className={styles.trTitle}>
              <td>{"4546787980943455".slice(0, 5)}...</td>
              <td>john Doe</td>
              <td>$50</td>
              <td>paid</td>
              <td>preparing</td>+
              <td>
                <button className="">Next stage</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

// export const getServerSideProps = async (ctx) => {
//   const productRes = await axios.get("http://localhost:3000/api/products");
//   const orderRes = await axios.get("http://localhost:3000/api/orders");

//   return {
//     props: {
//       orders: orderRes.data,
//       products: productRes.data,
//     },
//   };
//};
export default index;
