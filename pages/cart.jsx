import styles from "../styles/Cart.module.css";
import Image from "next/image";

const Cart = () =>{
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.trTitle}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>

          
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                src="/img/kala.png"
                layout="fill"
                objectFit="fill"
                alt=""
                // height="1000"
                // width="1000"
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>Kalankal</span>
            </td>
            <td>
              <span className={styles.extras}>
                Double ingredient, spicy sauce
              </span>
            </td>
            <td>
              <span className={styles.price}>kr85</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td className={styles.total}>kr120</td>
          </tr>

          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                src="/img/kala.png"
                layout="fill"
                objectFit="fill"
                // height="3000"
                // width="3000"
                alt=""
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>Kalankal</span>
            </td>
            <td>
              <span className={styles.extras}>
                Double ingredient, spicy sauce
              </span>
            </td>
            <td>
              <span className={styles.price}>85kr</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td className={styles.total}>120kr</td>
          </tr>
          
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Cart Total</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>79.60kr
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>0.00kr
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>79.60kr
          </div>
          <button className={styles.button}>CHECKOUT NOW!</button>
        </div>
      </div>

    </div>
  )
}
export default Cart