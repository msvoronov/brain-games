import runGame from '../index.js';

// Сгенерировать случайное число от 0 до 100
const generateRandNumber = () => Math.round(Math.random() * 100);

// Сконструировать вопрос
const getQuestion = () => `${generateRandNumber()} ${generateRandNumber()}`;

// Получить верный ответ
const getCorrectAnswer = (question) => {
  const [firstNumber, secondNumber] = question.split(' ');
  let greatestDivisor = 1;
  for (let i = 2; i <= Math.min(firstNumber, secondNumber); i += 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      greatestDivisor = i;
    }
  }
  return greatestDivisor;
};

// Собираем данные для передачи их в игру
const getQuestionAndAnswer = () => {
  const question = getQuestion();
  const correctAnswer = getCorrectAnswer(question);
  return [question, correctAnswer];
};

// Запустить игру
const runBrainGcd = () => {
  const rulesGame = 'Find the greatest common divisor of given numbers.';
  runGame(rulesGame, getQuestionAndAnswer);
};

export default runBrainGcd;
