// import React, {
//   useEffect,
//   useState,
// } from "react";

// import { useNavigate }
// from "react-router-dom";

// import TaskList
// from "../components/TaskList";

// import Filter
// from "../components/Filter";

// import "../App.css";

// const API =
// "http://localhost:5000/tasks";

// function Home() {

//   const navigate = useNavigate();

//   const [tasks, setTasks] =
//   useState([]);

//   const [title, setTitle] =
//   useState("");

//   const [filter, setFilter] =
//   useState("all");

//   /* CHECK LOGIN */
  
//   useEffect(() => {

//     const token =
//     localStorage.getItem("token");

//     if (!token) {

//       navigate("/login");

//     } else {

//       fetchTasks();

//     }

//   }, [navigate]);

//   /* FETCH TASKS */

//   const fetchTasks = async () => {

//     try {

//       const res =
//       await fetch(API);

//       const data =
//       await res.json();

//       setTasks(data);

//     } catch (error) {

//       console.log(error);

//     }

//   };

//   /* ADD TASK */

//   const addTask = async () => {

//     if (!title.trim()) return;

//     try {

//       await fetch(API, {

//         method: "POST",

//         headers: {
//           "Content-Type":
//           "application/json",
//         },

//         body: JSON.stringify({
//           title,
//         }),

//       });

//       setTitle("");

//       fetchTasks();

//     } catch (error) {

//       console.log(error);

//     }

//   };

//   /* TOGGLE TASK */

//   const toggleTask =
//   async (id) => {

//     try {

//       await fetch(
//         `${API}/${id}`,
//         {
//           method: "PATCH",
//         }
//       );

//       fetchTasks();

//     } catch (error) {

//       console.log(error);

//     }

//   };

//   /* DELETE TASK */

//   const deleteTask =
//   async (id) => {

//     try {

//       await fetch(
//         `${API}/${id}`,
//         {
//           method: "DELETE",
//         }
//       );

//       fetchTasks();

//     } catch (error) {

//       console.log(error);

//     }

//   };

//   /* EDIT TASK */

//   const editTask =
//   async (id, newTitle) => {

//     try {

//       await fetch(
//         `${API}/${id}`,
//         {

//           method: "PUT",

//           headers: {
//             "Content-Type":
//             "application/json",
//           },

//           body: JSON.stringify({
//             title: newTitle,
//           }),

//         }
//       );

//       fetchTasks();

//     } catch (error) {

//       console.log(error);

//     }

//   };

//   /* LOGOUT */

//   const logout = () => {

//     localStorage.removeItem(
//       "token"
//     );

//     navigate("/landing");

//   };

//   /* FILTER TASKS */

//   const filteredTasks =
//   tasks.filter((task) => {

//     if (
//       filter === "completed"
//     ) {

//       return task.completed;

//     }

//     if (
//       filter === "incomplete"
//     ) {

//       return !task.completed;

//     }

//     return true;

//   });

//   /* COUNTS */

//   const totalTasks =
//   tasks.length;

//   const pendingTasks =
//   tasks.filter(
//     (task) => !task.completed
//   ).length;

//   const completedTasks =
//   tasks.filter(
//     (task) => task.completed
//   ).length;

//   return (

//     <div className="dashboard-container">

//       {/* Header */}
//       <div className="dashboard-header">

//         <div>

//           <h1>
//             🚀 Task Dashboard
//           </h1>

//           <p>
//             Manage your daily
//             tasks easily
//           </p>

//         </div>

//         <button
//           className="logout-btn"
//           onClick={logout}
//         >
//           Logout
//         </button>

//       </div>

//       {/* Stats Cards */}
//       <div className="stats-section">

//         {/* Total Tasks */}
//         <div className="stats-card">

//           <h2>{totalTasks}</h2>

//           <p>Total Tasks</p>

//         </div>

//         {/* Pending Tasks */}
//         <div className="stats-card">

//           <h2>{pendingTasks}</h2>

//           <p>Pending Tasks</p>

//         </div>

//         {/* Completed Tasks */}
//         <div className="stats-card">

