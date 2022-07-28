import { Container, IconButton, Typography } from "@mui/material";

import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productsContext } from "../../contexts/productContetx";
import Loader from "../Loader/Loader";
// import Reviews from "../Reviews/Reviews";
import "../DetailsProduct/Deatils.css";

const DetailsProduct = () => {
  const { id } = useParams();
  const { getOneProduct, oneProduct } = useContext(productsContext);
  const navigate = useNavigate();
  useEffect(() => {
    getOneProduct(id);
  }, []);

  if (!oneProduct) {
    return <Loader />;
  }
  // console.log(oneProduct);

  return (
    <div className="details-block">
      <div className="details-content-block">
        <h2>Title: {oneProduct.title}</h2>
        <h2>Price: {oneProduct.price}</h2>
        <h2>Description: {oneProduct.description}</h2>
      </div>
      <div className="details-img">
        <img width={"300px"} src={oneProduct.image} alt="product" />
      </div>

      {/* <Reviews reviews={oneProduct.reviews} /> */}
    </div>
  );
};

export default DetailsProduct;
