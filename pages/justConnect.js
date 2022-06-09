import styles from '../styles/JustConnect.module.css'
import Check from '../public/check-box.svg'
import Image from 'next/image'

function justConnect() {
  return (
    <div className={styles.connect_page_hldr}>
        <div className={styles.card__hldr}>
            <div className={styles.flex__text}>
                <Image 
                    src={Check}
                    alt="check box icon"
                    width={30}
                    height={30}
                />
                <h2>Connect Wallet</h2>
            </div>
            <p>You'll earn NFTs and Tokens for completing stuff! Plus you'll need a wallet to work through the project material.</p>

            <button className={styles.btn}>Connect Wallet</button>
        </div>
    </div>
  )
}

export default justConnect