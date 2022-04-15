import styles from "../../styles/Signup.module.css";
import Image from "next/image";
import CheckBox from "../../public/check-square-fill.png";
import Learner from "../../public/student.png";
import Educator from "../../public/teacher.png";
import Link from "next/Link";
import { useState } from "react";

const signup = () => {
  return (
        <div className={styles.page_hldr}>
            <div className={styles.form_hldr}>
            <Link href='/'>
                <h1>SkyCrew</h1>
            </Link>
            <p>new user? enter your email to get started</p>
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
                    <div className={styles.form}>
                        <input type="text" name="lname" autoComplete='off' required className={styles.input_form}/>
                        <label className={styles.form_label}>last name</label>
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.learner}>
                            <span>Learner</span>
                            <Image
                                src={Learner}
                                alt='Learner Icon'
                                height={40}
                                width={40}
                            />
                        </button>
                        <button className={styles.edu}>
                            <span>Educator</span>
                            <Image
                                src={Educator}
                                alt='Educator Icon'
                            />
                        </button>
                    </div>
                    <Link href='/'>
                        <div className={styles.connect}>
                            <button>connect wallet</button>
                        </div>
                    </Link>
                    <div className={styles.login}>
                        <p>already have an account?  
                            <Link href='/Login/login'>
                                <a>login</a>
                            </Link>
                        </p>
                    </div>
                </div>
            </form>
            <div className={styles.footer}>
                <span>by continuing, you acknowledge that you have read, understood, <br /> and agree to our terms of service and privacy policy</span>
            </div>
        </div>
      </div>
  )
}

export default signup;
