import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Store } from "@/redux/Store";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import localFont from "next/font/local";
import { Provider } from "react-redux";

export const myFont1 = localFont({ src: "../public/fonts/IRANSansWeb.woff" });

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className={myFont1.className}>
        <Provider store={Store}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Provider>
      </div>
    </>
  );
}
