import styles from "../../styles/Products.module.css";
import Image from "next/image";
export const Cart = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <table className={styles.table}>
                <tr className={styles.tr}>
                    <th>Products</th>
                    <th>Name</th>
                    <th>Extras</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
            </table>
        </div>
        <div className={styles.right}></div>
    </div>
  )
}
