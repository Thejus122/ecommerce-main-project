// src/pages/Checkout.jsx

import { useSelector, useDispatch }
from "react-redux";

import { useNavigate } from "react-router-dom";

import {
  removeFromCart,
} from "../redux/slices/cartSlice";

export default function Checkout() {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  // CALCULATIONS

  const subtotal = cartItems.reduce(
    (total, item) =>
      total +
      Number(item.price) *
        (item.quantity || 1),
    0
  );

  const deliveryFee = 15;

  const total =
    subtotal + deliveryFee;

  // PLACE ORDER

  const handlePlaceOrder = () => {

    cartItems.forEach((item) => {

      dispatch(removeFromCart(item.id));

    });

    alert(
      "Order Placed Successfully 🎉"
    );

    navigate("/home");

  };

  return (

    <div className="min-h-screen bg-white px-8 py-8">

      {/* TITLE */}

      

      {/* MAIN */}

      <div className="flex flex-col lg:flex-row gap-10 justify-center items-start">

        {/* LEFT SIDE */}

        <div className="w-full lg:w-[650px]  rounded-[10px] p-7">

          {/* SHIPPING */}

          <h2 className="text-[28px] font-bold mb-6">

            Shipping Details

          </h2>

          <div className="flex flex-col gap-5">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full h-[50px] border border-gray-300 rounded-[12px] px-4 outline-none"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full h-[50px] border border-gray-300 rounded-[12px] px-4 outline-none"
            />
            

            <input
              type="text"
              placeholder="Address"
              className="w-full h-[50px] border border-gray-300 rounded-[12px] px-4 outline-none"
            />

            <div className="flex gap-4">

              <input
                type="text"
                placeholder="City"
                className="w-full h-[50px] border border-gray-300 rounded-[12px] px-4 outline-none"
              />

              <input
                type="text"
                placeholder="Pincode"
                className="w-full h-[50px] border border-gray-300 rounded-[12px] px-4 outline-none"
              />

            </div>

          </div>

          {/* PAYMENT */}

          <h2 className="text-[28px] font-bold mt-10 mb-6">

            Payment Method

          </h2>

          <div className="flex flex-col gap-4">

            <label className="flex items-center gap-3 text-[17px]">

              <input
                type="radio"
                name="payment"
                defaultChecked
              />

              Cash On Delivery

            </label>

            <label className="flex items-center gap-3 text-[17px]">

              <input
                type="radio"
                name="payment"
              />

              UPI Payment

            </label>

            <label className="flex items-center gap-3 text-[17px]">

              <input
                type="radio"
                name="payment"
              />

              Credit / Debit Card

            </label>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="w-full lg:w-[350px]  rounded-[10px] p-7">

          <h2 className="text-[30px] font-bold mb-7">

            Order Summary

          </h2>

          {/* PRODUCTS */}

          <div className="flex flex-col gap-5">

            {cartItems.map((item) => (

              <div
                key={item.id}
                className="flex justify-between items-center"
              >

                <div>

                  <h3 className="font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Qty:
                    {" "}
                    {item.quantity}
                  </p>

                </div>

                <h3 className="font-bold">
                  $
                  {item.price *
                    item.quantity}
                </h3>

              </div>

            ))}

          </div>

          {/* LINE */}

          <div className="border-t border-gray-200 my-7"></div>

          {/* TOTALS */}

          <div className="space-y-5">

            <div className="flex justify-between">

              <span className="text-gray-500">
                Subtotal
              </span>

              <span className="font-bold">
                ${subtotal.toFixed(0)}
              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-gray-500">
                Delivery Fee
              </span>

              <span className="font-bold">
                ${deliveryFee}
              </span>

            </div>

            <div className="flex justify-between text-[22px] font-bold">

              <span>Total</span>

              <span>
                ${total.toFixed(0)}
              </span>

            </div>

          </div>

          {/* PLACE ORDER */}

          <button
            onClick={handlePlaceOrder}
            className="w-full h-[50px] bg-black text-white rounded-full mt-8 text-[17px] font-medium hover:bg-gray-800 transition"
          >

            Place Order

          </button>

        </div>

      </div>

    </div>
  );
}