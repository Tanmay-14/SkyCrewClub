import CheckBox from '../../public/check-square-fill.png'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Login.module.css'


const login = () => {
  return (
    <div className={styles.page_hldr}>
        <div className={styles.form_hldr}>
            <Link href='/'>
                <h1>SkyCrew</h1>
            </Link>
            <div>
            <p>already have an account?</p>
                <form>
                    <div className={styles.forms}>
                        <div className={styles.form}>
                            <input type="email" name="email" autoComplete='off' required className={styles.input_form}/>
                            <label className={styles.form_label}>email</label>
                        </div>
                        <div className={styles.form}>
                            <input type="text" name="fname" autoComplete='off' required className={styles.input_form}/>
                            <label className={styles.form_label}>first name</label>
                        </div>
                        <Link href='/'>
                        <div className={styles.continue}>
                            <button>continue</button>
                        </div>
                        </Link>
                        <div className={styles.line}>or</div>
                        <div className={styles.connect}>
                            <button>
                                <div className={styles.wallet}>
                                <Image 
                                    src={CheckBox}
                                    alt='Check Box'
                                    height={25}
                                    width={25}
                                />
                                <h3>connect your wallet</h3>
                                </div>
                            </button>
                        </div>
                        <div className={styles.signup}>
                            <p>create account?  
                                <Link href='/Login/signup'>
                                    <a>signup</a>
                                </Link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
            <div className={styles.footer}>
                <span>by continuing, you acknowledge that you have read, understood, <br /> and agree to our terms of service and privacy policy</span>
            </div>
        </div>
    </div>
  )
}

export default login