import React from "react";
import TopBanner from "./TopBanner";
import SearchBox from "./SearchBox";
import { BsFillBasket3Fill } from 'react-icons/bs'
import Link from "next/link";
import styles from './Header.module.css'
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <TopBanner />
      <div className={`${styles.outerContainer}`}>
        <div className={`${styles.rightContainer}`}>
          <Link href='/'>
            <Image src='/images/logoFarsi.svg' width={200} height={50} />
          </Link>
          <SearchBox />

        </div>

        <div className={`${styles.leftContainer}`}>
          <Link href="/shoppingCart">
            <BsFillBasket3Fill size='1.5em' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
