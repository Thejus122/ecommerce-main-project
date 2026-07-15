export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        background: "#F2F0F1",
        padding: "40px 80px 30px",
        marginTop: "20px",
      }}
    >
      {/* TOP */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "50px",
        }}
      >
        {/* LEFT */}
        <div style={{ maxWidth: "260px" }}>
          <h1
            style={{
              fontSize: "38px",
              fontWeight: "900",
              marginBottom: "18px",
            }}
          >
            SHOP.CO
          </h1>

          <p
            style={{
              color: "#6B7280",
              fontSize: "14px",
              lineHeight: "26px",
            }}
          >
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
        </div>

        {/* LINKS */}
        {[
          {
            title: "COMPANY",
            links: ["About", "Features", "Works", "Career"],
          },
          {
            title: "HELP",
            links: [
              "Customer Support",
              "Delivery Details",
              "Terms & Conditions",
              "Privacy Policy",
            ],
          },
          {
            title: "FAQ",
            links: [
              "Account",
              "Manage Deliveries",
              "Orders",
              "Payments",
            ],
          },
          {
            title: "RESOURCES",
            links: [
              "Free eBooks",
              "Development Tutorial",
              "How to - Blog",
              "Youtube Playlist",
            ],
          },
        ].map((section, index) => (
          <div key={index}>
            <h3
              style={{
                fontSize: "14px",
                letterSpacing: "2px",
                marginBottom: "22px",
              }}
            >
              {section.title}
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {section.links.map((link, i) => (
                <span
                  key={i}
                  style={{
                    color: "#6B7280",
                    fontSize: "15px",
                    cursor: "pointer",
                    transition: "0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "black";
                    e.currentTarget.style.transform = "translateX(5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#6B7280";
                    e.currentTarget.style.transform = "translateX(0px)";
                  }}
                >
                  {link}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* LINE */}
      <div
        style={{
          width: "100%",
          height: "1px",
          background: "#D1D5DB",
          margin: "40px 0 20px",
        }}
      />

      {/* BOTTOM */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <p
          style={{
            color: "#6B7280",
            fontSize: "14px",
          }}
        >
          Shop.co © 2000-2023, All Rights Reserved
        </p>

        {/* PAYMENT */}
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          {["VISA", "MC", "PayPal", "Apple", "GPay"].map((card, index) => (
            <div
              key={index}
              style={{
                background: "white",
                border: "1px solid #E5E7EB",
                borderRadius: "8px",
                padding: "8px 12px",
                fontSize: "12px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.08)";
                e.currentTarget.style.background = "black";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.background = "white";
                e.currentTarget.style.color = "black";
              }}
            >
              {card}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}