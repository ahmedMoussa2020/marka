import styles from "../styles/ProductList.module.css"
import ProductCard from "./ProductCard";

const ProductList = ({ productList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The best food in town</h1>

      <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Ille enim occurrentia nescio quae comminiscebatur; Illa argumenta propria videamus, cur omnia sint paria peccata.
        Primum Theophrasti, Strato, physicum se voluit; Qui non moveatur et offensione turpitudinis et comprobatione honestatis? Quod cum dixissent, ille contra.
        Scisse enim te quis coarguere possit? Si longus, levis dictata sunt.
        Duo Reges: constructio interrete.
      </p>

      <div className={styles.wrapper}>
        {productList.map((product) => (
          <ProductCard
            key={product._id}
            product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
