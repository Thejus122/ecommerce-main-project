import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  fetchProducts,
} from "../redux/slices/productSlice";

// IMAGES

import tshirt from "../assets/tshirt.png";
import jeans from "../assets/jeans.png";
import shirt2 from "../assets/shirt2.png";
import shirt from "../assets/shirt.png";

import gym1 from "../assets/gym1.png";
import gym2 from "../assets/gym2.png";
import gym3 from "../assets/gym3.png";

import formal1 from "../assets/formal1.png";
import formal2 from "../assets/formal2.png";

// IMAGE MAP

const imageMap = {
  "tshirt.png": tshirt,
  "jeans.png": jeans,
  "shirt2.png": shirt2,
  "shirt.png": shirt,

  "gym1.png": gym1,
  "gym2.png": gym2,
  "gym3.png": gym3,

  "formal1.png": formal1,
  "formal2.png": formal2,
};

export default function Products() {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const {
    products,
    loading,
  } = useSelector(
    (state) => state.products
  );

  // FETCH PRODUCTS

  useEffect(() => {

    dispatch(fetchProducts());

  }, [dispatch]);

  // LOADING

  if (loading) {

    return (

      <h1
        style={{
          textAlign: "center",
          marginTop: "100px",
          fontSize: "40px",
          fontWeight: "700",
        }}
      >
        Loading...
      </h1>

    );

  }

  return (

    <section
      id="new-arrivals"
      style={{
        width: "100%",
        padding: "80px",
        background: "white",
      }}
    >

      {/* TITLE */}

      <h1
        style={{
          textAlign: "center",
          fontSize: "40px",
          fontWeight: "900",
          marginBottom: "50px",
        }}
      >
        NEW ARRIVALS
      </h1>

      {/* NO PRODUCTS */}

      {products.length === 0 && (

        <h2
          style={{
            textAlign: "center",
            fontSize: "24px",
          }}
        >
          No Products Found
        </h2>

      )}

      {/* PRODUCTS */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(4, 1fr)",
          gap: "30px",
        }}
      >

        {products.length > 0 &&
          products
            .slice(0, 4)
            .map((item) => (

              <div
                key={item.id || item._id}
                onClick={() => {

                  console.log(item);

                  navigate(
                    `/product/${item.id}`
                  );

                }}
                style={{
                  cursor: "pointer",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => {

                  e.currentTarget.style.transform =
                    "translateY(-10px)";

                }}
                onMouseLeave={(e) => {

                  e.currentTarget.style.transform =
                    "translateY(0px)";

                }}
              >

                {/* IMAGE */}

                <div
                  style={{
                    background: "#F0F0F0",
                    borderRadius: "20px",
                    height: "300px",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >

                  <img
                    src={
                      imageMap[
                        item.image?.trim()
                      ] || tshirt
                    }
                    alt={item.title}
                    style={{
                      width: "80%",
                      height: "80%",
                      objectFit: "contain",
                    }}
                  />

                </div>

                {/* INFO */}

                <div
                  style={{
                    marginTop: "16px",
                  }}
                >

                  <h2
                    style={{
                      fontSize: "22px",
                      fontWeight: "600",
                    }}
                  >
                    {item.title}
                  </h2>

                  <p
                    style={{
                      color: "#FBBF24",
                      marginTop: "8px",
                    }}
                  >
                    ★★★★★
                  </p>

                  <h3
                    style={{
                      marginTop: "8px",
                      fontSize: "28px",
                      fontWeight: "700",
                    }}
                  >
                    ${item.price}
                  </h3>

                </div>

              </div>

            ))}

      </div>

    </section>
  );
}