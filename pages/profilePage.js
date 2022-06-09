import styles from '../styles/Profile.module.css'
import Navbar from '../components/Navbar'
import Edit from '../public/Edit Icon.svg'
import Image from 'next/image'
import Github from '../public/Git.svg'
import Twitter from '../public/Twitter.svg'
import LinkedIn from '../public/Linkedin.svg'
import Dribble from '../public/Dribble.svg'
import Behance from '../public/Behance.svg'
import Website from '../public/website.svg'
import { useState, useRef } from 'react';

function profile() {
    const [imageSrc, setImageSrc] = useState();

    /**
     * handleOnChange
     * @description Triggers when the file input changes (ex: when a file is selected)
     */

    function handleOnChange(changeEvent) {
        const reader = new FileReader();

        reader.onload = function(onLoadEvent) {
        setImageSrc(onLoadEvent.target.result);
        // setUploadData(undefined);
        }

        reader.readAsDataURL(changeEvent.target.files[0]);
    }

    const inputFileRef = useRef( null );

    const onFileChangeCapture = ( e ) => {
    /*Selected files data can be collected here.*/
    console.log( e.target.files );
    }
    const onIconClick = () => {
    /*Collecting node-element and performing click*/
    inputFileRef.current.click();
    }
  

  return (
    <div  className={styles.container}>
        <Navbar />

        <div className={styles.profile_hldr}>
            <div className={styles.left_side}>
                {/* Profile Section */}
                <div className= {`${styles.card__hldr} ${styles.profile__section}`}>
                    <h3>Public profile setting</h3>
                    <p>You control your profile and can limit what is shown on search engines</p>

                    <div className={styles.banner}>
                        
                        <form className={styles.form} method="post" onChange={handleOnChange}>
                            <input type="file" className={styles.banner_img}  id="ban_img" ref={inputFileRef} onChangeCapture={onFileChangeCapture} accept='image/png image/jpg'/> 
                        </form>
                        <div className={styles.edit__icon} onClick={onIconClick}>
                                { <Image 
                                    src={Edit}
                                    alt="Player Image"
                                    width={50}
                                    height={50}
                                />}
                        </div>
                        <img src={imageSrc}  />
                    </div>

                    <div className={styles.input__info}>
                        <div className={styles.first__info}>
                            <div className={styles.prfile__hldr}></div>
                            <div className={`${styles.input__form} ${styles.fname}`}>
                                <h4>First Name</h4>
                                <input className={styles.input} type="text" name="fname" id="fname" autoComplete='off' required />
                            </div>
                        </div>
                        <div className={`${styles.input__form} ${styles.email__input}`}>
                            <h4>Email</h4>
                            <input className={styles.input} type="email" name="email" id="email" autoComplete='off' required />
                        </div>
                        <div className={`${styles.input__form} ${styles.one_liner__input}`}>
                            <h4>One-Liner</h4>
                            <input className={styles.input} type="text" name="liner" id="liner" autoComplete='off' required />
                        </div>
                        <div className={`${styles.input__form} ${styles.loc__input}`}>
                            <h4>Where are you based?</h4>
                            <input className={styles.input} type="text" name="location" id="location" autoComplete='off' required />
                        </div>
                    </div>
                </div>
                
                {/* Work Experience Section*/}
                <div className={`${styles.card__hldr} ${styles.email__section}`}>
                    <h3>Work Experience</h3>
                    <p>Let us know where you worked in the past!</p>

                    <button className={styles.add__but}>Add Experience</button>
                </div>

                {/* Project Section  */}
                <div className={`${styles.card__hldr} ${styles.project__section}`}>
                    <h3>Projects</h3>
                    <p>Showcase the projects you have been working on</p>

                    <button className={styles.add__but}>Add Projects</button>
                </div>

                {/* Social Section */}
                <div className={`${styles.card__hldr} ${styles.social__section}`}>
                    <h3>Social</h3>
                    <p>Enter your Social Media handles below.</p>
                    
                    {/* Levels */}
                    <div className={styles.levels}>
                        {/* Level 1 Git and Twitter*/}
                        <div className={styles.level__n}>
                            {/* github */}
                            <div className={`${styles.social_input__form} ${styles.input__form} ${styles.git__input}`}>
                                    <div className={styles.text__flex}>
                                        <div className={styles.img__hldr}>
                                            <Image 
                                                src={Github}
                                                alt='Github Icon'
                                                height={30}
                                                width={30}
                                            />
                                        </div>
                                        <h4>Github</h4>
                                    </div>
                                    <input className={styles.input} type="text" name="location" id="location" autoComplete='off' required />
                            </div>

                            {/* Twitter */}
                            <div className={`${styles.social_input__form}  ${styles.input__form} ${styles.tweet__input}`}>
                                    <div className={styles.text__flex}>
                                        <div className={styles.img__hldr}>
                                            <Image 
                                                src={Twitter}
                                                alt='Twitter Icon'
                                                height={30}
                                                width={30}
                                            />
                                        </div>
                                        <h4>Twitter</h4>
                                    </div>
                                    <input className={styles.input} type="text" name="location" id="location" autoComplete='off' required />
                            </div>
                        </div>

                        {/* Level 2  Linkedin and website*/}
                        <div className={styles.level__n}>
                            {/* Linkedin */}
                            <div className={`${styles.social_input__form} ${styles.input__form} ${styles.link__input}`}>
                                    <div className={styles.text__flex}>
                                        <div className={styles.img__hldr}>
                                            <Image 
                                                src={LinkedIn}
                                                alt='Linkedin Icon'
                                                height={30}
                                                width={30}
                                            />
                                        </div>
                                        <h4>LinkedIn</h4>
                                    </div>
                                    <input className={styles.input} type="text" name="location" id="location" autoComplete='off' required />
                            </div>

                            {/* website */}
                            <div className={`${styles.social_input__form}  ${styles.input__form} ${styles.website__input}`}>
                                    <div className={styles.text__flex}>
                                        <div className={styles.img__hldr}>
                                            <Image 
                                                src={Website}
                                                alt='Website Icon'
                                                height={30}
                                                width={30}
                                            />
                                        </div>
                                        <h4>Website</h4>
                                    </div>
                                    <input className={styles.input} type="text" name="location" id="location" autoComplete='off' required />
                            </div>
                        </div>

                        {/* Level 3 Dribble and Behance*/}
                        <div className={styles.level__n}>
                            {/* Dribble */}
                            <div className={`${styles.social_input__form} ${styles.input__form} ${styles.drib__input}`}>
                                    <div className={styles.text__flex}>
                                        <div className={styles.img__hldr}>
                                            <Image 
                                                src={Dribble}
                                                alt='Dribble Icon'
                                                height={30}
                                                width={30}
                                            />
                                        </div>
                                        <h4>Dribble</h4>
                                    </div>
                                    <input className={styles.input} type="text" name="location" id="location" autoComplete='off' required />
                            </div>

                            {/* Behance */}
                            <div className={`${styles.social_input__form}  ${styles.input__form} ${styles.behance__input}`}>
                                    <div className={styles.text__flex}>
                                        <div className={styles.img__hldr}>
                                            <Image 
                                                src={Behance}
                                                alt='Behance Icon'
                                                height={30}
                                                width={30}
                                            />
                                        </div>
                                        <h4>Behance</h4>
                                    </div>
                                    <input className={styles.input} type="text" name="location" id="location" autoComplete='off' required />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Connect Wallet  */}
                <div className={`${styles.card__hldr} ${styles.wallet__section}`}>
                    <h3>Connect Wallet</h3>
                    <p>Connect your wallet to show off your NFTs and wallet activityn</p>

                    <button className={styles.add__but}>Connect Wallet</button>
                </div>

                {/* Logout button */}
                <div className={styles.logout__section}>
                    <button className={styles.add__but}>Logout</button>
                </div>
            </div>


            <div className={styles.right_side}>Profile preview</div>
        </div>
    </div>
  )
}

export default profile