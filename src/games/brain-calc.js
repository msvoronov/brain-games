import {
  greetings, sayRulesGame, getUserAnswer, generateRandNumber, cycleQuestionAnswer, printResultRound,
} from '../index.js';

const brainCalc = () => {
  // Выбрать рандомный оператор
  const getRandOperator = () => {
    const operators = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * (operators.length - 1));
    return operators[randomIndex];
  };
  
  // Получить верный ответ
  const getAnswerCorrect = (question) => {
    const [firstNumber, operator, secondNumber] = question.split(' ');
    let answerCorrect;
    if (operator === '+') {
      answerCorrect = Number(firstNumber) + Number(secondNumber);
    }
    if (operator === '-') {
      answerCorrect = Number(firstNumber) - Number(secondNumber);
    }
    if (operator === '*') {
      answerCorrect = Number(firstNumber) * Number(secondNumber);
    }
    return answerCorrect;
  };
  
  const userName = greetings();
  sayRulesGame('What is the result of the expression?');
  
  const playRound = () => {
    const firstNumber = generateRandNumber();
    const secondNumber = generateRandNumber();
    const operator = getRandOperator();
    const question = `${firstNumber} ${operator} ${secondNumber}`;
    const userAnswer = getUserAnswer(question);
    const correctAnswer = getAnswerCorrect(question);
  
    if (!printResultRound(correctAnswer, userAnswer, userName)) {
      return false;
    }
    return true;
  }
  
  cycleQuestionAnswer(playRound, userName);
};

export default brainCalc;
