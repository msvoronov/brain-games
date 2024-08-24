import readlineSync from 'readline-sync';

let userName = '';
const greetings = () => {
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export { greetings, userName };
