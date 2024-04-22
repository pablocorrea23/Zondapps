import styles from './Home.module.css';
import MiImagen from '../../assets/Logo_zondapps.svg';
import Zfondo from '../../assets/Z_fondo.svg';
// import muñeco from '../../assets/muñeco_principal.svg';
import Avatar from '../Avatar_aleatorio/avatar';

export default function Home() {
  return (
    <>
      {/* <div className={styles.contenedor_home}>
        
        <div className={styles.box1} >
          <img className={styles.img_zondapps} src={MiImagen} alt="zondapps" />
          
          <h2>Desarrollo de páginas<br/><span className={styles.web}>web y aplicaciones</span></h2>

          <div className={styles.botones}>
          <button className={styles.conoce_mas}>CONOCÉ MÁS</button>
          <button className={styles.nuestros_planes}>NUESTROS PLANES</button>
          </div>
        </div>

        <div className={styles.box2}>
        <img className={styles.z_fondo} src={Zfondo} alt="zondapps" />
        <img className={styles.muñeco} src={muñeco}  alt="muñeco" />

        </div>

      </div> */}

      <div className={styles.contenedor_home}>

        <div className={styles.box1} >
          <img className={styles.img_zondapps} src={MiImagen} alt="zondapps" />

          <h2>"Ideas que unen, aplicaciones que transforman."<br /></h2>

          <div className={styles.avatars}>
            <Avatar />
          </div>

          <div className={styles.boton}>
            <button className='webs_button'>WEBS</button>
            <button className='apps_button'>APPS</button>
          </div>
        </div>

        <div className={styles.box2}>
          <img className={styles.z_fondo_izq} src={Zfondo} alt="zondapps" />
          <img className={styles.z_fondo_der} src={Zfondo} alt="zondapps" />
        </div>

      </div>
    </>

  )
}


