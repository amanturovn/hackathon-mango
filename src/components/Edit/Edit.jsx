import {
  Box,
  Button,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { PhotoCamera } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { productsContext } from "../../contexts/productContetx";
import "../Edit/Edit.css";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    getCategories,
    categories,
    getOneProduct,
    oneProduct,
    updateProduct,
  } = useContext(productsContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  // const [image, setImage] = useState(null);
  // console.log(image);
  useEffect(() => {
    getCategories();
    getOneProduct(id);
  }, []);
  // console.log(oneProduct);
  useEffect(() => {
    if (oneProduct) {
      setTitle(oneProduct.title);
      setDescription(oneProduct.description);
      setPrice(oneProduct.price);
      setCategory(oneProduct.category.title);
    }
  }, [oneProduct]);

  function handleSave() {
    let editedProduct = new FormData();
    editedProduct.append("title", title);
    editedProduct.append("description", description);
    editedProduct.append("price", price);
    editedProduct.append("category", category);
    // editedProduct.append("image", image);
    // if (image) {
    //   editedProduct.append("image", image);
    // }
    updateProduct(id, editedProduct, navigate);
  }

  return (
    <div className="container" maxWidth="sm">
      <div className="cont-edit">
        <div className="edit-block">
          <Typography variant="h6">Edit Product</Typography>
          <input
            className="add-product-inp"
            value={title}
            onChange={e => setTitle(e.target.value)}
            label="Title"
            variant="outlined"
          />
          <input
            className="add-product-inp"
            value={description}
            onChange={e => setDescription(e.target.value)}
            label="Description"
            variant="outlined"
          />
          <input
            className="add-product-inp"
            value={price}
            onChange={e => setPrice(e.target.value)}
            label="Price"
            variant="outlined"
          />
          <p className="cotegory-content">Cotegory</p>

          <FormControl className="add-content" fullWidth>
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
          {/* <Box>
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
        </Box> */}
          {/* <Button onClick={handleSave} variant="contained">
          Save
        </Button> */}
          <button className="add-peoduct-btn" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
