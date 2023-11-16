import styles from './Pc_product.module.css'
import pc_product from '../../../assets/pc_product.png';
import Marquee from 'react-fast-marquee';


export default function Pc_product() {
    return (
        <>
        
            <div className={styles.fondo_product}>
                <div className={styles.box1_product}>
                    <img className={styles.img_pc_product} src={pc_product} alt='Imagen del producto' />
                </div>


                <div className={styles.box2_product}>
                    <h3 className={styles.titulo_product}>DESARROLLO WEB</h3>
                    <p className={styles.descripcion_product}>Potencia tu negocio con una página web que te permita contactar y fidelizar más y mejores clientes</p>
                </div>
                <div className={styles.marquesina}>
                <Marquee direction='right' className={styles.palabra_marq}>
                    <h3> DESARROLLO WEB&nbsp; DESARROLLO WEB&nbsp; </h3>
                </Marquee>
                <Marquee  className={styles.palabra_marq}>
                    <h3> DESARROLLO WEB&nbsp; DESARROLLO WEB&nbsp; </h3>
                </Marquee>
                <Marquee direction='right' className={styles.palabra_marq}>
                    <h3> DESARROLLO WEB&nbsp; DESARROLLO WEB&nbsp; </h3>
                </Marquee>
                </div>
            </div>
            
        </>

    )
}

