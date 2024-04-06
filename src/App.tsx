// App.tsx
import { useState } from "react";
import "bulma/css/bulma.min.css";
import "./App.css";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import ResponseBox from "./ResponseBox";

function App() {
  const defaultTasks = [
    "Ler arquivo de dívidas enviados aos domingos via SFTP",
    "Processar arquivo para extrair dívidas",
    "Processar arquivo para extrair informações do consumidor referente a blocklist",
  ];

  const [basicTitle, setBasicTitle] = useState("Carga de dívidas");
  const [persona, setPersona] = useState("Desenvolvedor de Software");
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskInput, setTaskInput] = useState("");
  const [response, setResponse] = useState("");

  const personas = [
    "Usuário Final",
    "Administrador do Sistema",
    "Desenvolvedor de Software",
    "Gestor de TI",
    "Analista de Negócios",
  ];

  const exampleTasks = [
    "Ler arquivo de dívidas enviados aos domingos via SFTP",
    "Processar arquivo para extrair dívidas",
    "Processar arquivo para extrair informações do consumidor referente a blocklist",
  ];

  const handleInsertExample = () => {
    setBasicTitle("Carga de dívidas");
    setPersona("Desenvolvedor de Software");
    setTasks(exampleTasks);
  };

  const handleAddTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([...tasks, taskInput]);
      setTaskInput("");
    }
  };

  const handleSubmit = async () => {
    const requestData = {
      basicTitle,
      persona,
      tasks,
    };

    try {
      const response = await fetch(
        "http://localhost:32771/api/UserStories/GenerateUserStory",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "text/plain",
          },
          body: JSON.stringify(requestData),
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const responseData = await response.text();
      setResponse(responseData);

      // Limpar os campos após o envio bem-sucedido
      setBasicTitle("");
      setPersona("Desenvolvedor de Software"); // Reseta para o valor padrão ou outro valor desejado
      setTasks([]);
      setTaskInput("");
    } catch (error) {
      console.error("Failed to fetch: ", error);
      // Handle the error according to your needs
    }
  };

  const handleClear = () => {
    setBasicTitle("");
    setPersona("Desenvolvedor de Software");
    setTasks([]);
    setTaskInput("");
    setResponse("");
  };

  const copyToClipboard = () => {
    const textarea = document.querySelector(
      ".response-box"
    ) as HTMLTextAreaElement;
    textarea.select();
    document.execCommand("copy");
    alert("Copied to clipboard!");
  };

  return (
    <div className="App">
      <input
        type="text"
        value={basicTitle}
        onChange={(e) => setBasicTitle(e.target.value)}
        placeholder="Basic Title"
      />

      <select value={persona} onChange={(e) => setPersona(e.target.value)}>
        {personas.map((p, index) => (
          <option key={index} value={p}>
            {p}
          </option>
        ))}
      </select>

      <TaskForm
        taskInput={taskInput}
        setTaskInput={setTaskInput}
        handleAddTask={handleAddTask}
      />

      <TaskList tasks={tasks} />

      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleClear} className="clear-button">
        Clear
      </button>
      <button onClick={handleInsertExample}>Insert Example</button>
      <ResponseBox response={response} copyToClipboard={copyToClipboard} />
    </div>
  );
}

export default App;
