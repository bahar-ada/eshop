import Card from "@/components/Card";
import { GET } from "@/repository/AxiosRepository";
import React from "react";
import styles from "./[searchingText].module.css";

const searchResult = ({ listOfProducts }) => {
  return (
    <div className={`${styles.outerContainer}`}>
      {listOfProducts.map((item) => {
        return <Card product={item} />;
      })}
    </div>
  );
};

export default searchResult;

export async function getServerSideProps(context) {
  let listOfProducts = [];

  await GET(`products/search/${context.params.searchingText}`).then(
    (res) => (listOfProducts = res.data)
  );
  if (listOfProducts.length > 0) {
    return {
      props: { listOfProducts },
    };
  } else {
    return {
      notFound: true,
    };
  }
}
