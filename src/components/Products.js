import React, { useEffect, useState } from "react";
import Product from "./Product";
import { Alert } from "react-bootstrap";
import { getallProducts } from "../service/api";

function Products() {
  const [Produ, setProducts] = useState([]);
  const [showalert, setalert] = useState(false);
  const [msg, setmsg] = useState(true);
  const getproducts = async () => {
    const response = await getallProducts();
    setProducts(response.data);
  };
  const buy = () => {
    setalert(true);
    setTimeout(() => {
      setalert(false);
    }, 2000);
  };

  useEffect(() => {
    getproducts(); //useEffect(()=>{},[]) (fonction et tableau , si valeur dans tableau changes la fonction est lancée )
    setTimeout(() => {
      setmsg(false);
    }, 3000);
  },[]);
  useEffect(() => {});
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
