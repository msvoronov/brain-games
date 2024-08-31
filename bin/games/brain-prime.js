#!/usr/bin/env node
import greetings from '../../src/cli.js';
import {
  sayRulesGame, getUserAnswer, generateRandNumber, printResultRound, congratsIfRoundLast
} from '../../src/index.js';

const userName = greetings();

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

sayRulesGame('Answer "yes" if given number is prime. Otherwise answer "no".');

for (let i = 1; i < 4; i += 1) {
  const question = generateRandNumber();
  const userAnswer = getUserAnswer(question);
  const correctAnswer = getAnswerCorrect(question);

  if (!printResultRound(correctAnswer, userAnswer, userName)) {
    break
  }

  congratsIfRoundLast(i, userName);
}
