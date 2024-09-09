import runGame from '../index.js';

// Сгенерировать случайное число от 0 до 100
const generateRandNumber = () => Math.round(Math.random() * 100);

// Сконструировать вопрос
const getQuestion = () => generateRandNumber();

// Чётно ли число в вопросе
const isQuestionPrime = (question) => {
  if (question <= 1) {
    return false;
  }
  let divisors = 1;
  for (let i = 2; i <= question; i += 1) {
    if (question % i === 0) {
      divisors += 1;
    }
  }
  return divisors === 2;
};

// Получить верный ответ как "yes" / "no"
const getCorrectAnswer = (question) => (isQuestionPrime(question) ? 'yes' : 'no');

// Собираем данные для передачи их в игру
const getQuestionAndAnswer = () => {
  const question = getQuestion();
  const correctAnswer = getCorrectAnswer(question);
  return [question, correctAnswer];
};

// Запустить игру
const runBrainPrime = () => {
  const rulesGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(rulesGame, getQuestionAndAnswer);
};

export default runBrainPrime;
