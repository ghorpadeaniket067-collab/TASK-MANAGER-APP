// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../App.css";

// function Login() {

//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] =
//     useState("");

//   const login = async () => {

//     if (!email || !password) {

//       alert("Please fill all fields");

//       return;
//     }

//     try {

//       const res = await fetch(
//         "http://localhost:5000/auth/login",
//         {

//           method: "POST",

//           headers: {
//             "Content-Type":
//             "application/json",
//           },

//           body: JSON.stringify({
//             email,
//             password,
//           }),

//         }
//       );

//       const data = await res.json();

//       if (data.token) {

//         localStorage.setItem(
//           "token",
//           data.token
//         );

//         navigate("/landing");

//       } else {

//         alert(
//           data.error ||
//           "Login failed"
//         );

//       }

//     } catch (err) {

//       alert("Server error");

//     }

//   };

//   return (

//     <div className="auth-page">

//       <div className="auth-card">

//         <h1>Welcome Back 👋</h1>

//         <p>
//           Login to continue your
//           task management journey
//         </p>

//         <input
//           type="email"
//           placeholder="Enter Email"
//           onChange={(e) =>
//             setEmail(e.target.value)
//           }
//         />

//         <input
//           type="password"
//           placeholder="Enter Password"
//           onChange={(e) =>
//             setPassword(e.target.value)
//           }
//         />

//         <button onClick={login}>
//           Login
//         </button>

//         <p className="auth-link">

//           Don't have an account?

//           <span
//             onClick={() =>
//               navigate("/register")
//             }
//           >
//             Register
//           </span>

//         </p>

//       </div>

//     </div>

//   );
// }

// export default Login;





import { useState }
from "react";

import {
  useNavigate,
} from "react-router-dom";

import "../App.css";

function Login() {

  const navigate =
  useNavigate();

  const [email, setEmail] =
  useState("");

  const [password,
  setPassword] =
  useState("");

  const login = async () => {

    if (!email || !password) {

      alert(
        "Please fill all fields"
      );

      return;
    }

    try {

      const res =
      await fetch(
        "https://task-manager-app-2-2rfd.onrender.com/auth/login",
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

      const data =
      await res.json();

      if (data.token) {

        localStorage.setItem(
          "token",
          data.token
        );

        navigate("/landing");

      } else {

        alert(
          data.error ||
          "Login failed"
        );

      }

    } catch (err) {

      alert("Server error");

    }

  };

  return (

    <div className="auth-page">

      <div className="auth-card">

        <h1>
          Welcome Back 👋
        </h1>

        <p>
          Login to continue
        </p>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />

        <button onClick={login}>
          Login
        </button>

        <p className="auth-link">

          Don't have account?

          <span
            onClick={() =>
              navigate("/register")
            }
          >
            Register
          </span>

        </p>

      </div>

    </div>

  );
}

export default Login;