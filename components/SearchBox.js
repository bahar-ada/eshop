import React from "react";
import styles from "./SearchBox.module.css";
import { useRef } from "react";
import { useRouter } from "next/router";
const SearchBox = () => {
  const router = useRouter();
  const searchingText = useRef();
  const clickHandler = () => {
    console.log(searchingText.current.value);
    router.push(`products/search/${searchingText.current.value}`);
  };

  return (
    <div>
      <input type="text" placeholder="نام کالا" ref={searchingText} />
      <button onClick={clickHandler}> جستجو </button>
    </div>
  );
};

export default SearchBox;
