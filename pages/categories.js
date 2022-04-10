import Tube from '../public/tes_tube_icon.png'
import styles from '../styles/Categories.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CourseList from '../components//CourseList'
import Image from 'next/image'

const Categories = () => {
  return (
    <>
        <Navbar />
        <div className={styles.page_hldr}>
            {/* Heading */}
            <div className={styles.heading}>
                <div className={styles.title}>
                    <Image 
                        src={Tube}
                        alt='Tube Icon'
                    />
                    <h1>Projects</h1>
                </div>
                <p>Pick a project and start hacking!</p>
            </div>

            {/* Courses */}
            <CourseList />
        </div>


        <Footer />
    </>
  )
}

export default Categories