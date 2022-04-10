import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Challenges.module.css'
import Image from 'next/image'
import Techguy from '../public/Tech Guy.png'
import Code from '../public/code_slash_icon.png'
import Upload from '../public/upload_icon.png'
import Cloud from '../public/upload_solutions_icon.png'
import Coin from '../public/coin_icon.png'

const challenges = () => {
  return (
    <div className={styles.page_hldr}>
        <Navbar />
        {/* SECTION_1 */}
        <div className={styles.sec_1}>
            <div className={styles.content}>
                <h1> <span>Enhace</span> your Front-End Development Skills by Building Projects</h1>
                <p>UI/UX designers will provide there design templates along with resources which will help developers to practice their development skills.</p>
            </div>
            <Image 
                src={Techguy}
                alt='Tech Guy'
            />
        </div>

        {/* SECTION_2 */}
        <div className={styles.sec_2}>
            <h2>How it Works</h2>
            <div className={styles.steps}>
                <div className={styles.step}>
                    <Image 
                        src={Upload}
                        alt='Upload Icon'
                    />
                    <div className={styles.decs}>
                        <h3>Upload Challenge</h3>
                        <p>Designers will upload design challenge of web/mobile with resources which can be accesed by the developers</p>
                    </div>
                </div>

                <div className={styles.step}>
                    <Image 
                        src={Code}
                        alt='Code Icon'
                    />
                    <div className={styles.decs}>
                        <h3>Code the Design</h3>
                        <p>Select and start the challenge by downloading all the resource files.</p>
                    </div>
                </div>

                <div className={styles.step}>
                    <Image 
                        src={Cloud}
                        alt='Cloud Icon'
                    />
                    <div className={styles.decs}>
                        <h3>Submit your Solution</h3>
                        <p>Upload your solution of challenge in the required format.</p>
                    </div>
                </div>

                <div className={styles.step}>
                    <Image 
                        src={Coin}
                        alt='Coin Icon'
                        height={50}
                        width={50}
                    />
                    <div className={styles.decs}>
                        <h3>Earn Rewards</h3>
                        <p>After submiting you can earn tokens.</p>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default challenges