// TaskForm.tsx
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
    <div className="field has-addons"> {/* Applying Bulma class for form styling */}
      <div className="control">
        <input
          className="input"
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="New Task"
        />
      </div>
      <div className="control">
        <button className="button is-primary" onClick={handleAddTask}> {/* Applying Bulma class for button styling */}
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TaskForm;

