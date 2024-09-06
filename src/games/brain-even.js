import runGame from '../index.js';

// Сгенерировать случайное число от 0 до 100
const generateRandNumber = () => Math.round(Math.random() * 100);

// Сконструировать вопрос
const getQuestion = () => generateRandNumber();

// Чётно ли число в вопросе
const isQuestionEven = (question) => (question % 2 === 0);

// Получить верный ответ как "yes" / "no"
const getCorrectAnswer = (question) => (isQuestionEven(question) ? 'yes' : 'no');

// Запустить игру
const runBrainEven = () => {
  const rulesGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(rulesGame, getQuestion, getCorrectAnswer);
};

export default runBrainEven;
