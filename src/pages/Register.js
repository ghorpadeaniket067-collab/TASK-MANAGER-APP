import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Register() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const register = async () => {

    if (!email || !password) {

      alert("Please fill all fields");

      return;
    }

    try {

      const res = await fetch(
        "http://localhost:5000/auth/register",
        {

          method: "POST",

          headers: {
            "Content-Type":
            "application/json",
          },

          body: JSON.stringify({
            email,
            password,
          }),

        }
      );

      const data = await res.json();

      alert(
        data.message ||
        "Registered Successfully"
      );

      navigate("/login");

    } catch (err) {

      alert("Server error");

    }

  };

  return (

    <div className="auth-page">

      <div className="auth-card">

        <h1>Create Account 🚀</h1>

        <p>
          Register and start managing
          your tasks smartly
        </p>

        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button onClick={register}>
          Register
        </button>

        <p className="auth-link">

          Already have account?

          <span
            onClick={() =>
              navigate("/login")
            }
          >
            Login
          </span>

        </p>

      </div>

    </div>

  );
}

export default Register;