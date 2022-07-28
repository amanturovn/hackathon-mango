import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProductsContextProvider from "./contexts/productContetx";
import Routing from "./Routing/Routing";
import "./App.css";
import AuthContextProvider from "./contexts/authContext";
// import { CardContent } from "@mui/material";
import CartContextProvider from "./contexts/cardContext";

const App = () => {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <ProductsContextProvider>
          <BrowserRouter>
            <Header />
            {/* <div className="container"> */}
            <div className="invicible"></div>
            <Routing />
            {/* </div> */}
            <Footer />
          </BrowserRouter>
        </ProductsContextProvider>
      </CartContextProvider>
    </AuthContextProvider>
  );
};

export default App;
