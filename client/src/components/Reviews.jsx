export default function Reviews() {

  const reviews = [
    {
      name: "Samantha D.",
      text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable.",
      date: "Posted on August 14, 2023",
    },

    {
      name: "Alex M.",
      text: "The t-shirt exceeded my expectations. The colors are vibrant and the fit is perfect.",
      date: "Posted on August 15, 2023",
    },

    {
      name: "Ethan R.",
      text: "This t-shirt is a must-have for anyone who appreciates good design.",
      date: "Posted on August 16, 2023",
    },

    {
      name: "Olivia P.",
      text: "As a UI/UX enthusiast, I value simplicity and functionality. This shirt feels great.",
      date: "Posted on August 17, 2023",
    },

    {
      name: "Liam K.",
      text: "The fabric is soft and stylish. I like wearing a piece of art.",
      date: "Posted on August 18, 2023",
    },

    {
      name: "Ava H.",
      text: "Thoughtful layout and comfortable material. Perfect everyday shirt.",
      date: "Posted on August 19, 2023",
    },
  ];

  return (
    <section
      style={{
        width: "100%",
        marginTop: "30px",
      }}
    >

      {/* TOP NAV */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "120px",
          borderBottom: "1px solid #18191b",
          paddingBottom: "12px",
          marginBottom: "20px",
        }}
      >

        <p
          style={{
            color: "#676a71",
            fontSize: "13px",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseEnter={(e) => {
            e.target.style.color = "black";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "#9CA3AF";
          }}
        >
          Product Details
        </p>

        <p
          style={{
            color: "black",
            fontSize: "13px",
            fontWeight: "600",
            borderBottom: "2px solid black",
            paddingBottom: "12px",
            marginBottom: "-13px",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseEnter={(e) => {
            e.target.style.opacity = "0.7";
          }}
          onMouseLeave={(e) => {
            e.target.style.opacity = "1";
          }}
        >
          Rating & Reviews
        </p>

      </div>

      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "18px",
        }}
      >

        <h2
          style={{
            fontSize: "18px",
            fontWeight: "700",
          }}
        >
          All Reviews
          <span
            style={{
              color: "#9CA3AF",
              fontSize: "12px",
              marginLeft: "4px",
            }}
          >
            (451)
          </span>
        </h2>

        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >

          {/* LATEST */}
          <button
            style={{
              border: "none",
              background: "#F3F4F6",
              borderRadius: "999px",
              padding: "8px 16px",
              fontSize: "11px",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "black";
              e.target.style.color = "white";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "#F3F4F6";
              e.target.style.color = "black";
              e.target.style.transform = "translateY(0px)";
            }}
          >
            Latest ▼
          </button>

          {/* WRITE REVIEW */}
          <button
            style={{
              background: "black",
              color: "white",
              border: "none",
              borderRadius: "999px",
              padding: "9px 18px",
              fontSize: "11px",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#333";
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "black";
              e.target.style.transform = "scale(1)";
            }}
          >
            Write a Review
          </button>

        </div>

      </div>

      {/* REVIEW GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "14px",
        }}
      >

        {reviews.map((review, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #E5E7EB",
              borderRadius: "16px",
              padding: "10px",
              background: "white",
              transition: "0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow =
                "0px 10px 25px rgba(0,0,0,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >

            {/* STARS */}
            <div
              style={{
                color: "#FBBF24",
                fontSize: "15px",
                marginBottom: "10px",
              }}
            >
              ★★★★★
            </div>

            {/* NAME */}
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "700",
                marginBottom: "10px",
              }}
            >
              {review.name} ✅
            </h3>

            {/* TEXT */}
            <p
              style={{
                color: "#6B7280",
                fontSize: "13px",
                lineHeight: "24px",
                marginBottom: "16px",
              }}
            >
              "{review.text}"
            </p>

            {/* DATE */}
            <p
              style={{
                color: "#9CA3AF",
                fontSize: "12px",
              }}
            >
              {review.date}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}