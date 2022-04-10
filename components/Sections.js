import Image from 'next/image'
import Player from '../public/1 1.png'
import Calender from '../public/Calender_icon.png'
import Community from '../public/Community_icon.png'
import Project from '../public/Project_icon.png'
import Illus from '../public/SkyCrew 1.png'
import styles from '../styles/Sections.module.css'

const Sections = () => {
  return (
    <>
        {/* <SECTION-1> */}
            <div className={styles.sec_1}>
            <div className={`${styles.box} ${styles.flex_around_row}`}>
                <div className={styles.content}>
                <h1> <span>SkyRocket</span> your Skills <br /> by building <span>EPIC</span> Stuff.</h1>
                <p>If you're an aspiring developer that wants to learn REACT, UI/UX, Web3 but is not sure where to start -- You are at the Right Spot. Learn + Start building cool stuff right now. Earn NFTs, Tokens, access Layered Work Opportunities.</p>
                </div>

                <Image 
                src={Player} 
                alt="Player Image"
                width={700}
                height={700}
                />
            </div>
            </div>
        {/* </SECTION-1> */}

        {/* <SECTION-2> */}
            <div className={styles.flex_txt_center}>
            <div className={styles.title}>
                <h1>Learn by <span>Actually Making Stuff</span></h1>
                <p>Say goodbye to 30-Hour Long recorded courses that are difficult to finish. <br />
                Say Hello to a mode of learnig that focuses on actually doing the thing</p>
            </div>
            {/* Cards  */}
            <div className={styles.cards}>
                <div className= {`${styles.card} ${styles.flex_around_col} ${styles.card_1}`}>
                    <Image 
                    src={Calender}
                    alt="Calender Icon" 
                    />
                    <div className={styles.content}>
                    <h3>A Hyped Up LIVE event</h3>
                    <span>Getting started is difficult so we make the start of every cohort a special event.</span>
                    </div>
                </div>
                <div className={`${styles.card} ${styles.flex_around_col} ${styles.card_2} `}>
                    <Image 
                    src={Community}
                    alt="Community Icon" 
                    />
                    <div className={styles.content}>
                    <h3>A pro-active community.</h3>
                    <span>Make progress on your project alongside other builders to keep you accountable.</span>
                    </div>
                </div>
                <div className={`${styles.card} ${styles.flex_around_col} ${styles.card_3}`}>
                    <Image
                    src={Project}
                    alt="Project Icon" 
                    />
                    <div className={styles.content}>
                    <h3>Unique project guides</h3>
                    <span>Projects that you can customize + make your own. Build it. Deploy it. Share it</span>
                    </div>
                </div>
            </div>
            </div>
        {/* </SECTION-2> */}

        {/* <SECTION-3> */}
            <div className={styles.flex_txt_center}>
            <div className={styles.title}>
                <h1>Build alongside other <br /> <span> Developers & Designers.</span></h1>
                <p>All Great things were built in TEAMS. Once you enroll we'll assign you a channel where <br /> you'll get to share progress with a plethora of skilled and talented professionals.</p>
            </div>
            </div>
        {/* </SECTION-3> */}

        {/* <SECTION-4> */}
            <div className={`${styles.bg_1} ${styles.flex_row_up}`}>
            <div className={styles.left_content}>
                <span>
                <h1>SKYCREWCLUB</h1>
                <p>Community of Designers & Developers</p></span>
                <ul>
                <li>
                    10+ Developers
                </li>
                </ul>
                <ul>
                <li>
                    15+ Designers
                </li>
                </ul>
                <ul>
                <li>
                    20+ Active Learners
                </li>
                </ul>
            </div>
            <div className={styles.right_img}>
                <Image 
                src={Illus}
                alt='Illustration'
                />
            </div>
            </div>
        {/* </SECTION-4> */}

        {/* <SECTION-5> */}
            <div className={styles.flex_txt_center}>
            <div className={`${styles.title} ${styles.content_hldr}`}>
                <h1>Learning Opportunities <br /> <span>Get and Internship!</span></h1>
                <p>The Tokens and NFTs you have earned will act as a Proof of your work. You can use these tokens to apply for various Jobs and Internship based on the skills you have acquired.</p>
            </div>
            </div>
        {/* </SECTION-5> */}
    </>
  )
}

export default Sections