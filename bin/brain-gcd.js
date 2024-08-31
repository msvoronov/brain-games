#!/usr/bin/env node
import greetings from '../src/cli.js';
import {
  sayRulesGame, getUserAnswer, generateRandNumber, isAnswerCorrect,
} from '../src/index.js';

const userName = greetings();

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

sayRulesGame('Find the greatest common divisor of given numbers.');

for (let i = 0; i < 3; i += 1) {
  const firstNumber = generateRandNumber();
  const secondNumber = generateRandNumber();
  const question = `${firstNumber} ${secondNumber}`;
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
