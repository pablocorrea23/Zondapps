import styles from './Cel_product.module.css';
import cel_product from '../../../assets/cel_product.png';

export default function Cel_product() {
    return (
        <>
            <div className={styles.fondo_product}>
                <div className={styles.box1_product}>
                    <img className={styles.img_pc_product} src={cel_product} alt='Imagen del producto' />
                </div>


                <div className={styles.box2_product}>
                    <h3 className={styles.titulo_product}>DESARROLLO DE APLICACIONES</h3>
                    <p className={styles.descripcion_product}>Potencia tu negocio con una página web que te permita contactar y fidelizar más y mejores clientes</p>
                </div>
            </div>




        </>

    )
}

