import runGame from '../index.js';

// Сгенерировать случайное число от 0 до 100
const generateRandNumber = () => Math.round(Math.random() * 100);

// Сконструировать вопрос
const getQuestion = () => `${generateRandNumber()} ${generateRandNumber()}`;

// Получить верный ответ
const getCorrectAnswer = (question) => {
  const [firstNumber, secondNumber] = question.split(' ');
  let correctAnswer = 1;
  for (let i = 2; i <= Math.min(firstNumber, secondNumber); i += 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      correctAnswer = i;
    }
  }
  return correctAnswer;
};

// Запустить игру
const runBrainGcd = () => {
  const rulesGame = 'Find the greatest common divisor of given numbers.';
  runGame(rulesGame, getQuestion, getCorrectAnswer);
};

export default runBrainGcd;