//           <h2>{completedTasks}</h2>

//           <p>Completed Tasks</p>

//         </div>

//       </div>

//       {/* Add Task */}
//       <div className="add-task">

//         <input
//           value={title}
//           onChange={(e) =>
//             setTitle(e.target.value)
//           }
//           placeholder="Enter new task..."
//         />

//         <button onClick={addTask}>
//           Add Task
//         </button>

//       </div>

//       {/* Filter */}
//       <Filter
//         setFilter={setFilter}
//       />

//       {/* Task List */}
//       <TaskList
//         tasks={filteredTasks}
//         toggleTask={toggleTask}
//         deleteTask={deleteTask}
//         editTask={editTask}
//       />

//     </div>

//   );
// }

// export default Home;










import React, {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import TaskList
from "../components/TaskList";

import Filter
from "../components/Filter";

import "../App.css";

const API =
"https://task-manager-app-2-2rfd.onrender.com/tasks";

function Home() {

  const navigate =
  useNavigate();

  const [tasks, setTasks] =
  useState([]);

  const [title, setTitle] =
  useState("");

  const [filter, setFilter] =
  useState("all");

  useEffect(() => {

    const token =
    localStorage.getItem("token");

    if (!token) {

      navigate("/login");

    } else {

      fetchTasks();

    }

  }, [navigate]);

  /* Fetch Tasks */
  const fetchTasks = async () => {

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

  /* Add Task */
  const addTask = async () => {

    if (!title.trim()) return;

    try {

      await fetch(API, {

        method: "POST",

        headers: {
          "Content-Type":
          "application/json",
        },

        body: JSON.stringify({
          title,
        }),

      });

      setTitle("");

      fetchTasks();

    } catch (error) {

      console.log(error);

    }

  };

  /* Toggle */
  const toggleTask =
  async (id) => {

    await fetch(
      `${API}/${id}`,
      {
        method: "PATCH",
      }
    );

    fetchTasks();

  };

  /* Delete */
  const deleteTask =
  async (id) => {

    await fetch(
      `${API}/${id}`,
      {
        method: "DELETE",
      }
    );

    fetchTasks();

  };

  /* Edit */
  const editTask =
  async (id, newTitle) => {

    await fetch(
      `${API}/${id}`,
      {

        method: "PUT",

        headers: {
          "Content-Type":
          "application/json",
        },

        body: JSON.stringify({
          title: newTitle,
        }),

      }
    );

    fetchTasks();

  };

  /* Logout */
  const logout = () => {

    localStorage.removeItem(
      "token"
    );

    navigate("/landing");

  };

  /* Filter */
  const filteredTasks =
  tasks.filter((task) => {

    if (
      filter === "completed"
    ) {

      return task.completed;

    }

    if (
      filter === "incomplete"
    ) {

      return !task.completed;

    }

    return true;

  });

  /* Counts */
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

  return (

    <div className="dashboard-container">

      {/* Header */}
      <div className="dashboard-header">

        <div>

          <h1>
            🚀 Task Dashboard
          </h1>

          <p>
            Manage your daily
            tasks easily
          </p>

        </div>

        <button
          className="logout-btn"
          onClick={logout}
        >
          Logout
        </button>

      </div>

      {/* Stats */}
      <div className="stats-section">

        <div className="stats-card">

          <h2>{totalTasks}</h2>

          <p>Total Tasks</p>

        </div>

        <div className="stats-card">

          <h2>{pendingTasks}</h2>

          <p>Pending Tasks</p>

        </div>

        <div className="stats-card">

          <h2>{completedTasks}</h2>

          <p>Completed Tasks</p>

        </div>

      </div>

      {/* Add Task */}
      <div className="add-task">

        <input
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          placeholder="Enter new task..."
        />

        <button onClick={addTask}>
          Add Task
        </button>

      </div>

      {/* Filter */}
      <Filter
        setFilter={setFilter}
      />

      {/* Task List */}
      <TaskList
        tasks={filteredTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        editTask={editTask}
      />

    </div>

  );
}

export default Home;