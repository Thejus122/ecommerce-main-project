// src/pages/CategoryPage.jsx

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

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

export default function CategoryPage() {

  const { name } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [products, setProducts] =
    useState([]);

  // FETCH PRODUCTS

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const response =
          await API.get("products/");

        setProducts(response.data);

      } catch (error) {

        console.log(error);

      }

    };

    fetchProducts();

  }, []);

  // FILTER PRODUCTS

  const filteredProducts = products.filter(
    (item) =>
      item.category.toLowerCase() ===
      name.toLowerCase()
  );

  // ADD TO CART

  const handleAddToCart = (product) => {

    dispatch(addToCart(product));

    navigate("/cart");

  };

  return (

    <div className="bg-white min-h-screen px-6 py-6">

      {/* TITLE */}

      <div className="text-center mb-8">

        <h2 className="text-[20px] font-black text-black capitalize">
          {name} Collection
        </h2>

      </div>

      {/* PRODUCTS */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-6 justify-items-center">

        {filteredProducts.map((item, index) => (

          <div
            key={index}
            className="w-[210px] bg-[#F5F5F5] rounded-[16px] overflow-hidden hover:-translate-y-2 transition-all duration-300 cursor-pointer"
          >

            {/* IMAGE */}

            <div className="flex items-center justify-center p-3">

              <img
                src={
                  imageMap[
                    item.image?.trim()
                  ] || tshirt
                }
                alt={item.title}
                className="w-full h-[170px] object-contain"
              />

            </div>

            {/* DETAILS */}

            <div className="px-3 pb-3">

              {/* TITLE */}

              <h3 className="text-[14px] font-bold text-black mb-1">
                {item.title}
              </h3>

              {/* RATING */}

              <div className="flex items-center gap-2 mb-2">

                <span className="text-yellow-400 text-[11px]">
                  ★★★★★
                </span>

                <span className="text-gray-400 text-[11px]">
                  4.5/5
                </span>

              </div>

              {/* PRICE */}

              <div className="flex items-center gap-2 mb-3">

                <span className="text-[16px] font-black text-black">
                  ${item.price}
                </span>

                <span className="text-gray-400 line-through text-[13px]">
                  $240
                </span>

              </div>

              {/* BUTTONS */}

              <div className="flex flex-col gap-2">

                {/* ADD TO CART */}

                <button
                  onClick={() =>
                    handleAddToCart(item)
                  }
                  className="w-full h-[32px] border border-black rounded-full text-[12px] font-medium hover:bg-black hover:text-white transition"
                >

                  Add To Cart

                </button>

                {/* BUY NOW */}

                <button
                  onClick={() =>
                    navigate(
                      `/product/${item.id}`,
                      {
                        state: item,
                      }
                    )
                  }
                  className="w-full h-[32px] bg-black text-white rounded-full text-[12px] font-medium hover:bg-gray-800 transition"
                >

                  Buy Now

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}