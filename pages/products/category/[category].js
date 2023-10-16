import Card from "@/components/Card";
import { GET } from "@/repository/AxiosRepository";
import { useRouter } from "next/router";
import React from "react";
import styles from "./[category].module.css";

const category = ({ fetchedData }) => {
  return (
    <div className={`${styles.outerContainer}`}>
      {fetchedData.map((item) => {
        return <Card product={item} />;
      })}
    </div>
  );
};

export default category;
export async function getServerSideProps(context) {
  // const router = useRouter();
  // console.log(router);
  // console.log(context.params);
  let fetchedData = [];

  await GET(`products/${context.params.category}`)
    .then((response) => (fetchedData = response.data))
    .catch((err) => console.log(err));

  if (fetchedData.length > 0) {
    return {
      props: { fetchedData },
    };
  } else {
    return {
      notFound: true,
    };
  }
}
