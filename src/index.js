import readlineSync from 'readline-sync';

import getUserName from './cli.js';

const sayRulesGame = (rulesGame) => console.log(rulesGame);

const getUserAnswer = (question) => readlineSync.question(`Question: ${question}\nYour answer: `);

const isAnswerCorrect = (correctAnswer, answer) => correctAnswer === answer;

const sayCongratulations = (userName) => console.log(`Congratulations, ${userName}!`);

// Запуск игры - принимает на вход правила и функцию генерации пары вопрос-ответ
const runGame = (rulesGame, getQuestionAndAnswer) => {
  // Вывод приветствия и правил игры, получение имени пользователя
  const userName = getUserName();
  sayRulesGame(rulesGame);

  // Запуск цикла вопрос-ответ с проверкой результата раунда
  const maxNumberOfRound = 3;
  for (let round = 1; round <= maxNumberOfRound; round += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    const userAnswer = getUserAnswer(question);

    const userAnswerIsCorrect = isAnswerCorrect(correctAnswer, userAnswer);
    if (userAnswerIsCorrect) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }

  // Вывод поздравления (не сработает, если в цикле была ошибка - см. стр. 31)
  sayCongratulations(userName);
};

export default runGame;
