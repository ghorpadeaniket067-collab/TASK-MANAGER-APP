import React, {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import "../App.css";

import heroImage
from "../assets/task-manager.png";

const API =
"http://localhost:5000/tasks";

function Landing() {

  const navigate =
  useNavigate();

  const token =
  localStorage.getItem("token");

  const [tasks, setTasks] =
  useState([]);

  /* FETCH TASKS */

  useEffect(() => {

    fetchTasks();

  }, []);

  const fetchTasks =
  async () => {

    try {

      const res =
      await fetch(API);

      const data =
      await res.json();

      setTasks(data);

    } catch (error) {

      console.log(error);

    }

  };

  /* COUNTS */

  const totalTasks =
  tasks.length;

  const pendingTasks =
  tasks.filter(
    (task) => !task.completed
  ).length;

  const completedTasks =
  tasks.filter(
    (task) => task.completed
  ).length;

  /* GET STARTED */

  const handleGetStarted =
  () => {

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

      {/* Hero */}
      <div className="home">

        {/* Left */}
        <div className="home-left">

          <h1>
            Manage Your Tasks
            <br />
            Like a Pro
          </h1>

          <p>
            Organize your work,
            track progress and
            boost productivity.
          </p>

          <div className="buttons">

            <button
              onClick={
                handleGetStarted
              }
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

        {/* Total */}
        <div className="dash-card">

          <h3>
            {totalTasks}
          </h3>

          <p>Total Tasks</p>

        </div>

        {/* Pending */}
        <div className="dash-card">

          <h3>
            {pendingTasks}
          </h3>

          <p>Pending Tasks</p>

        </div>

        {/* Completed */}
        <div className="dash-card">

          <h3>
            {completedTasks}
          </h3>

          <p>Completed Tasks</p>

        </div>

      </div>

    </div>

  );
}

export default Landing;