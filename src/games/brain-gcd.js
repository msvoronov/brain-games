import runGame from '../index.js';
import getRandNumber from '../random.js';

// Получить верный ответ
const getCorrectAnswer = ([firstNumber, secondNumber]) => {
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
  const gameData = [getRandNumber(), getRandNumber()];

  const question = gameData.join(' ');
  const correctAnswer = getCorrectAnswer(gameData);

  return [question, correctAnswer];
};

// Запустить игру
const runBrainGcd = () => {
  const rulesGame = 'Find the greatest common divisor of given numbers.';
  runGame(rulesGame, getQuestionAndAnswer);
};

export default runBrainGcd;
