// Nosotros.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';

import fondoCard from '../../assets/FONDOCard.png'; // Ruta de la imagen de fondo de la card
import perfil1 from '../../assets/PerfilQuique.png';
import perfil2 from '../../assets/PerfilMaxiF.png';
import perfil3 from '../../assets/PerfilPablo.png';
import perfil4 from '../../assets/PerfilMaxiD.png';
import perfil5 from '../../assets/PerfilSanti.png';
import styles from './Nosotros.module.css';

const Nosotros = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className={`mySwiper ${styles.mySwiper}`}
      loop={true}
    >
      <SwiperSlide>

        <div className={styles.card}>
          <div className={styles.card2}>
            {/* Fondo de la card */}
            <img src={fondoCard} alt="Fondo de Card" className={`${styles.cardBackground}`} />
            <div className={`${styles.cardImage}`}>
              {/* Imagen de perfil */}
              <img src={perfil1} alt="Perfil 1"  />

            </div>

          </div>
        </div>
      </SwiperSlide>
      
      <SwiperSlide>

        <div className={styles.card}>
          <div className={styles.card2}>
            {/* Fondo de la card */}
            <img src={fondoCard} alt="Fondo de Card" className={`${styles.cardBackground}`} />
            <div className={`${styles.cardImage}`}>
              {/* Imagen de perfil */}
              <img src={perfil2} alt="Perfil 2"  />

            </div>

          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>

<div className={styles.card}>
  <div className={styles.card2}>
    {/* Fondo de la card */}
    <img src={fondoCard} alt="Fondo de Card" className={`${styles.cardBackground}`} />
    <div className={`${styles.cardImage}`}>
      {/* Imagen de perfil */}
      <img src={perfil3} alt="Perfil 3"  />

    </div>

  </div>
</div>
</SwiperSlide>
<SwiperSlide>

<div className={styles.card}>
  <div className={styles.card2}>
    {/* Fondo de la card */}
    <img src={fondoCard} alt="Fondo de Card" className={`${styles.cardBackground}`} />
    <div className={`${styles.cardImage}`}>
      {/* Imagen de perfil */}
      <img src={perfil4} alt="Perfil 4"  />

    </div>

  </div>
</div>
</SwiperSlide>
<SwiperSlide>

<div className={styles.card}>
  <div className={styles.card2}>
    {/* Fondo de la card */}
    <img src={fondoCard} alt="Fondo de Card" className={`${styles.cardBackground}`} />
    <div className={`${styles.cardImage}`}>
      {/* Imagen de perfil */}
      <img src={perfil5} alt="Perfil 5"  />

    </div>

  </div>
</div>
</SwiperSlide>

    </Swiper>
  );
};

export default Nosotros;
