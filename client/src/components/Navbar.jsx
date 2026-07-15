import "./Navbar.css";

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import {
  Search,
  ShoppingCart,
  CircleUserRound,
  LogOut,
} from "lucide-react";

export default function Navbar() {

  const navigate = useNavigate();

  const [showDropdown, setShowDropdown] =
    useState(false);

  const [isLoggedIn, setIsLoggedIn] =
    useState(false);

  // REDUX CART

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  // TOTAL QUANTITY

  const cartCount = cartItems.reduce(
    (acc, item) =>
      acc + (item.quantity || 1),
    0
  );

  // CHECK LOGIN

  useEffect(() => {

    const token =
      localStorage.getItem("token");

    setIsLoggedIn(!!token);

  }, []);

  // LOGOUT

  const handleLogout = () => {

    localStorage.removeItem("token");

    setIsLoggedIn(false);

    alert("Logout Successful");

    navigate("/");

  };

  return (

    <nav className="navbar">

      {/* LEFT */}

      <div className="navbar-left">

        {/* LOGO */}

        <h1 className="logo">
          SHOP.CO
        </h1>

        {/* MENU */}

        <div className="nav-menu">

          {/* HOME */}

          <Link
            to="/home"
            className="nav-link"
          >
            Home
          </Link>

          {/* NEW ARRIVALS */}

          <a
            href="#new-arrivals"
            className="nav-link"
          >
            New Arrivals
          </a>

          {/* DROPDOWN */}

          <div
            className="dropdown-wrapper"
            onClick={() =>
              setShowDropdown(!showDropdown)
            }
          >

            <div className="nav-link">
              Categories ▼
            </div>

            {showDropdown && (

              <div className="dropdown-menu">

                <Link
                  to="/category/gym"
                  className="dropdown-link"
                >
                  Gym
                </Link>

                <Link
                  to="/category/casual"
                  className="dropdown-link"
                >
                  Casual
                </Link>

                <Link
                  to="/category/formal"
                  className="dropdown-link"
                >
                  Formal
                </Link>

                <Link
                  to="/category/party"
                  className="dropdown-link"
                >
                  Party
                </Link>

              </div>

            )}

          </div>

        </div>

      </div>

      {/* SEARCH */}

      <div className="navbar-search">

        <Search
          size={18}
          className="search-icon"
        />

        <input
          type="text"
          placeholder="Search for products..."
        />

      </div>

      {/* RIGHT */}

      <div className="navbar-right">

        {/* CART */}

        <Link
          to="/cart"
          style={{
            position: "relative",
          }}
        >

          <ShoppingCart
            size={22}
            className="cart-icon"
          />

          {/* CART COUNT */}

          {cartCount > 0 && (

            <div
              style={{
                position: "absolute",
                top: "-10px",
                right: "-10px",

                width: "20px",
                height: "20px",

                borderRadius: "50%",

                background: "red",
                color: "white",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                fontSize: "11px",
                fontWeight: "600",
              }}
            >
              {cartCount}
            </div>

          )}

        </Link>

        {/* LOGIN / LOGOUT */}

        {isLoggedIn ? (

          <button
            onClick={handleLogout}
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontWeight: "600",
            }}
          >

            <LogOut size={22} />

            Logout

          </button>

        ) : (

          <Link
            to="/"
            style={{
              color: "black",
            }}
          >

            <CircleUserRound size={22} />

          </Link>

        )}

      </div>

    </nav>
  );
}