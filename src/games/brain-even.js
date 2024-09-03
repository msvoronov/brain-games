import {
  greetings, sayRulesGame, getUserAnswer,
  generateRandNumber, cycleQuestionAnswer, printResultRound,
} from '../index.js';

const brainEven = () => {
  const userName = greetings();
  sayRulesGame('Answer "yes" if the number is even, otherwise answer "no".');

  const isQuestionEven = (question) => (question % 2 === 0); // Чётно ли число в вопросе
  const getAnswerCorrect = (question) => (isQuestionEven(question) ? 'yes' : 'no'); // Получить верный ответ как "yes" / "no"
  const playRound = () => { // Выполнение одного раунда
    const question = generateRandNumber();
    const userAnswer = getUserAnswer(question);
    const correctAnswer = getAnswerCorrect(question);

    if (!printResultRound(correctAnswer, userAnswer, userName)) {
      return false;
    }
    return true;
  };

  cycleQuestionAnswer(playRound, userName);
};

export default brainEven;
