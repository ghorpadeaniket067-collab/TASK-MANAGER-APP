import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import heroImage from "../assets/task-manager.png";

function Landing() {

  const navigate = useNavigate();

  const token =
    localStorage.getItem("token");

  /* GET STARTED */

  const handleGetStarted = () => {

    if (token) {

      navigate("/home");

    } else {

      alert(
        "Please Login First"
      );

      navigate("/login");

    }

  };

  return (

    <div className="landing-container">

      {/* Navbar */}
      <nav className="navbar">

        <h2>TaskManager</h2>

        <div className="nav-links">

          <button
            onClick={() =>
              navigate("/login")
            }
          >
            Login
          </button>

          <button
            className="register-btn"
            onClick={() =>
              navigate("/register")
            }
          >
            Register
          </button>

        </div>

      </nav>

      {/* Hero Section */}
      <div className="home">

        {/* Left */}
        <div className="home-left">

          <h1>
            Manage Your Tasks <br />
            Like a Pro
          </h1>

          <p>
            Organize your work,
            track progress and
            boost productivity.
          </p>

          <div className="buttons">

            <button
              onClick={handleGetStarted}
            >
              Get Started
            </button>

          </div>

        </div>

        {/* Right */}
        <div className="home-right">

          <img
            src={heroImage}
            alt="Task Manager"
            className="hero-image"
          />

        </div>

      </div>

      {/* Stats Cards */}
      <div className="dashboard">

        <div className="dash-card">

          <h3>120+</h3>

          <p>Total Tasks</p>

        </div>

        <div className="dash-card">

          <h3>45+</h3>

          <p>Pending Tasks</p>

        </div>

        <div className="dash-card">

          <h3>75+</h3>

          <p>Completed Tasks</p>

        </div>

      </div>

    </div>

  );
}

export default Landing;