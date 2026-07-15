import shirt2 from "../assets/shirt2.png";
import orange from "../assets/shirt.png";
import shorts from "../assets/shorts.png";
import jeans from "../assets/jeans.png";

export default function TopSelling() {
  const products = [
    {
      id: 1,
      title: "plane Shirt",
      price: "$212",
      image: shirt2,
    },

    {
      id: 2,
      title: "shirt",
      price: "$145",
      image: orange,
    },

    {
      id: 3,
      title: "Loose Fit Shorts",
      price: "$80",
      image: shorts,
    },

    {
      id: 4,
      title: "Fade loose-fit Jeans",
      price: "$210",
      image: jeans,
    },
  ];

  return (
    <section
      style={{
        width: "100%",
        padding: "20px 80px 80px 80px",
        background: "white",
      }}
    >
      {/* LINE */}
      <div
        style={{
          width: "100%",
          height: "1px",
          background: "#E5E7EB",
          marginBottom: "30px",
        }}
      />

      {/* TITLE */}
      <h1
        style={{
          textAlign: "center",
          fontSize: "40px",
          fontWeight: "900",
          marginBottom: "30px",
        }}
      >
        TOP SELLING
      </h1>

      {/* PRODUCTS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "30px",
        }}
      >
        {products.map((item) => (
          <div
            key={item.id}
            style={{
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
            }}
          >
            {/* IMAGE BOX */}
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
                src={item.image}
                alt=""
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
                {item.price}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* BUTTON */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <button
          style={{
            width: "200px",
            height: "52px",
            borderRadius: "999px",
            border: "1px solid #D1D5DB",
            background: "white",
            fontSize: "16px",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "black";
            e.target.style.color = "white";
            e.target.style.transform = "translateY(-5px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "white";
            e.target.style.color = "black";
            e.target.style.transform = "translateY(0px)";
          }}
        >
          View All
        </button>
      </div>
    </section>
  );
}