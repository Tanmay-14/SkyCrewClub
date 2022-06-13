import styles from "../styles/NotFound.module.css";

export default function Custom404() {
  return (
    <div>
      <center>

        <div className={styles.card}>
            <h1>404</h1>
        
            <h2>Page not found</h2>
            
            <div className={styles.container}>
              
              <p>I guess you are lost. Still you can go back.</p> 
          
            </div>
        </div>
      </center>
    </div>
  );
}
