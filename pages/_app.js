import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Store, myPersistor } from "@/redux/PersistableStore";

import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import localFont from "next/font/local";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export const myFont1 = localFont({ src: "../public/fonts/IRANSansWeb.woff" });

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className={myFont1.className}>
        <Provider store={Store}>
          <PersistGate loading={<h1>merging store and persistale storage ...</h1>} persistor={myPersistor}>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </PersistGate>
        </Provider>
      </div>
    </>
  );
}
