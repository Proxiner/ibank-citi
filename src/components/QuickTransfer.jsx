import React, { useRef } from "react";
import styles from "./_Transfer.module.scss";
import CreditCardNumber from "./CreditCardNumber";
import Sepah from "../assets/bank-sepah.svg";
import Tejarat from "../assets/Tejarat-Bank-logo.svg"

import GoogleRecaptcha from "react-google-recaptcha";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination, Navigation } from "swiper/modules";

function QuickTransfer() {
  const recaptchaRef = useRef();

  const handleSubmit = () => {
    recaptchaRef.current.getValue();
  };

  
  const swiperRef = useRef(null);

  const handleNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };


  return (
    <div className={styles.quickTransferBox}>
      <h1 className={styles.Title}>Quick Money Transfer</h1>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={false}
        navigation={false}
        modules={[EffectFlip, Pagination, Navigation]}
        ref={swiperRef}
        className={styles.swiper}
        style={{ width: "100%", height: "max-content", position: 'relative' }}
      >
        <SwiperSlide>
          <CreditCardNumber creditCardNumber={"5859 **** **** 2245"} imageSrc={Tejarat} />
        </SwiperSlide>
        <SwiperSlide>
          <CreditCardNumber creditCardNumber={"111 **** **** 111"} imageSrc={Sepah}/>
        </SwiperSlide>
        <SwiperSlide>
          <CreditCardNumber creditCardNumber={"7777 **** **** 7777"} imageSrc={Tejarat}/>
        </SwiperSlide>
        <SwiperSlide>
          <CreditCardNumber creditCardNumber={"5555 **** **** 5555"} imageSrc={Sepah}/>
        </SwiperSlide>

        <button onClick={handlePrevSlide} className={styles.control}>
            <svg
              className={styles.arrowLeft}
              id="vuesax_outline_arrow-circle-right"
              data-name="vuesax/outline/arrow-circle-right"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g id="arrow-circle-right">
                <path
                  id="Vector"
                  d="M10.75,21.5A10.75,10.75,0,1,1,21.5,10.75,10.759,10.759,0,0,1,10.75,21.5Zm0-20A9.25,9.25,0,1,0,20,10.75,9.261,9.261,0,0,0,10.75,1.5Z"
                  transform="translate(1.25 1.25)"
                  fill="#e8e8e8"
                />
                <path
                  id="Vector-2"
                  data-name="Vector"
                  d="M.747,8.558a.742.742,0,0,1-.53-.22.754.754,0,0,1,0-1.06l3-3-3-3A.75.75,0,0,1,1.278.218l3.53,3.53a.754.754,0,0,1,0,1.06l-3.53,3.53A.742.742,0,0,1,.747,8.558Z"
                  transform="translate(9.992 7.723)"
                  fill="#626262"
                />
                <path
                  id="Vector-3"
                  data-name="Vector"
                  d="M0,0H24V24H0Z"
                  fill="none"
                  opacity="0"
                />
              </g>
            </svg>
          </button>
          <button onClick={handleNextSlide} className={styles.control}>
            <svg
              id="vuesax_outline_arrow-circle-right"
              data-name="vuesax/outline/arrow-circle-right"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g id="arrow-circle-right">
                <path
                  id="Vector"
                  d="M10.75,21.5A10.75,10.75,0,1,1,21.5,10.75,10.759,10.759,0,0,1,10.75,21.5Zm0-20A9.25,9.25,0,1,0,20,10.75,9.261,9.261,0,0,0,10.75,1.5Z"
                  transform="translate(1.25 1.25)"
                  fill="#e8e8e8"
                />
                <path
                  id="Vector-2"
                  data-name="Vector"
                  d="M.747,8.558a.742.742,0,0,1-.53-.22.754.754,0,0,1,0-1.06l3-3-3-3A.75.75,0,0,1,1.278.218l3.53,3.53a.754.754,0,0,1,0,1.06l-3.53,3.53A.742.742,0,0,1,.747,8.558Z"
                  transform="translate(9.992 7.723)"
                  fill="#626262"
                />
                <path
                  id="Vector-3"
                  data-name="Vector"
                  d="M0,0H24V24H0Z"
                  fill="none"
                  opacity="0"
                />
              </g>
            </svg>
          </button>
      </Swiper>
      <div className="cardboxContiner">
        <div className={styles.cardBox}>
          <img
            src={Sepah}
            alt="Sepah Icon"
            className={styles.slider}
          />
          <span>5859 ***** ***** 2245</span>
          <span className={styles.userName}>Mohammad</span>
        </div>
      </div>

      <div className="cardboxContiner">
        <div className={styles.cardBox}>
          <span className={styles.captchaTitle}>
            300,000
            <span>(IR)</span>
          </span>
          <form onSubmit={handleSubmit} className={styles.captchaImg}>
            {/* <GoogleRecaptcha
                ref={recaptchaRef}
                sitekey="6LcNIigpAAAAADpeOJooOeBHhb9YrIs69KW2JjUE"
              /> */}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <button type="button" className={styles.confirmBtn}>
        Confirm Trasnfer
      </button>
    </div>
  );
}

export default QuickTransfer;
