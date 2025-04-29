import Image from "next/image";
import styles from "./page.module.css";
import heroImg from '../app/images/maevery-hero-img.webp'
import wingsImg from '../app/images/maevery-wings.webp'
import MeetMaeveryComponent from "./components/meetMaevery";
import ElevatedAmericanComponent from "./components/elevatedAmerican";

export default function Home() {
  return (
    <>
   <section className={styles.heroSection}>
    <div className={styles.heroImageContainer}>
    <Image src={heroImg} alt="maevery-home-page-img" className={styles.heroImage}/>
    <div className={styles.heroContent}>
    <Image src={wingsImg} alt="maevery-logo" className={styles.maeveryWings} />
    <h1>WELCOME TO MAVERY PUBLIC HOUSE</h1>
    </div>
    <div className={styles.heroQuote}>
      <p>"The purpose of life, after all, is to live it, to taste experience to the utmost, to 
        reach out eagerly and without fear for new and richer experience." 
      </p>
      <p>- Eleanor Roosevelt</p>
    </div>
    </div>
   
   </section>

   <section className={styles.meetMaeverySection}>
   <MeetMaeveryComponent />
   </section>

   <section className={styles.elevatedAmerican}>
    <ElevatedAmericanComponent />
   </section>
    
    </>
  );
}
