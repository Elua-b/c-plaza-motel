import styles from "../styles/Cart.module.css";
import Image from "next/image";
const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tr}>
              <th>Products</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src="/pizza1.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </div>
              </td>
              <td>
                <span className={styles.name}>CORALZO</span>
              </td>
              <td>
                <span className={styles.extras}>
                  Double ingredients,spicy sauce
                </span>
              </td>
              <td>
                <span className={styles.price}>$19.90</span>
              </td>
              <td>
                <span className={styles.quantity}>2</span>
              </td>
              <td>
                <span className={styles.total}>$39.80</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        
      </div>
    </div>
  );
};
export default Cart;
