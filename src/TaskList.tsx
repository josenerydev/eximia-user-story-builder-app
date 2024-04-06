import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";

interface TaskListProps {
  tasks: string[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    // Adiciona 'is-flex' e 'is-flex-direction-column' para fazer a lista se comportar como um contêiner flexível em coluna
    <ul className="menu-label is-flex is-flex-direction-column">
      {tasks.map((task, index) => (
        // Cada item da lista ocupa toda a largura disponível, mas não é necessário esticá-los
        <li key={index} className="is-flex">
          <FontAwesomeIcon icon={faClipboard} /> {task}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
