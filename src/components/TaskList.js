import React from "react";
import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  toggleTask,
  deleteTask,
  editTask,
}) {

  return (
    <div className="task-list">

      {tasks.length === 0 ? (

        <p className="empty">
          No Tasks Found
        </p>

      ) : (

        tasks.map((task) => (

          <TaskItem
            key={task._id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            editTask={editTask}
          />

        ))

      )}

    </div>
  );
}

export default TaskList;