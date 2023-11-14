import styles from './Productos.module.css';
import pc_product from '../../assets/pc_product.png';


export default function Productos() {
    return (
        <>
            <div className={styles.fondo_product}>
                <div className={styles.box1_product}>
                    <img className={styles.img_pc_product} src={pc_product} />
                </div>


                <div className={styles.box2_product}>
                    <h3 className={styles.titulo_product}>DESARROLLO WEB</h3>
                    <p className={styles.descripcion_product}>Potencia tu negocio con una página web que te permita contactar y fidelizar más y mejores clientes</p>
                </div>
            </div>

        </>

    )
}

