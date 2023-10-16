import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import AlertBootStrap from "@/components/AlertBootStrap";
import ButtonBootstrap from "@/components/ButtonBootstrap";
import * as fetchApi from "@/repository/FetchApiRepository";
import Context from "@/context/Context";
import { useContext } from "react";
import MainPageSlider from "@/components/MainPageSlider";
import SevenIcons from "@/components/SevenIcons";
import IncredibleOffers from "@/components/IncredibleOffers";

export default function Home(props) {
  //console.log(props.sliderImages)
  return (
    <>
      <Context.Provider
        value={{
          mainPageSliderImages: props.sliderImages,
        }}
      >
        <MainPageSlider />
        <SevenIcons icons={props.sevenIconsData} />
        <IncredibleOffers products={props.incredibleOffersData} />
        {/* <AlertBootStrap/> */}
        {/* <ButtonBootstrap/> */}
      </Context.Provider>
    </>
  );
}

export async function getStaticProps(context) {
  const sliderRequest = await fetchApi.GET("public/mainSlider");
  const sliderImages = await sliderRequest.json();

  const sevenIconsRequest = await fetchApi.GET("SevenIcons");
  const sevenIconsData = await sevenIconsRequest.json();

  const incredibleOffersRequest = await fetchApi.GET(
    "products/incredibleOffers"
  );
  const incredibleOffersData = await incredibleOffersRequest.json();

  // console.log(sliderImages)
  return {
    props: { sliderImages, sevenIconsData, incredibleOffersData },
    revalidate: 600,
  };
}
