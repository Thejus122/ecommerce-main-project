export default function BrandBanner() {
  return (
    <div
      style={{
        width: "100%",
        height: "90px",
        background: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginTop: "-120px",
        position: "relative",
        zIndex: "10",
      }}
    >

      <h2
        style={{
          color: "white",
          fontSize: "28px",
          fontWeight: "500",
          cursor: "pointer",
          transition: "0.3s",
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "scale(1.1)";
          e.target.style.color = "#d1d5db";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "scale(1)";
          e.target.style.color = "white";
        }}
      >
        VERSACE
      </h2>

      <h2
        style={{
          color: "white",
          fontSize: "28px",
          fontWeight: "500",
          cursor: "pointer",
          transition: "0.3s",
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "scale(1.1)";
          e.target.style.color = "#d1d5db";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "scale(1)";
          e.target.style.color = "white";
        }}
      >
        ZARA
      </h2>

      <h2
        style={{
          color: "white",
          fontSize: "28px",
          fontWeight: "500",
          cursor: "pointer",
          transition: "0.3s",
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "scale(1.1)";
          e.target.style.color = "#d1d5db";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "scale(1)";
          e.target.style.color = "white";
        }}
      >
        GUCCI
      </h2>

      <h2
        style={{
          color: "white",
          fontSize: "28px",
          fontWeight: "700",
          cursor: "pointer",
          transition: "0.3s",
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "scale(1.1)";
          e.target.style.color = "#d1d5db";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "scale(1)";
          e.target.style.color = "white";
        }}
      >
        PRADA
      </h2>

      <h2
        style={{
          color: "white",
          fontSize: "28px",
          fontWeight: "500",
          cursor: "pointer",
          transition: "0.3s",
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "scale(1.1)";
          e.target.style.color = "#d1d5db";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "scale(1)";
          e.target.style.color = "white";
        }}
      >
        Calvin Klein
      </h2>

    </div>
  );
}