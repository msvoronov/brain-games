import runGame from '../index.js';

// Сгенерировать случайное число от 0 до 10
const generateRandNumberSmall = () => Math.round(Math.random() * 10);

// Сконструировать прогрессию в виде массива
const getProgression = () => {
  const firstNumber = generateRandNumberSmall();
  const step = Math.max(1, generateRandNumberSmall()); // Что бы step не оказался равен 0
  const progression = [];
  const progressionLength = 10;
  for (let index = 0; index < progressionLength; index += 1) {
    progression.push(firstNumber + (step * index));
  }
  return progression;
};
// Сконструировать вопрос
const getQuestion = () => {
  const progression = getProgression();
  const randomIndex = Math.max(1, generateRandNumberSmall() - 1); // Ограничить диапазоном "0..9"
  progression[randomIndex] = '..';

  const question = progression.join(' ');
  return question;
};

// Получить верный ответ
const getCorrectAnswer = (question) => {
  const progression = question.split(' ');
  const indexOfHiddenNum = progression.indexOf('..');
  const step = indexOfHiddenNum <= 1
    ? progression[3] - progression[2]
    : progression[1] - progression[0];

  if (indexOfHiddenNum === 0) {
    return progression[1] - step;
  }
  return Number(progression[indexOfHiddenNum - 1]) + Number(step);
};

// Собираем данные для передачи их в игру
const getQuestionAndAnswer = () => {
  const question = getQuestion();
  const correctAnswer = getCorrectAnswer(question);
  return [question, correctAnswer];
};

// Запустить игру
const runBrainProgression = () => {
  const rulesGame = 'What number is missing in the progression?';
  runGame(rulesGame, getQuestionAndAnswer);
};

export default runBrainProgression;
