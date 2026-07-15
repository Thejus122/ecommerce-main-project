import { useNavigate } from "react-router-dom";
import heroImage from "../assets/image.png";

export default function Home() {

  const navigate = useNavigate();

  return (
    <section
      style={{
        width: "100%",
        minHeight: "850px",
        background: "#F2F0F1",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        padding: "20px 80px 0px 80px",
        overflow: "hidden",
      }}
    >
      {/* LEFT SIDE */}
      <div
        style={{
          width: "50%",
          paddingTop: "80px",
        }}
      >
        <h1
          style={{
            fontSize: "72px",
            lineHeight: "78px",
            fontWeight: "900",
            color: "black",
          }}
        >
          FIND CLOTHES
          <br />
          THAT MATCHES
          <br />
          YOUR STYLE
        </h1>

        <p
          style={{
            marginTop: "24px",
            fontSize: "16px",
            lineHeight: "30px",
            color: "#6B7280",
            width: "85%",
          }}
        >
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>

        {/* BUTTON */}
        <button
          style={{
            marginTop: "32px",
            width: "220px",
            height: "56px",
            border: "none",
            borderRadius: "999px",
            background: "black",
            color: "white",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onClick={() => navigate("/product/1")}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#333";
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow =
              "0px 10px 20px rgba(0,0,0,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "black";
            e.currentTarget.style.transform = "translateY(0px)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Shop Now
        </button>

        {/* STATS */}
        <div
          style={{
            display: "flex",
            gap: "60px",
            marginTop: "70px",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "40px",
                fontWeight: "700",
                color: "black",
              }}
            >
              200+
            </h2>

            <span
              style={{
                color: "#6B7280",
                fontSize: "15px",
              }}
            >
              International Brands
            </span>
          </div>

          <div>
            <h2
              style={{
                fontSize: "40px",
                fontWeight: "700",
                color: "black",
              }}
            >
              2,000+
            </h2>

            <span
              style={{
                color: "#6B7280",
                fontSize: "15px",
              }}
            >
              High-Quality Products
            </span>
          </div>

          <div>
            <h2
              style={{
                fontSize: "40px",
                fontWeight: "700",
                color: "black",
              }}
            >
              30,000+
            </h2>

            <span
              style={{
                color: "#6B7280",
                fontSize: "15px",
              }}
            >
              Happy Customers
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div
        style={{
          width: "50%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          marginTop: "-40px",
        }}
      >
        <img
          src={heroImage}
          alt="Hero"
          style={{
            width: "100%",
            maxWidth: "720px",
            height: "780px",
            objectFit: "contain",
            transition: "0.4s",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.03)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        />
      </div>
    </section>
  );
}