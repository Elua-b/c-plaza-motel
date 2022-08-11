import styles from "../../styles/Orders.module.css";
import Image from "next/image";

 const Orders = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.row}>
            <table className={styles.table}>
          <thead>
            <tr className={styles.tr}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              
              <td>
                <span className={styles.id}>43255226436</span>
              </td>
              <td>
                <span className={styles.name}>
                 BUGINGO Eloi
                </span>
              </td>
              <td>
                <span className={styles.address}>NYAMIRAMBO KN.232-43</span>
              </td>
              
              <td>
                <span className={styles.total}>$39.80</span>
              </td>
            </tr>
          </tbody>
          
        </table>
            </div>
        </div>
        <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$79.60
          </div>
          <button disabled className={styles.button}>PAID</button>
        </div>
        </div>
    </div>
  )
}
export default  Orders