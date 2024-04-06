// TaskForm.tsx
import React from "react";

interface TaskFormProps {
  taskInput: string;
  setTaskInput: React.Dispatch<React.SetStateAction<string>>;
  handleAddTask: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({
  taskInput,
  setTaskInput,
  handleAddTask,
}) => {
  return (
    <div>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="New Task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskForm;
