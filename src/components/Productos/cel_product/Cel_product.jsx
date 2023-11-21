import styles from './Cel_product.module.css';
import cel_product from '../../../assets/img_products/cel_product.png';
import Marquee from "react-fast-marquee";

export default function Cel_product() {
    return (
        <>
            <div className={styles.fondo_product}>
                
                <div className={styles.box1_product}>
                    <img className={styles.img_pc_product} src={cel_product} alt='Imagen del producto' />
                </div>


                <div className={styles.box2_product}>
                    <h3 className={styles.titulo_product}>DESARROLLO DE APLICACIONES</h3>
                    <p className={styles.descripcion_product}>Diseñamos y desarrollamos aplicaciones web a medida, fusionando creatividad y funcionalidad para potenciar tu presencia digital y cumplir con tus necesidades.</p>
                </div>
                
                <div className={styles.marquesina}>
                <Marquee className={styles.palabra_marq}>
                    <h3> APLICACIONES WEB&nbsp; APLICACIONES WEB &nbsp; </h3>
                </Marquee>
                <Marquee direction='right' className={styles.palabra_marq}>
                    <h3> APLICACIONES WEB&nbsp; APLICACIONES WEB &nbsp; </h3>
                </Marquee>
                <Marquee className={styles.palabra_marq}>
                    <h3> APLICACIONES WEB&nbsp; APLICACIONES WEB &nbsp; </h3>
                </Marquee>
                </div>
            </div>



        </>

    )
}

