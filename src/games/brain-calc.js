import runGame from '../index.js';

// Сгенерировать случайное число от 0 до 100
const generateRandNumber = () => Math.round(Math.random() * 100);

// Выбрать рандомный оператор
const getRandOperator = () => {
  const operators = ['+', '-', '*'];
  const numberOfOperators = operators.length;
  const randomIndex = Math.floor(Math.random() * numberOfOperators);
  return operators[randomIndex];
};

// Сконструировать вопрос
const getQuestion = () => `${generateRandNumber()} ${getRandOperator()} ${generateRandNumber()}`;

// Получить верный ответ
const getCorrectAnswer = (question) => {
  const [firstNumber, operator, secondNumber] = question.split(' ');
  switch (operator) {
    case '+':
      return Number(firstNumber) + Number(secondNumber);
    case '-':
      return Number(firstNumber) - Number(secondNumber);
    default: // case '*'
      return Number(firstNumber) * Number(secondNumber);
  }
};

// Собираем данные для передачи их в игру
const getQuestionAndAnswer = () => {
  const question = getQuestion();
  const correctAnswer = getCorrectAnswer(question);
  return [question, correctAnswer];
};

// Запустить игру
const runBrainCalc = () => {
  const rulesGame = 'What is the result of the expression?';
  runGame(rulesGame, getQuestionAndAnswer);
};

export default runBrainCalc;
