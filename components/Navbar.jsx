import Image from "next/image"
import styles from "../styles/Navbar.module.css"
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {

  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/phone.png" alt="" width="90" height="90" />
        </div>

        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>0700604243</div>

        </div>

      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Home</li>
          {/* <li className={styles.listItem}>Products</li> */}
          <li className={styles.listItem}>Menu</li>
          {/* this is the logo you have to change later on */}
          <Image src="/img/logo.png" alt="" width="390" height="230" />
          <li className={styles.listItem}>About</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      
      <Link href="/cart" passHref>
      <div className={styles.item}>
        <div className={styles.cart}>
          {/* this is the cart logo */}
          <Image src="/img/cart3.png" alt="" width="155px" height="110" />
          <div className={styles.counter}>{quantity}</div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Navbar;