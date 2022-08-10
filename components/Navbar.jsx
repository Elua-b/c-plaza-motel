
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/phone.jpg" alt="" height="32" width="32"/>
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>
            ORDER NOW!
          </div>
          <div className={styles.text}>
            0788420127
          </div>
        </div>

      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image src="/logo2.png" alt="" width="160px" height="69px"/>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>


        </ul>
        </div>
      <div className={styles.item}>
        <div className={styles.cart}>
        <Image src="/cart.jpg"  className={styles.image} alt="" width="30px" height="30px"/>
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  )
}

