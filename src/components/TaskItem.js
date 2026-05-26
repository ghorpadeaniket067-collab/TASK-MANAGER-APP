import React, { useState } from "react";

function TaskItem({
  task,
  toggleTask,
  deleteTask,
  editTask,
}) {

  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const taskId = task._id;

  return (
    <li className="task-card">

      <div className="task-left">

        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(taskId)}
        />

        {editing ? (
          <div className="edit-section">

            <input
              value={newTitle}
              onChange={(e) =>
                setNewTitle(e.target.value)
              }
            />

            <button
              className="save-btn"
              onClick={() => {
                editTask(taskId, newTitle);
                setEditing(false);
              }}
            >
              Save
            </button>

          </div>
        ) : (
          <div>

            <h3
              className={
                task.completed
                  ? "completed"
                  : ""
              }
            >
              {task.title}
            </h3>

            <span
              className={
                task.completed
                  ? "status completed-status"
                  : "status pending-status"
              }
            >
              {task.completed
                ? "Completed"
                : "Pending"}
            </span>

          </div>
        )}

      </div>

      {!editing && (
        <div className="task-actions">

          <button
            className="edit-btn"
            onClick={() => setEditing(true)}
          >
            ✏️
          </button>

          <button
            className="delete-btn"
            onClick={() => deleteTask(taskId)}
          >
            ❌
          </button>

        </div>
      )}

    </li>
  );
}

export default TaskItem;