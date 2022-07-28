import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AboutUs from "../components/AboutUs/AboutUs";
import AddProduct from "../components/AddProduct/AddProduct";
import Intro from "../components/Intro/Intro";
import ProductsList from "../components/ProductsList/ProductsList";
import CreditCard from "../components/CreditCard/CreditCard";
import Card from "../components/Card/Card";
import Register from "../components/Register/Register";
import RegisterSuccess from "../components/RegisterSuccess/RegisterSuccess";
import { authContext } from "../contexts/authContext";
import Login from "../components/Login/Login";
import Magazines from "../components/Magazines/Magazines";
import Company from "../components/Company/Company";
import Contact from "../components/Contact/Contact";
import Loader from "../components/Loader/Loader";
import Edit from "../components/Edit/Edit";
import DetailsProduct from "../components/DetailsProduct/DetailsProduct";

const Routing = () => {
  const { loading, currentUser } = useContext(authContext);
  if (loading) {
    return <Loader />;
  }
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/products-list" element={<ProductsList />} />
      <Route path="/credit-card" element={<CreditCard />} />
      <Route path="/card" element={<Card />} />
      <Route path="/register" element={<Register />} />
      <Route path="/magazines" element={<Magazines />} />
      <Route path="/company" element={<Company />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/details/:id" element={<DetailsProduct />} />

      <Route
        path="/register-success"
        element={
          currentUser ? (
            <Navigate to="/products-list" replace />
          ) : (
            <RegisterSuccess />
          )
        }
      />
      <Route
        path="/login"
        element={
          currentUser ? <Navigate to="/products-list" replace /> : <Login />
        }
      />
    </Routes>
  );
};

export default Routing;
