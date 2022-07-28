import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  useRadioGroup,
} from "@mui/material";

import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { PhotoCamera } from "@mui/icons-material";
import { productsContext } from "../../contexts/productContetx";
import "../AddProduct/AddProduct.css";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const { createProduct, categories, getCategories, products } =
    useContext(productsContext);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  // const [image2, setImage2] = useState(null);
  // const [image3, setImage3] = useState(null);
  // const [image4, setImage4] = useState(null);

  useEffect(() => {
    getCategories();
  }, []);
  // console.log(products);

  function handleSave() {
    let newProduct = new FormData();
    newProduct.append("title", title);
    newProduct.append("description", description);
    newProduct.append("price", price);
    newProduct.append("category", category);
    newProduct.append("image", image);

    createProduct(newProduct, navigate);
  }
  return (
    <div className="add-product-content-block">
      <div className="add-product-block">
        <h2>Add Product</h2>
        <input
          className="add-product-inp"
          value={title}
          onChange={e => setTitle(e.target.value)}
          type={"text"}
          placeholder={"title"}
        />
        <input
          className="add-product-inp"
          value={description}
          onChange={e => setDescription(e.target.value)}
          type={"text"}
          placeholder={"description"}
        />
        <input
          className="add-product-inp"
          value={price}
          onChange={e => setPrice(e.target.value)}
          type={"number"}
          placeholder={"price"}
        />

        <p className="cotegory-content">Category</p>

        <FormControl fullWidth className="add-content">
          {/* <InputLabel id="demo-simple-select-label">Category</InputLabel> */}
          <Select
            className="add-cotegory"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Category"
            onChange={e => setCategory(e.target.value)}>
            {categories.map(item => (
              <MenuItem key={item.title} value={item.title}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box className="inp-img">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label">
            <input
              hidden
              accept="image/*"
              type="file"
              onChange={e => setImage(e.target.files[0])}
            />
            <PhotoCamera />
          </IconButton>
          {image ? <Typography variant="span">{image.name}</Typography> : null}
        </Box>
        <button className="add-peoduct-btn" onClick={handleSave}>
          add product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
