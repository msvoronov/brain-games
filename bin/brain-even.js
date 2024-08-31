#!/usr/bin/env node
import greetings from '../src/cli.js';
import { sayRulesGame, getUserAnswer, generateRandNumber } from '../src/index.js';

const userName = greetings();

// Корректен ли ответ
const isAnswerValid = (answer) => (!!(answer === 'yes' || answer === 'no'));

// Чётно ли число в вопросе
const isQuestionEven = (question) => (question % 2 === 0);

// Получить верный ответ как "yes" / "no"
const getAnswerCorrect = (question) => (isQuestionEven(question) ? 'yes' : 'no');

// Верен ли передаваемый ответ
const isAnswerCorrect = (question, answer) => {
  const correctAnswer = getAnswerCorrect(question);
  return correctAnswer === answer;
};

sayRulesGame('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < 3; i += 1) {
  const question = generateRandNumber();
  const userAnswer = getUserAnswer(question);
  if (isAnswerValid(userAnswer) && isAnswerCorrect(question, userAnswer)) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${getAnswerCorrect(question)}'.\nLet's try again, ${userName}!`);
    break;
  }

  if (i === 2) {
    console.log(`Congratulations, ${userName}!`);
  }
}
