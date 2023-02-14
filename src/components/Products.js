import React, { useEffect, useState } from "react";
import Produ from "../Data/products.json";
import Product from "./Product";
import { Alert } from "react-bootstrap";

function Products() {
  const [showalert, setalert] = useState(false);
  const [msg, setmsg] = useState(true);
  const buy = () => {
    setalert(true);
    setTimeout(() => {
      setalert(false);
    }, 2000);
  };

  useEffect(() => {
    setTimeout(() => {
      setmsg(false);
    }, 3000);
  });
  return (
    <div>
      <Alert show={msg} variant="success">
        <Alert.Heading>Hey Welcome to our shop!</Alert.Heading>
        <p>Thank you for choosing our store!</p>
        <hr></hr>
      </Alert>
      <div className="d-flex " style={{ justifyContent: "space-evenly" }}>
        {Produ.map((produit) => {
          return <Product item={produit} buy={buy}></Product>;
        })}
      </div>
      <Alert show={showalert}>You Bought an item !</Alert>
    </div>
  );
}

export default Products;
