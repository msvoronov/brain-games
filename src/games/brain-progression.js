import runGame from '../index.js';
import getRandNumber from '../random.js';

// Сконструировать прогрессию в виде массива
const getProgression = () => {
  const multiplier = 10;
  const firstNumber = getRandNumber(multiplier);
  const step = Math.max(1, getRandNumber(multiplier)); // Что бы step не оказался равен 0
  const progression = [];
  const progressionLength = 10;
  for (let index = 0; index < progressionLength; index += 1) {
    progression.push(firstNumber + (step * index));
  }
  return progression;
};

// Сконструировать строку-вопрос
const getQuestion = (progression, randomIndex) => {
  const hiddenProgression = [...progression];
  hiddenProgression[randomIndex] = '..';
  const question = hiddenProgression.join(' ');
  return question;
};

// Собираем данные для передачи их в игру
const getQuestionAndAnswer = () => {
  // Получить прогресcию как массив
  const progression = getProgression();

  // Выбрать случайный индекс для скрытия числа
  const lastIndex = progression.length - 1;
  const randomIndex = getRandNumber(lastIndex);

  // Получить строку-вопрос со скрытым числом
  const question = getQuestion(progression, randomIndex);

  // Получить верный ответ как string
  const correctAnswer = String(progression[randomIndex]);
  return [question, correctAnswer];
};

// Запустить игру
const runBrainProgression = () => {
  const rulesGame = 'What number is missing in the progression?';
  runGame(rulesGame, getQuestionAndAnswer);
};

export default runBrainProgression;
