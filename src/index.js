import readlineSync from 'readline-sync';

export const sayRulesGame = (rulesGame) => console.log(rulesGame);

export const getUserAnswer = (question) => readlineSync.question(`Question: ${question}\nYour answer: `);

export const generateRandNumber = () => Math.round(Math.random() * 100);

export const generateRandNumberSmall = () => Math.round(Math.random() * 10);

export const isAnswerCorrect = (correctAnswer, answer) => correctAnswer === answer;
