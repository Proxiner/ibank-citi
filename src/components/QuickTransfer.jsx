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

  return (
    <div className={styles.quickTransferBox}>
      <h1 className={styles.Title}>Quick Money Transfer</h1>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={false}
        navigation={false}
        modules={[EffectFlip, Pagination, Navigation]}
        className="swiper"
        style={{ width: "400px", height: "70px" }}
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
                sitekey="6LdoUMMoAAAAAPZElFATmjJzyzaGJiFmvSaTCdM1"
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
