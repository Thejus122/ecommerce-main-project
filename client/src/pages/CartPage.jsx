// src/pages/CartPage.jsx

import { useSelector, useDispatch }
from "react-redux";

import { useNavigate }
from "react-router-dom";

import API from "../api/api.js";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/slices/cartSlice";

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

export default function CartPage() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  // DELETE PRODUCT

  const deleteItem = (id) => {

    dispatch(removeFromCart(id));

  };

  // INCREASE QUANTITY

  const increaseQty = (id) => {

    dispatch(increaseQuantity(id));

  };

  // DECREASE QUANTITY

  const decreaseQty = (id) => {

    dispatch(decreaseQuantity(id));

  };

  // CALCULATIONS

  const subtotal = cartItems.reduce(
    (total, item) =>
      total +
      Number(item.price) *
        (item.quantity || 1),
    0
  );

  const discount = subtotal * 0.2;

  const deliveryFee = 15;

  const total =
    subtotal - discount + deliveryFee;

  // CHECKOUT FUNCTION

  const handleCheckout = async () => {

    try {

      await API.post(
        "orders/",
        {
          customer_name: "Thejus",
          total_price: total,
        }
      );

      alert("Order Placed Successfully");

      navigate("/home");

    } catch (error) {

      console.log(error);

      alert("Order Failed");

    }

  };

  return (

    <div className="bg-white min-h-screen px-8 py-8">

      {/* MAIN */}

      <div className="flex flex-col lg:flex-row gap-11 justify-center items-start">

        {/* LEFT SIDE */}

        <div className="w-[780px] rounded-[10px] bg-white">

          {cartItems.map((item, index) => (

            <div
              key={index}
              className="flex items-center justify-between py-5 px-5 mb-8 rounded-[20px] hover:shadow-lg hover:scale-[1.01] transition duration-300 bg-white"
            >

              {/* LEFT PRODUCT */}

              <div className="flex items-center gap-9">

                {/* IMAGE */}

                <div className="w-[90px] h-[90px] bg-[#F5F5F5] rounded-[16px] overflow-hidden flex items-center justify-center hover:bg-gray-200 transition duration-300">

                  <img
                    src={
                      imageMap[
                        item.image?.trim()
                      ] || tshirt
                    }
                    alt={item.title}
                    className="w-[60px] h-[70px] object-contain hover:scale-105 transition duration-300"
                  />

                </div>

                {/* DETAILS */}

                <div>

                  <h2 className="text-[20px] text-black hover:text-gray-600 transition duration-300">
                    {item.title}
                  </h2>

                  <p className="text-gray-500 text-sm mt-1">
                    Size: Large
                  </p>

                  <p className="text-gray-500 text-sm">
                    Color: White
                  </p>

                  <h3 className="font-bold mt-2">
                    ${item.price}
                  </h3>

                </div>

              </div>

              {/* RIGHT ACTIONS */}

              <div className="flex flex-col items-end justify-between h-[90px]">

                {/* DELETE */}

                <button
                  onClick={() =>
                    deleteItem(item.id)
                  }
                  className="text-red-500 text-lg hover:scale-125 transition duration-300"
                >
                  🗑️
                </button>

                {/* QUANTITY */}

                <div className="flex items-center gap-5 px-5 py-3 rounded-full bg-[#F5F5F5]">

                  <button
                    onClick={() =>
                      decreaseQty(item.id)
                    }
                    className="text-lg hover:text-red-500 transition duration-300"
                  >
                    −
                  </button>

                  <span className="font-semibold">
                    {item.quantity || 1}
                  </span>

                  <button
                    onClick={() =>
                      increaseQty(item.id)
                    }
                    className="text-lg hover:text-green-500 transition duration-300"
                  >
                    +
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* RIGHT SIDE */}

        <div className="w-[300px] rounded-[10px] p-6 hover:shadow-lg transition duration-300">

          <h2 className="text-[30px] mb-8 font-bold">
            Order Summary
          </h2>

          {/* SUBTOTAL */}

          <div className="space-y-5">

            <div className="flex justify-between items-center">

              <span className="text-gray-500 text-xl">
                Subtotal
              </span>

              <span className="text-1xl font-bold">
                ${subtotal.toFixed(0)}
              </span>

            </div>

            <div className="flex justify-between items-center">

              <span className="text-gray-500 text-xl">
                Discount (-20%)
              </span>

              <span className="text-1xl font-bold text-red-500">
                -${discount.toFixed(0)}
              </span>

            </div>

            <div className="flex justify-between items-center">

              <span className="text-gray-500 text-xl">
                Delivery Fee
              </span>

              <span className="text-1xl font-bold">
                ${deliveryFee}
              </span>

            </div>

          </div>

          {/* LINE */}

          <div className="border-t border-gray-200 my-7"></div>

          {/* TOTAL */}

          <div className="flex justify-between items-center mb-7">

            <span className="text-[20px] font-bold">
              Total
            </span>

            <span className="text-[25px] font-semibold">
              ${total.toFixed(0)}
            </span>

          </div>

          {/* CHECKOUT */}

          <button
            onClick={handleCheckout}
            className="w-full h-[45px] bg-black text-white rounded-full text-lg font-medium hover:bg-gray-800 hover:scale-105 transition duration-300"
          >

            Go to Checkout →

          </button>

        </div>

      </div>

    </div>

  );
}