const countriesDataQuiz = [
  {
    question: "Which one of these cities is the capital of Australia?",
    answers: ["Canberra", "Sydney", "Oslo", "Ottawa"],
    correct: "Canberra",
    questionId: "001"
  },
  {
    question: "Which one of these cities is the oldest city in the Netherlands?",
    answers: ["Rotterdam", "Nijmegen", "Amsterdam", "Groningen"],
    correct: "Nijmegen",
    questionId: "002"
  },
  {
    question: "Which one of these countries is not from Africa?",
    answers: ["Sudan", "Tunisia", "Egypt", "Yemen"],
    correct: "Yemen",
    questionId: "003"
  },
  {
    question: "Which one of these cities is the capital of South Korea?",
    answers: ["Beijing", "Osaka", "Seoul", "Shanghai"],
    correct: "Seoul",
    questionId: "004"
  },
  {
    question: "Which one of these cities is the largest city in the world?",
    answers: ["Tokyo", "Mexican City", "Beijing", "New York"],
    correct: "Tokyo",
    questionId: "005"
  },
  {
    question: "Which one of these countries is not from South America?",
    answers: ["Colombia", "Panama", "Suriname", "Guyana"],
    correct: "Panama",
    questionId: "006"
  }
];

export default (n = 3) => 
  Promise.resolve(countriesDataQuiz.sort(() => 0.5 - Math.random()).slice(0, n));