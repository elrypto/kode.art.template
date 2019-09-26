import React from "react";
import Header from "./views/Header";
import Footer from "./views/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function App(props: any): JSX.Element {
 
  return (
    <React.Fragment>
      <Header />
        <ToastContainer />
          {props.children}
      <Footer />
    </React.Fragment>
  );
}
