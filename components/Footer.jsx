import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/marka.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE ARE THE BEST IN MALMÖ.
          </h2>
        </div>

        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANT</h1>
          <p className={styles.text}>
            Persborgtorget 1C
            <br /> 213 63 malmö
            <br /> 0700604243
          </p>
          <p className={styles.text}>
            Persborgtorget 1C
            213 63 malmö
            0700604243
          </p>
          <p className={styles.text}>
            Persborgtorget 1C
            213 63 malmö
            0700604243
          </p>
          <p className={styles.text}>
            Persborgtorget 1C
            213 63 malmö
            0700604243
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            Monday - SUNDAY
            <br /> 10:00 - 22:00
            
          </p>

          {/* <script>
          <section>
            <p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1154689.9063652784!2d11.911273031249985!3d55.580191200000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a1725069d431%3A0x8f1f0c1214d55985!2sMarka%20Cadey!5e0!3m2!1sen!2sca!4v1647280260113!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </p>
            </section>
          </script> */}
          
          
        </div>
      </div>
    </div >
  );
};
export default Footer;