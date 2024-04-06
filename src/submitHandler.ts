// submitHandler.ts

interface SubmitHandlerArgs {
  basicTitle: string;
  persona: string;
  tasks: string[];
  setResponse: (response: string) => void;
  setBasicTitle: (title: string) => void;
  setPersona: (persona: string) => void;
  setTasks: (tasks: string[]) => void;
  setTaskInput: (input: string) => void;
}

export const handleSubmit = async ({
  basicTitle,
  persona,
  tasks,
  setResponse,
  setBasicTitle,
  setPersona,
  setTasks,
  setTaskInput,
}: SubmitHandlerArgs) => {
  const requestData = { basicTitle, persona, tasks };

  try {
    const response = await fetch(
      "http://localhost:5012/api/UserStories/GenerateUserStory",
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
