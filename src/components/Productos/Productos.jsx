/* import styles from './Productos.module.css'; */
/* import pc_product from '../../assets/pc_product.png'; */
import Pc_product from './pc_product/Pc_product';
import Cel_product from './cel_product/Cel_product';

export default function Productos() {
    return (
        <>
        <Pc_product />
        <Cel_product />
            {/* <div className={styles.fondo_product}>
                <div className={styles.box1_product}>
                    <img className={styles.img_pc_product} src={pc_product} alt='Imagen del producto' />
                </div>


                <div className={styles.box2_product}>
                    <h3 className={styles.titulo_product}>DESARROLLO WEB</h3>
                    <p className={styles.descripcion_product}>Potencia tu negocio con una página web que te permita contactar y fidelizar más y mejores clientes</p>
                </div>
            </div> */}
        </>

    )
}

