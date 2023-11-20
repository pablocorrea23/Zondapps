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
    <>
     
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className={`mySwiper ${styles.mySwiper}`}
      loop={true}
    >
   
      <SwiperSlide>
        <div className={`${styles.card}`}>
          <img src={perfil1} alt="Perfil 1" className={`${styles.cardImage}`} />
          <div className={`${styles.cardBody}`}>
            <h5 className={`${styles.cardTitle}`}>Santiago Pi</h5>
            <p className={`${styles.cardText}`}>Marketing y Ventas</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`${styles.card}`}>
          <img src={perfil2} alt="Perfil 2" className={`${styles.cardImage}`} />
          <div className={`${styles.cardBody}`}>
            <h5 className={`${styles.cardTitle}`}>Enrique Espinosa</h5>
            <p className={`${styles.cardText}`}>Full Stack Jr</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`${styles.card}`}>
          <img src={perfil3} alt="Perfil 3" className={`${styles.cardImage}`} />
          <div className={`${styles.cardBody}`}>
            <h5 className={`${styles.cardTitle}`}>Maximiliano Ferrez</h5>
            <p className={`${styles.cardText}`}>Full Stack Ssr</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`${styles.card}`}>
          <img src={perfil1} alt="Perfil 1" className={`${styles.cardImage}`} />
          <div className={`${styles.cardBody}`}>
            <h5 className={`${styles.cardTitle}`}>Maxi Días</h5>
            <p className={`${styles.cardText}`}> UX / UI designer</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`${styles.card}`}>
          <img src={perfil2} alt="Perfil 2" className={`${styles.cardImage}`} />
          <div className={`${styles.cardBody}`}>
            <h5 className={`${styles.cardTitle}`}>Pablo Correa</h5>
            <p className={`${styles.cardText}`}>Frontend Ssr</p>
          </div>
        </div>
      </SwiperSlide>
      {/* Agrega más slides según sea necesario */}
    </Swiper>
    </>
  );
};

export default Nosotros;
