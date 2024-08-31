#!/usr/bin/env node
import greetings from '../../src/cli.js';
import {
  sayRulesGame, getUserAnswer, generateRandNumber, printResultRound, congratsIfRoundLast,
} from '../../src/index.js';

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

for (let i = 1; i < 4; i += 1) {
  const firstNumber = generateRandNumber();
  const secondNumber = generateRandNumber();
  const question = `${firstNumber} ${secondNumber}`;
  const userAnswer = getUserAnswer(question);
  const correctAnswer = getAnswerCorrect(question);

  if (!printResultRound(correctAnswer, userAnswer, userName)) {
    break;
  }

  congratsIfRoundLast(i, userName);
}
