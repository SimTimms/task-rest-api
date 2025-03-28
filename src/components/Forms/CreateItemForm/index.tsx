import { useState } from "react";
import { string } from "yup";

let taskValidationSchema = string()
  .matches(/^[a-z]+$/, "Only alphabetic characters allowed")
  .required();

const CreateItemForm: React.FC = () => {
  const [task, setTask] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await taskValidationSchema.validate(task);
      setTask("");
      setErrorMessage("");
    } catch (error) {
      console.error("Validation error:", error);
      setErrorMessage("Task is required");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Task:</label>
      <input
        id="task"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter your task"
      />
      <button type="submit" disabled={task.trim() === ""}>
        Submit
      </button>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
};

export default CreateItemForm;
