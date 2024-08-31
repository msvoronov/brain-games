#!/usr/bin/env node
import greetings from '../../src/cli.js';
import {
  sayRulesGame, getUserAnswer, generateRandNumber, printResultRound, congratsIfRoundLast,
} from '../../src/index.js';

const userName = greetings();

// Чётно ли число в вопросе
const isQuestionEven = (question) => (question % 2 === 0);

// Получить верный ответ как "yes" / "no"
const getAnswerCorrect = (question) => (isQuestionEven(question) ? 'yes' : 'no');

sayRulesGame('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 1; i < 4; i += 1) {
  const question = generateRandNumber();
  const userAnswer = getUserAnswer(question);
  const correctAnswer = getAnswerCorrect(question);

  if (!printResultRound(correctAnswer, userAnswer, userName)) {
    break;
  }

  congratsIfRoundLast(i, userName);
}
