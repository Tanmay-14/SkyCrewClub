import styles from '../styles/Footer.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.flex_row}>
        <div className={styles.left}>
            <h3><Link href="/">
                    SkyCrew
                </Link>
            </h3>
            <span>Where builders learns by building</span>
        </div>
        <div className={styles.right}>
            <ul>
                <li>
                    <Link href="https://twitter.com/Twitter?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                        Twitter
                    </Link>
                </li>
                <li>
                    <Link href="https://discord.gg/6YpzjMka">
                        Discord
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer