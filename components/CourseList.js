import CourseCard from './CourseCard'
import styles from '../styles/CourseList.module.css'
import SampleImage from '../public/courseCardImg.png'

const CourseList = () => {
  return (
    <>
        <div className={styles.courseList}>
            <h3>Exlpore Courses</h3>
            <div className={styles.flex_row}>
                <CourseCard 
                  img={SampleImage}
                  title="Build a Whatsapp Clone using Reactjs + Firebase"
                  desc="A 2-week project where you'll learn some React.js, write + host a chat app on firebase. Perfect for curious developers."
                />

                <CourseCard 
                  img={SampleImage}
                  title="Build a Whatsapp Clone using Reactjs + Firebase"
                  desc="A 2-week project where you'll learn some React.js, write + host a chat app on firebase. Perfect for curious developers."
                />
            </div>
        </div>
    </>
  )
}

export default CourseList