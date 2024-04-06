import { useState } from "react";
import "./App.css";

function App() {
  const defaultTasks = [
    "Ler arquivo de dívidas enviados aos domingos via SFTP",
    "Processar arquivo para extrair dividas",
    "Processar arquivo para extrair informações do consumidor referente a blocklist",
  ];

  const [basicTitle, setBasicTitle] = useState("Carga de dívidas");
  const [persona, setPersona] = useState("Desenvolvedor de Software");
  const [tasks, setTasks] = useState<string[]>(defaultTasks);
  const [taskInput, setTaskInput] = useState("");
  const [response, setResponse] = useState("");

  const personas = [
    "Usuário Final",
    "Administrador do Sistema",
    "Desenvolvedor de Software",
    "Gestor de TI",
    "Analista de Negócios",
  ];

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
    setBasicTitle("Carga de dívidas");
    setPersona("Desenvolvedor de Software");
    setTasks(defaultTasks);
    setTaskInput("");
    setResponse("");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(response);
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
          <option key={index} value={p}>{p}</option>
        ))}
      </select>

      <div>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="New Task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>

      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleClear} className="clear-button">
        Clear
      </button>
      <div>
        <textarea value={response} readOnly className="response-box" />
        <button onClick={copyToClipboard}>Copy</button>
      </div>
    </div>
  );
}

export default App;
