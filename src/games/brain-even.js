import runGame from '../index.js';
import getRandNumber from '../random.js';

// Чётно ли число в вопросе
const isQuestionEven = (question) => (question % 2 === 0);

// Собираем данные для передачи их в игру
const getQuestionAndAnswer = () => {
  const multiplier = 100;
  const question = getRandNumber(multiplier);
  const correctAnswer = isQuestionEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

// Запустить игру
const runBrainEven = () => {
  const rulesGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(rulesGame, getQuestionAndAnswer);
};

export default runBrainEven;
