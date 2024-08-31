#!/usr/bin/env node
import greetings from '../../src/cli.js';
import {
  sayRulesGame, getUserAnswer, generateRandNumber, isAnswerCorrect,
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

for (let i = 0; i < 3; i += 1) {
  const question = generateRandNumber();
  const userAnswer = getUserAnswer(question);
  if (isAnswerCorrect(getAnswerCorrect(question), userAnswer)) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${getAnswerCorrect(question)}'.\nLet's try again, ${userName}!`);
    break;
  }

  if (i === 2) {
    console.log(`Congratulations, ${userName}!`);
  }
}
