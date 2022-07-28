import React, { useContext, useEffect, useState } from "react";
import "../ProductsCard/ProductCard.css";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { cartContext } from "../../contexts/cardContext";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { useNavigate } from "react-router-dom";
import { productsContext } from "../../contexts/productContetx";

const ProductsCard = ({ item }) => {
  const { addToCart, checkProductInCart } = useContext(cartContext);
  const { deleteProduct, toggleLike } = useContext(productsContext);
  const navigate = useNavigate();
  const [productCart, setProductCart] = useState(checkProductInCart(item.id));
  const [rating, setRating] = useState(0);

  return (
    <div className="card-main-block">
      <div className="card-block">
        <div className="card-content-block">
          <div className="card-content-block-img-text">
            <div className="card-content">
              <img className="card-img" src={item.image} />
            </div>
            <div className="card-section-block">
              <div className="card-title">
                <p>{item.title}</p>
                <p>{item.price}</p>
              </div>
              <div className="card-icon-block">
                <IconButton
                  className="btn-cart"
                  onClick={() => {
                    addToCart(item);
                    setProductCart(checkProductInCart(item.id));
                  }}>
                  {productCart ? (
                    <ShoppingCartRoundedIcon />
                  ) : (
                    <ShoppingCartOutlinedIcon />
                  )}
                </IconButton>
                <IconButton onClick={() => navigate(`/details/${item.id}`)}>
                  <InfoIcon />
                </IconButton>

                <div>
                  {item.author ? (
                    <div>
                      <IconButton onClick={() => deleteProduct(item.id)}>
                        <DeleteIcon />
                      </IconButton>

                      <IconButton onClick={() => navigate(`/edit/${item.id}`)}>
                        <EditIcon />
                      </IconButton>
                    </div>
                  ) : null}
                </div>

                <IconButton onClick={() => toggleLike(item.id)}>
                  {item.like}

                  <FavoriteIcon color={item.like ? "error" : "black"} />
                </IconButton>
              </div>
              <Stack spacing={rating}>
                <Rating
                  name="size-large"
                  defaultValue={rating}
                  onChange={e => setRating(e.target.value)}
                  size="large"
                />
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
