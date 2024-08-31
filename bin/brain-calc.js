#!/usr/bin/env node
import greetings from '../src/cli.js';
import {
  sayRulesGame, getUserAnswer, generateRandNumber, isAnswerCorrect,
} from '../src/index.js';

const userName = greetings();

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

sayRulesGame('What is the result of the expression?');

for (let i = 0; i < 3; i += 1) {
  const firstNumber = generateRandNumber();
  const secondNumber = generateRandNumber();
  const operator = getRandOperator();
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const userAnswer = getUserAnswer(question);
  if (isAnswerCorrect(getAnswerCorrect(question), Number(userAnswer))) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${getAnswerCorrect(question)}'.\nLet's try again, ${userName}!`);
    break;
  }

  if (i === 2) {
    console.log(`Congratulations, ${userName}!`);
  }
}
