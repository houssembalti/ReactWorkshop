import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Notfound from "./components/Notfound";
import Products from "./components/Products";
import Testingcomp from "./components/Testingcomp";
import Testing from "./components/Testing";
import React from "react";
const Updateform =React.lazy(()=>import("./components/Updateform"))
const Addproduct=React.lazy(()=>import("./components/AddProduct"))
//import ProductDetails from "./components/ProductDetails";
const ProductDetails = React.lazy(() => import("./components/ProductDetails"));
function App() {
  return (
    <>
      <React.Suspense fallback={<h1> Loading</h1>}>
        <NavigationBar />
        <Routes>
          <Route path="/Parent">
            <Route index element={<Products />} />
            <Route path=":id" element={<ProductDetails />}></Route>
            <Route path="update/:id" element={<Updateform />}></Route>
          </Route>
          <Route path="addproduct" element={<Addproduct />}></Route>
          
          <Route path="/products" element={<Products />}></Route>
          <Route path="/test/:username" element={<Testing />}></Route>
          <Route path="Testingit" element={<Testingcomp />}></Route>
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
      </React.Suspense>
    </>
  );
}

export default App;
