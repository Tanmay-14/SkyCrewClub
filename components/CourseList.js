import CourseCard from './CourseCard'
import styles from '../styles/CourseList.module.css'
// import SampleImage from '../public/courseCardImg.png'
import { CourseDummyData } from './CourseDummyData'

const CourseList = () => {
  return (
    <>
        <div className={styles.courseList}>
            <h3>Exlpore Courses</h3>
            <div className={styles.flex_row}>
                {CourseDummyData.slice(0,5).map(item =>{
                  return(
                    <CourseCard 
                      image={item.image}
                      title={item.title}
                      desc={item.desc}
                    />
                  )
                })}

            </div>
        </div>
    </>
  )
}

export default CourseList