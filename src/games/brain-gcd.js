import {
  greetings, sayRulesGame, getUserAnswer, generateRandNumber, cycleQuestionAnswer, printResultRound,
} from '../index.js';

const brainGcd = () => {
  // Получить верный ответ
  const getAnswerCorrect = (question) => {
    const [firstNumber, secondNumber] = question.split(' ');
    let answerCorrect = 1;
    for (let i = 2; i <= Math.min(firstNumber, secondNumber); i += 1) {
      if (firstNumber % i === 0 && secondNumber % i === 0) {
        answerCorrect = i;
      }
    }
    return answerCorrect;
  };
  
  const userName = greetings();
  sayRulesGame('Find the greatest common divisor of given numbers.');
  
  const playRound = () => {
    const firstNumber = generateRandNumber();
    const secondNumber = generateRandNumber();
    const question = `${firstNumber} ${secondNumber}`;
    const userAnswer = getUserAnswer(question);
    const correctAnswer = getAnswerCorrect(question);
  
    if (!printResultRound(correctAnswer, userAnswer, userName)) {
      return false;
    }
    return true;
  }
  
  cycleQuestionAnswer(playRound, userName);
};

export default brainGcd;
