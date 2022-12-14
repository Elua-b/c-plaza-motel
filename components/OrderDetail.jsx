import React from "react";
import styles from "../styles/OrderDetail.module.css";
import Image from "next/image";
import { useState } from "react";
function OrderDetail({total,createOrder}) {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  const handleClick = () => {
    createOrder({customer,address,total,method:0  })
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          You will pay $12 after delivery.
          <div className={styles.item}>
            <label className={styles.label}>Name surname</label>
            <input
              type="text"
              placeholder="John Doe"
              className={styles.input}
              onChange={(e) => setCustomer(e.target.value)}
            />
          </div>
          <div className={styles.item}>
            <label className={styles.label}>Phone Number</label>
            <input
              type="tel"
              placeholder="+25 "
              className={styles.input}
             
            />
          </div>
          <div className={styles.item}>
            <label className={styles.label}>Address</label>
            <textarea
              type="text"
              placeholder="KG 234"
              className={styles.textarea}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <button className={styles.button} onClick={handleClick}>
            Order
          </button>
        </h1>
      </div>
    </div>
  );
}

export default OrderDetail;
