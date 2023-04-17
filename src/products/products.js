import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";
import instance from "../axiosConfig/axiosInstance";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    instance
      .get("/products")
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <ul>
        {products.map((item) => {
          return (
            <p key={item.id}>
              <Link to={`/products/${item.id}`}>{item.title}</Link>
            </p>
          );
        })}
      </ul>
      <Outlet></Outlet>
    </div>
  );
};

export default Products;
