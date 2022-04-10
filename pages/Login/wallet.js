import CheckBox from '../../public/check-square-fill.png'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Wallet.module.css'


const wallet = () => {
  return (
    <div className={styles.page_hldr}>
        <div className={styles.form_hldr}>
            <Link href='/'>
                <h1>SkyCrew</h1>
            </Link>
            <div className={styles.wallet}>
                <Image 
                    src={CheckBox}
                    alt='Check Box'
                    height={25}
                    width={25}
                />
                <h3>Connect your wallet</h3>
            </div>
            <p>You'll earn NFTs and Tokens for completing stuff! <br /> Plus you'll need a wallet to work through the project material.</p>
            <Link href='/'>
                    <div className={styles.connect}>
                        <button>connect wallet</button>
                    </div>
            </Link>
            <Link href='/'>
                <a className={styles.skip}>...skip for now</a>
            </Link>

            <div className={styles.footer}>
                <span>by continuing, you acknowledge that you have read, understood, <br /> and agree to our terms of service and privacy policy</span>
            </div>
        </div>
    </div>
  )
}

export default wallet