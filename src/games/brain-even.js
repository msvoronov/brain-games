import {
  greetings, sayRulesGame, getUserAnswer, generateRandNumber, cycleQuestionAnswer, printResultRound,
} from '../index.js';

const brainEven = () => {
  // Чётно ли число в вопросе
  const isQuestionEven = (question) => (question % 2 === 0);
  
  // Получить верный ответ как "yes" / "no"
  const getAnswerCorrect = (question) => (isQuestionEven(question) ? 'yes' : 'no');

  const userName = greetings();
  sayRulesGame('Answer "yes" if the number is even, otherwise answer "no".');
  
  const playRound = () => {
    const question = generateRandNumber();
    const userAnswer = getUserAnswer(question);
    const correctAnswer = getAnswerCorrect(question);
  
    if (!printResultRound(correctAnswer, userAnswer, userName)) {
      return false;
    }
    return true;
  }

  cycleQuestionAnswer(playRound, userName);
};

export default brainEven;
