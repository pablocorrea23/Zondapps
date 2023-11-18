// Nosotros.jsx

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';

import perfil1 from '../../assets/perfil1.png';
import perfil2 from '../../assets/perfil2.png';
import perfil3 from '../../assets/perfil3.png';

import styles from './Nosotros.module.css'; // Asegúrate de usar el nombre correcto aquí

const Nosotros = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className={`mySwiper ${styles.mySwiper}`}
      loop={true}
    >
      {/* <div> <h1>Nuestro Equipo</h1></div> */}
      <SwiperSlide>
        <div className={`${styles.card}`}>
          <img src={perfil1} alt="Perfil 1" className={`${styles.cardImage}`} />
          <div className={`${styles.cardBody}`}>
            <h5 className={`${styles.cardTitle}`}>Slide 1</h5>
            <p className={`${styles.cardText}`}>Descripción del Slide 1.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`${styles.card}`}>
          <img src={perfil2} alt="Perfil 2" className={`${styles.cardImage}`} />
          <div className={`${styles.cardBody}`}>
            <h5 className={`${styles.cardTitle}`}>Slide 2</h5>
            <p className={`${styles.cardText}`}>Descripción del Slide 2.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`${styles.card}`}>
          <img src={perfil3} alt="Perfil 3" className={`${styles.cardImage}`} />
          <div className={`${styles.cardBody}`}>
            <h5 className={`${styles.cardTitle}`}>Slide 3</h5>
            <p className={`${styles.cardText}`}>Descripción del Slide 3.</p>
          </div>
        </div>
      </SwiperSlide>
      {/* Agrega más slides según sea necesario */}
    </Swiper>
  );
};

export default Nosotros;
