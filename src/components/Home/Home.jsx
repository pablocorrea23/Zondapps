import styles from './Home.module.css';
import MiImagen from '../../assets/Logo_zondapps.svg';

export default function Home() {
  return (
    <>
      <div className={styles.fondo}>
        <div  className={styles.box1} >
          <img /* className={styles.img} */ src={MiImagen} alt="" />
          <h2>Desarrollo de páginas web y aplicaciones</h2>
          <botton>Conoce mas</botton>
          <botton>Nuestros planes</botton>
        </div>
        <div className={styles.box2}>
          
        </div>
      </div>


    </>

  )
}


