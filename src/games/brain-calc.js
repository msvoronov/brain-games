import runGame from '../index.js';

// Сгенерировать случайное число от 0 до 100
const generateRandNumber = () => Math.round(Math.random() * 100);

// Выбрать рандомный оператор
const getRandOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * (operators.length - 1));
  return operators[randomIndex];
};

// Сконструировать вопрос
const getQuestion = () => `${generateRandNumber()} ${getRandOperator()} ${generateRandNumber()}`;

// Получить верный ответ
const getCorrectAnswer = (question) => {
  const [firstNumber, operator, secondNumber] = question.split(' ');
  let correctAnswer;
  if (operator === '+') {
    correctAnswer = Number(firstNumber) + Number(secondNumber);
  }
  if (operator === '-') {
    correctAnswer = Number(firstNumber) - Number(secondNumber);
  }
  if (operator === '*') {
    correctAnswer = Number(firstNumber) * Number(secondNumber);
  }
  return correctAnswer;
};

// Запустить игру
const runBrainCalc = () => {
  const rulesGame = 'What is the result of the expression?';
  runGame(rulesGame, getQuestion, getCorrectAnswer);
};

export default runBrainCalc;
