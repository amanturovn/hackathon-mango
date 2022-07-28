import { Box, Pagination, Slider } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { productsContext } from "../../contexts/productContetx";
import ProductsCard from "../ProductsCard/ProductsCard";

import "../ProductsList/ProductList.css";

const ProductsList = () => {
  const { products, getProducts, pages, categories } =
    useContext(productsContext);
  console.log(pages);
  const [searchParams, setSearchParams] = useSearchParams();

  const [price, setPrice] = useState([1, 10000]);

  console.log(products);
  const navigate = useNavigate();

  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );

  const [currentPage, setCurrentPage] = useState(
    searchParams.get("page") ? +searchParams.get("page") : 1
  );
  console.log(products);
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getProducts();
  }, [searchParams]);
  console.log(categories);
  useEffect(() => {
    setSearchParams({
      q: search,
      page: currentPage,
      price_from: price[0],
      price_to: price[1],
    });
  }, [search, currentPage, price]);

  return (
    <div className="product-list-block">
      <div className="products-filter-price">
        <div className="search-block">
          <input
            value={search}
            className="all-product-input0-search"
            onChange={e => setSearch(e.target.value)}
            placeholder="search"
          />
        </div>
        <div className="slider-block">
          <Slider
            color="secondary"
            className="slider-all-product"
            getAriaLabel={() => "Temperature range"}
            value={price}
            onChange={(e, value) => {
              console.log(value);
              setPrice(value);
            }}
            min={1}
            max={500}
            step={10}
            valueLabelDisplay="auto"
          />
        </div>
        {products.map(elem => (
          <div className="btn-block-add" key={elem.id} elem={elem}>
            {elem.author ? (
              <button
                className="add-pruct-btn-list"
                onClick={() => navigate("/add-product")}>
                add product
              </button>
            ) : null}
          </div>
        ))}
      </div>

      {products.map(item => (
        <>
          <ProductsCard key={item.id} item={item} />
        </>
      ))}

      <div className="pagination">
        <Pagination
          page={currentPage}
          onChange={(e, page) => setCurrentPage(page)}
          count={pages}
          variant="outlined"
          color="secondary"
        />
      </div>
    </div>
  );
};

export default ProductsList;
