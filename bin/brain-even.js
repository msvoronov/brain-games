#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greetings, userName } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
greetings();

// Корректен ли ответ
const isAnswerValid = (answer) => (!!(answer === 'yes' || answer === 'no'));

// Чётно ли число в вопросе
const isQuestionEven = (question) => (question % 2 === 0);

// Вернуть верный ответ как "yes" / "no"
const getAnswerCorrect = (question) => (isQuestionEven(question) ? 'yes' : 'no');

// Верен ли передаваемый ответ
const isAnswerCorrect = (question, answer) => {
  const correctAnswer = getAnswerCorrect(question);
  return correctAnswer === answer;
};

console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < 3; i += 1) {
  const question = Math.round(Math.random() * 100);
  const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
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
