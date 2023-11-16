// Carrusel.jsx

import React from 'react';
import styles from './Carrusel.module.css';
import perfil1 from '../../assets/perfil1.png';
import perfil2 from '../../assets/perfil2.png';
import perfil3 from '../../assets/perfil3.png';
// import perfil4 from '../../assets/perfil4.png';
// import perfil5 from '../../assets/perfil5.png';

const Carrusel = () => {
  return (
    <>
  
    <div className={styles.cuerpo}>
    <div className={styles.TIT}> <h1>Nuestro Equipo</h1></div>
      <div className={styles.contentAll}>
        <div className={styles.contentCarrousel}>
          <div className={styles.card}>
            <figure>
              <img src={perfil1} alt="imagen-1" />
              <div className={styles.cardContent}>
                <h3>Santiago Pi</h3>
                <p>Marketing</p>
              </div>
            </figure>
          </div>
          <div className={styles.card}>
            <figure>
              <img src={perfil2} alt="imagen-2" />
              <div className={styles.cardContent}>
                <h3>Enrique Espinosa</h3>
                <p>Full Stack Jr</p>
              </div>
            </figure>
          </div>
          <div className={styles.card}>
            <figure>
              <img src={perfil3} alt="imagen-3" />
              <div className={styles.cardContent}>
                <h3>Maximiliano Ferrez</h3>
                <p>Project manager</p>
              </div>
            </figure>
          </div>
          <div className={styles.card}>
            <figure>
              <img src={perfil2} alt="imagen-4" />
              <div className={styles.cardContent}>
                <h3>Maxi Diaz</h3>
                <p>Diseñador</p>
              </div>
            </figure>
          </div>
          <div className={styles.card}>
            <figure>
              <img src={perfil1} alt="imagen-5" />
              <div className={styles.cardContent}>
                <h3>Pablo Correa</h3>
                <p>FrontEnd Jr</p>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Carrusel;
