import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={styles.nav}>
        <div className={styles.logo}>
            <Link href="/">
                SkyCrew
            </Link>
        </div>
        <div className={styles.links}>
            <ul>
                <li>
                    <Link href="/categories">
                        <span>Categories</span> 
                    </Link>
                </li>
                <li>
                    <Link href="/challenges">
                        <span>Challenges</span> 
                    </Link>
                </li>
                <li>
                    <Link href="/jobs">
                        <span>Jobs</span> 
                    </Link>
                </li>
            </ul>
            <input type="submit" value="Connect" className={styles.btn}/>
        </div>
    </div>
  )
}

export default Navbar