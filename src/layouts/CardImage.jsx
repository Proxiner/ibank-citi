import React from 'react'
import styles from './_CardImage.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import CardImageDetails from '../components/CardImageDetails';

function CardImage() {

  return (
    <Swiper className={styles.cardImage}
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
    >
      <SwiperSlide className={styles.swiperSlide}>
        <div className={styles.CardImageDetailsContainer}>
          <CardImageDetails title={"Blue"} numberCard={"2235 6618 **** 1864"} owner={"Erfan Rezaie"} />
        </div>
        <div className={styles.swiperSlideBefore}></div>
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <div className={styles.CardImageDetailsContainer}>
          <CardImageDetails title={"Red"} numberCard={"2235 6618 **** 1864"} owner={"Erfan Rezaie"} />
        </div>
        <div className={styles.swiperSlideBefore}></div>
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <div className={styles.CardImageDetailsContainer}>
          <CardImageDetails title={"Green"} numberCard={"2235 6618 **** 1864"} owner={"Erfan Rezaie"} />
        </div>
        <div className={styles.swiperSlideBefore}></div>
      </SwiperSlide>
    </Swiper>
  )
}

export default CardImage