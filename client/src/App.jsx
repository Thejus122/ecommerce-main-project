// src/App.jsx

import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";

function App() {

  return (

    <>

      {/* NAVBAR */}

      <Navbar />

      {/* ROUTES */}

      <Routes>

        {/* LOGIN PAGE FIRST */}

        <Route
          path="/"
          element={<Login />}
        />

        {/* HOME PAGE */}

        <Route
          path="/home"
          element={<Home />}
        />

        {/* PRODUCT DETAILS */}

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        {/* CATEGORY PAGE */}

        <Route
          path="/category/:name"
          element={<CategoryPage />}
        />

        {/* CART PAGE */}

        <Route
          path="/cart"
          element={<CartPage />}
        />

        {/* CHECKOUT PAGE */}

        <Route
          path="/checkout"
          element={<Checkout />}
        />

      </Routes>

      {/* FOOTER */}

      <Footer />

    </>

  );
}

export default App;