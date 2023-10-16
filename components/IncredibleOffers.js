import React from "react";
import styles from "./IncredibleOffers.module.css";
import Carusel from "./Carusel";
import Image from "next/image";

const IncredibleOffers = ({ products }) => {
  return (
    <div className={`${styles.outerContainer}`}>
      <div className={`${styles.carouselContainer}`}>
        <Carusel cardsCount={5} data={products} />;
      </div>
      <div className={`${styles.imagesContainer}`}>
        <Image src="/images/amazingTypo.png" width={80} height={80} />
        <Image src="/images/box.png" width={80} height={80} />
      </div>
    </div>
  );
};

export default IncredibleOffers;
