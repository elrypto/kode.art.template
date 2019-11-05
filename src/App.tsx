import React from "react";
import Header2 from "./views/Header2";
import Footer from "./views/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function App(props: any): JSX.Element {
 
  return (
    <React.Fragment>
      <Header2 />
        <ToastContainer />
          {props.children}
      <Footer />
    </React.Fragment>
  );
}
