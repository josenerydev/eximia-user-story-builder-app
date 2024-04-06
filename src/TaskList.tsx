// TaskList.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";

interface TaskListProps {
  tasks: string[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <ul className="menu-label">
      {tasks.map((task, index) => (
        <li key={index} style={{ marginBottom: "10px" }}>
          <FontAwesomeIcon icon={faClipboard} /> {task}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
