import React, { useState } from "react";
import eximiaLogo from "./assets/eximia_logo_01.jpg";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { handleSubmit } from "./submitHandler";
import ResponseBox from "./ResponseBox";
import MarkdownRenderWithCopy from "./MarkdownRenderWithCopy";

interface MainContentProps {
  // Define the props for your component here
}

const MainContent: React.FC<MainContentProps> = (props) => {
  const [basicTitle, setBasicTitle] = useState("");
  const [persona, setPersona] = useState("Desenvolvedor de Software");
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskInput, setTaskInput] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

  const onSubmit = async () => {
    setIsLoading(true);
    await handleSubmit({
      basicTitle,
      persona,
      tasks,
      setResponse,
      setBasicTitle,
      setPersona,
      setTasks,
      setTaskInput,
    });
    setIsLoading(false);
  };

  return (
    <div className="container has-text-centered">
      <div className="columns is-centered">
        <div className="column is-half">
          <div className="box">
            <div className="has-text-centered">
              <figure className="image is-128x128">
                <img className="is-rounded" alt="Eximia Logo" src={eximiaLogo} />
              </figure>
            </div>
            
            <h1 className="title is-3">Eximia Story Builder</h1>
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  type="text"
                  value={basicTitle}
                  onChange={(e) => setBasicTitle(e.target.value)}
                  placeholder="Basic Title"
                />
              </div>
            </div>
            <div className="field">
              <p className="control">
                <span className="select">
                  <select
                    value={persona}
                    onChange={(e) => setPersona(e.target.value)}
                  >
                    {personas.map((p, index) => (
                      <option key={index} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </span>
              </p>
            </div>
            <TaskForm
              taskInput={taskInput}
              setTaskInput={setTaskInput}
              handleAddTask={handleAddTask}
            />
            <TaskList tasks={tasks} />
            <div className="buttons">
              <button
                className={`button is-primary ${isLoading ? "is-loading" : ""}`}
                onClick={onSubmit}
                disabled={isLoading}
              >
                Submit
              </button>

              <button
                className="button is-link"
                onClick={handleClear}
                disabled={isLoading}
              >
                Clear
              </button>

              <button
                className="button is-warning"
                onClick={handleInsertExample}
                disabled={isLoading}
              >
                Insert Example
              </button>
            </div>
            <MarkdownRenderWithCopy markdownText={response} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
