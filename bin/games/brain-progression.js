#!/usr/bin/env node
import greetings from '../../src/cli.js';
import {
  sayRulesGame, getUserAnswer, isAnswerCorrect, generateRandNumberSmall,
} from '../../src/index.js';

const userName = greetings();

sayRulesGame('What number is missing in the progression?');

for (let i = 0; i < 3; i += 1) {
  const firstNumber = generateRandNumberSmall();
  const step = Math.max(1, generateRandNumberSmall()); // Что бы step не оказался равен 0
  const randomIndex = generateRandNumberSmall() - 1; // Что бы randomIndex не оказался равен 10
  const progression = [];
  const progressionLength = 10;
  for (let index = 0; index <= progressionLength; index += 1) {
    progression.push(firstNumber + (step * i));
  }
  const hiddenNum = progression[randomIndex];
  let question = [...progression];
  question[randomIndex] = '..';
  question = question.join(' ');
  const userAnswer = getUserAnswer(question);
  if (isAnswerCorrect(Number(hiddenNum), Number(userAnswer))) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenNum}'.\nLet's try again, ${userName}!`);
    break;
  }

  if (i === 2) {
    console.log(`Congratulations, ${userName}!`);
  }
}
