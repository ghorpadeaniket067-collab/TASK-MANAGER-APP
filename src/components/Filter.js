import React from "react";

function Filter({ setFilter }) {
  return (
    <div className="filter-buttons">

      <button onClick={() => setFilter("all")}>
        All Tasks
      </button>

      <button onClick={() => setFilter("completed")}>
        Completed
      </button>

      <button onClick={() => setFilter("incomplete")}>
        Pending
      </button>

    </div>
  );
}

export default Filter;