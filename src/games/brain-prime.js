import runGame from '../index.js';
import getRandNumber from '../random.js';

// Чётно ли число в вопросе
const isQuestionPrime = (question) => {
  if (question <= 1) {
    return false;
  }
  let countDivisors = 1;
  for (let i = 2; i <= question; i += 1) {
    if (question % i === 0) {
      countDivisors += 1;
    }
  }
  return countDivisors === 2;
};

// Собираем данные для передачи их в игру
const getQuestionAndAnswer = () => {
  const multiplier = 100;
  const question = getRandNumber(multiplier);
  const correctAnswer = isQuestionPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

// Запустить игру
const runBrainPrime = () => {
  const rulesGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(rulesGame, getQuestionAndAnswer);
};

export default runBrainPrime;
