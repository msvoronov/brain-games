import readlineSync from 'readline-sync';

export const sayRulesGame = (rulesGame) => console.log(rulesGame);

export const getUserAnswer = (question) => readlineSync.question(`Question: ${question}\nYour answer: `);
