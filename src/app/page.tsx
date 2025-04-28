import Image from "next/image";
import styles from "./page.module.css";
import heroImg from '../app/images/maevery-hero-img.webp'
import wingsImg from '../app/images/maevery-wings.webp'

export default function Home() {
  return (
   <section className={styles.heroSection}>
    <div className={styles.heroImageContainer}>
    <Image src={heroImg} alt="maevery-home-page-img" className={styles.heroImage}/>
    <div className={styles.heroContent}>
    <Image src={wingsImg} alt="maevery-logo" className={styles.maeveryWings} />
    <h1>WELCOME TO MAVERY PUBLIC HOUSE</h1>
    </div>
    </div>
   </section>
  );
}
