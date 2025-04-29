import Image from "next/image"
import closeBar from '../images/Close-Bar.jpg.jpg'
import styles from './elevatedAmerican.module.css'
import secondImg from '../images/maeveryHallway.webp'

export default function ElevatedAmericanComponent () {

    return (
        <>
        <div className={styles.firstImage}>
        <Image src={closeBar} alt="close-bar" />
        </div>
        <div className={styles.secondImageContainer}>
        <Image src={secondImg} alt="maevery-image" className={styles.secondImage}/>
        </div>
        </>
    )
}