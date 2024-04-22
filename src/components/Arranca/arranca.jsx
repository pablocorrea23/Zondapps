import React from 'react'
import styles from './arranca.module.css'
import celular from '../../assets/img_products/celular.png'

function arranca() {
  return (
    <>
      <div className={styles.container_arranca}>

        <div className={styles.img_celular}>
          <img src={celular} alt="imagen de pantalla" />
        </div>

        <div className={styles.contenedor_texto}>
          <div>
            <h3>"Si tu aplicación tiene el poder de<br />transformar el mundo, cada desafio<br/>se convierte en una batalla<br/>que vale la pena liberar"</h3>
          </div>

        </div>

      </div>
    </>
  )
}

export default arranca
