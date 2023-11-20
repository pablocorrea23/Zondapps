import styles from './Footer.module.css';
import logo_foot from '../../assets/img_footer/logo_footer.svg';
import insta from '../../assets/img_footer/insta_foot.svg';
import mail from '../../assets/img_footer/mail_foot.svg';
import wsp from '../../assets/img_footer/whatapp_foot.svg';


export default function Footer() {

  return (
    <>
      <div className={styles.contfoot}>
        <div className={styles.box1}>
          <img className={styles.img_logo_foot} src={logo_foot} alt="" />
          <p className={styles.p_foot}>Potencia tu negocio con una pagina web que te permita contactar y fidelizar mas y mejores clientes.No dudes en contactarnos.</p>
        </div>

        <div className={styles.box2}>
          <a  target='blank' href="https://www.instagram.com/zondapps/" className={styles.redes_foot}>
            <img className={styles.uno} src={insta} alt="Link de instagram" />
            <div>Instagram</div>
          </a>

          <a target='blank' href="#" className={styles.redes_foot}>
            <img className={styles.uno} src={mail} alt="" />
            <div>Correo</div>
          </a>

          <a target='blank' href="https://wa.me/5492645816212" className={styles.redes_foot}>
            <img className={styles.tres}src={wsp} alt="Numero de contacto de Whatsapp" />
            <div>Whatapps</div>
          </a>
        </div>
      <h5 className={styles.h5_foot}>Zondapps 2023 - todos los derechos reservados</h5>
      </div>

    </>
  );
}