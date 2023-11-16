import React from 'react'
import styles from './arranca.module.css'
import pantalla from '../../assets/IMAGEN PROVISIORIA 1.svg'

function arranca() {
  return (
    <>
      <div className={styles.container_arranca}>

        <div className={styles.img_pantalla}>
          <img src={pantalla} alt="imagen de pantalla" />
        </div>

        <div className={styles.contenedor_texto}>
          <div>
            <h2>ARRANCÁ,<br />CON FUERZA</h2>
          </div>

          <div>
            <h3>Potencía tu negocio con una página web <br />que te permita contactar y fidelizar más<br/> y mejores clientes.</h3>
          </div>

        </div>

      </div>
    </>
  )
}

export default arranca
