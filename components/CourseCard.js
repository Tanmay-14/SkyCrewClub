import styles from '../styles/CourseCard.module.css'
import Image from 'next/image'

// usestate to update the data value
// useeffect to fetch the values from api or backend
// after that loop ot in the CourseList File

const CourseCard = ({image, title, desc}) => {
  return (
    <div className={styles.courseCard}>
      <div className={styles.img_hldr}>
        <Image
          src={image}
          className='courseImg'
          alt='Course Img'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className={styles.content}>
          <div className={styles.courseTitle}>
            <h2>{title}</h2>
          </div>
          <div className={styles.courseBrief}>
            <p>{desc}</p>
          </div>
          <button className={styles.projectBut}>
            View Project
          </button>
      </div>
    </div>
  )

}

export default CourseCard