import styles from "../styles/Nopage.module.css";
import Image from 'next/image'
import Nopage from '../public/404.png'

export default function Custom404() {
  return (
    <div>
      <div className={styles.body}>
        <Image src={Nopage} height={450} width={600}/>
        
      </div>
    </div>
  );
}
