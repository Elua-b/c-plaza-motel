import styles from "../styles/Productlist.module.css";
import ProductCard from "./ProductCard";


const Productlist = () => {
  return (
    <div className={styles.container}>
      <h1 className="styles.title">THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        laudantium dolore vitae expedita nesciunt. Debitis dolores dolore natus
        dolor commodi aut voluptas expedita error vero. Esse itaque tempore
        suscipit repellendus?
      </p>
      <div className={styles.wrapper}>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        
      </div>
    </div>
  );
};

export default Productlist;
