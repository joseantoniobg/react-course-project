import React from "react";
import "./quiz.css";

const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = React.useState({
    ...perguntas[0],
    currentIndex: 0,
  });
  const [score, setScore] = React.useState(0);
  const [answer, setAnswer] = React.useState("");

  const resetQuiz = () => {
    setScore(0);
    setCurrentQuestion({
      ...perguntas[0],
      currentIndex: 0,
    });
  };

  const handleQuestionSubmit = ({ target }) => {
    if (answer === "") {
      alert("Por favor selecione uma alternativa!");
    }

    setScore(score + Number(answer === currentQuestion.resposta));
    setAnswer("");
    if (
      currentQuestion &&
      currentQuestion.currentIndex < perguntas.length - 1
    ) {
      setCurrentQuestion({
        ...perguntas[currentQuestion.currentIndex + 1],
        currentIndex: currentQuestion.currentIndex + 1,
      });
    } else {
      setCurrentQuestion(null);
    }
  };

  return (
    <div className="main-div">
      {currentQuestion ? (
        <>
          <p className="question">{currentQuestion.pergunta}</p>
          {currentQuestion.options.map((opt) => (
            <label className="alternative" key={opt}>
              <input
                type="radio"
                id={opt}
                value={opt}
                checked={opt === answer}
                onChange={(e) => setAnswer(e.target.value)}
              />
              {opt}
            </label>
          ))}
          <button onClick={handleQuestionSubmit}>{"Próxima"}</button>
        </>
      ) : (
        <>
          <p className="score">
            Seu Score: {score} de {perguntas.length}
          </p>
          <button onClick={resetQuiz}>{"<- Voltar"}</button>
        </>
      )}
    </div>
  );
};

export default Quiz;
