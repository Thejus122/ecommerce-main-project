import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // HANDLE INPUT

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // HANDLE LOGIN

  const handleLogin = (e) => {

    e.preventDefault();

    // FAKE LOGIN
    localStorage.setItem(
      "token",
      "loggedin"
    );

    alert("Login Successful");

    navigate("/home");

  };

  return (

    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#F5F5F5",
      }}
    >

      <form
        onSubmit={handleLogin}
        style={{
          width: "400px",
          background: "white",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
        }}
      >

        {/* TITLE */}

        <h1
          style={{
            fontSize: "36px",
            fontWeight: "900",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          Login
        </h1>

        {/* USERNAME */}

        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          style={{
            width: "100%",
            height: "50px",
            marginBottom: "20px",
            padding: "0 15px",
            borderRadius: "10px",
            border: "1px solid #D1D5DB",
            outline: "none",
          }}
        />

        {/* PASSWORD */}

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          style={{
            width: "100%",
            height: "50px",
            marginBottom: "20px",
            padding: "0 15px",
            borderRadius: "10px",
            border: "1px solid #D1D5DB",
            outline: "none",
          }}
        />

        {/* BUTTON */}

        <button
          type="submit"
          style={{
            width: "100%",
            height: "50px",
            border: "none",
            borderRadius: "999px",
            background: "black",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Login
        </button>

      </form>

    </div>

  );
}