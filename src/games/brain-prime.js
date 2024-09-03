import {
  greetings, sayRulesGame, getUserAnswer, generateRandNumber, cycleQuestionAnswer, printResultRound,
} from '../index.js';

const brainPrime = () => {
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
  const getAnswerCorrect = (question) => (isQuestionPrime(question) ? 'yes' : 'no');
  
  const userName = greetings();
  sayRulesGame('Answer "yes" if given number is prime. Otherwise answer "no".');
  
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

export default brainPrime;
