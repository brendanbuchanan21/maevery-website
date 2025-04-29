import styles from './meetMaevery.module.css'


export default function MeetMaeveryComponent() {

    return (
        <section className={styles.meetMaeverySection}>
            <div className={styles.meetMaeveryMainContainer}>
            <div className={styles.headerMeet}>
                <h1>MEET MAEVERY</h1>
            </div>

            <div className={styles.paragraphContainer}>
                <p>There's a new girl in town - and she's a woman you would love to hate
                    if she wasn't so disarmingly warm, friendly and passionate. She is 
                    effortlessly cool and impossibly stylish. There's just something
                    about her and you can't quite put your finger on it.
                </p>
            </div>

            <div className={styles.ownerContainer}>
                <p><b>Operating Partner/Owner</b></p>
                <p>Greg Derman</p>
            </div>

            </div>
            
        </section>
    )
}