// src/pages/ProductDetails.jsx

import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { useDispatch } from "react-redux";

import { addToCart }
from "../redux/slices/cartSlice";

import API from "../api/api.js";

// IMAGES

import tshirt from "../assets/tshirt.png";
import jeans from "../assets/jeans.png";
import shirt from "../assets/shirt.png";
import shirt2 from "../assets/shirt2.png";

import gym1 from "../assets/gym1.png";
import gym2 from "../assets/gym2.png";
import gym3 from "../assets/gym3.png";

import formal1 from "../assets/formal1.png";
import formal2 from "../assets/formal2.png";

import Reviews from "../components/Reviews";

// IMAGE MAP

const imageMap = {
  "tshirt.png": tshirt,
  "jeans.png": jeans,
  "shirt.png": shirt,
  "shirt2.png": shirt2,

  "gym1.png": gym1,
  "gym2.png": gym2,
  "gym3.png": gym3,

  "formal1.png": formal1,
  "formal2.png": formal2,
};

export default function ProductDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [product, setProduct] =
    useState(null);

  const [quantity, setQuantity] =
    useState(1);

  // FETCH PRODUCT

  useEffect(() => {

    const fetchProduct = async () => {

      try {

        const response =
          await API.get("products/");

        const foundProduct =
          response.data.find(
            (item) =>
              item.id == id
          );

        console.log(foundProduct);

        setProduct(foundProduct);

      } catch (error) {

        console.log(error);

      }

    };

    fetchProduct();

  }, [id]);

  // LOADING

  if (!product) {

    return (

      <h1
        className="text-center text-[40px] font-black mt-20"
      >
        Loading...
      </h1>

    );

  }

  // ADD TO CART

  const handleAddToCart = () => {

    for (
      let i = 0;
      i < quantity;
      i++
    ) {

      dispatch(addToCart(product));

    }

    navigate("/cart");

  };

  return (

    <section className="w-full bg-white px-[60px] py-[20px]">

      {/* TOP SECTION */}

      <div className="flex gap-7 flex-wrap items-start">

        {/* LEFT SIDE */}

        <div className="flex gap-3">

          {/* SMALL IMAGES */}

          <div className="flex flex-col gap-3">

            {[1, 2, 3].map((item) => (

              <div
                key={item}
                className={`w-[45px] h-[45px] rounded-[10px] bg-[#F3F4F6] flex items-center justify-center ${
                  item === 1
                    ? "border border-black"
                    : ""
                }`}
              >

                <img
                  src={
                    imageMap[
                      product.image?.trim()
                    ] || tshirt
                  }
                  alt=""
                  className="w-[55%] h-[55%] object-contain"
                />

              </div>

            ))}

          </div>

          {/* BIG IMAGE */}

          <div className="w-[300px] h-[300px] bg-[#F3F4F6] rounded-[18px] flex items-center justify-center">

            <img
              src={
                imageMap[
                  product.image?.trim()
                ] || tshirt
              }
              alt={product.title}
              className="w-[75%] h-[75%] object-contain"
            />

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="w-[420px]">

          {/* TITLE */}

          <h1 className="text-[24px] font-black mb-2">

            {product.title}

          </h1>

          {/* RATING */}

          <div className="flex items-center gap-2 mb-4">

            <span className="text-yellow-400 text-[15px]">
              ★★★★★
            </span>

            <span className="text-gray-500 text-[13px]">
              4.5/5
            </span>

          </div>

          {/* PRICE */}

          <div className="flex items-center gap-3 mb-4">

            <h2 className="text-[24px] font-black">

              ${product.price}

            </h2>

            <span className="text-gray-400 line-through text-[18px]">

              $300

            </span>

            <span className="bg-red-100 text-red-500 text-[11px] px-3 py-1 rounded-full">

              -40%

            </span>

          </div>

          {/* DESCRIPTION */}

          <p className="text-gray-500 text-[14px] leading-[22px] border-b border-gray-200 pb-4 mb-4">

            {product.description}

          </p>

          {/* COLORS */}

          <div className="border-b border-gray-200 pb-4 mb-4">

            <p className="text-gray-500 text-[14px] mb-2">

              Select Colors

            </p>

            <div className="flex gap-3">

              {[
                "#4B5563",
                "#166534",
                "#312E81",
              ].map((color, index) => (

                <div
                  key={index}
                  style={{
                    background: color,
                  }}
                  className="w-[16px] h-[16px] rounded-full cursor-pointer"
                />

              ))}

            </div>

          </div>

          {/* SIZE */}

          <div className="border-b border-gray-200 pb-4 mb-4">

            <p className="text-gray-500 text-[14px] mb-2">

              Choose Size

            </p>

            <div className="flex gap-2">

              {[
                "S",
                "M",
                "L",
                "XL",
              ].map((size, index) => (

                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-[13px] ${
                    size === "L"
                      ? "bg-black text-white"
                      : "bg-[#F3F4F6] text-gray-500"
                  }`}
                >

                  {size}

                </button>

              ))}

            </div>

          </div>

          {/* CART SECTION */}

          <div className="flex gap-3 items-center">

            {/* QUANTITY */}

            <div className="w-[100px] h-[38px] bg-[#F3F4F6] rounded-full flex items-center justify-around">

              <button
                onClick={() => {

                  if (quantity > 1) {

                    setQuantity(quantity - 1);

                  }

                }}
                className="text-[16px]"
              >
                -
              </button>

              <span className="text-[14px]">

                {quantity}

              </span>

              <button
                onClick={() =>
                  setQuantity(quantity + 1)
                }
                className="text-[16px]"
              >
                +
              </button>

            </div>

            {/* ADD TO CART */}

            <button
              onClick={handleAddToCart}
              className="flex-1 h-[38px] rounded-full bg-black text-white text-[13px] font-semibold"
            >

              Add To Cart

            </button>

          </div>

        </div>

      </div>

      {/* REVIEWS */}

      <Reviews />

    </section>

  );

}