import {
  greetings, sayRulesGame, getUserAnswer, generateRandNumber, cycleQuestionAnswer, printResultRound,
} from '../index.js';

const brainCalc = () => {
  const userName = greetings();
  sayRulesGame('What is the result of the expression?');

  const getRandOperator = () => { // Выбрать рандомный оператор
    const operators = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * (operators.length - 1));
    return operators[randomIndex];
  };
  const getAnswerCorrect = (question) => { // Получить верный ответ
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
  const playRound = () => { // Выполнение одного раунда
    const question = `${generateRandNumber()} ${getRandOperator()} ${generateRandNumber()}`;
    const userAnswer = getUserAnswer(question);
    const correctAnswer = getAnswerCorrect(question);

    if (!printResultRound(correctAnswer, userAnswer, userName)) {
      return false;
    }
    return true;
  };

  cycleQuestionAnswer(playRound, userName);
};

export default brainCalc;
