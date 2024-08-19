import readlineSync from 'readline-sync';

export const greetings = () => {
    const userName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');    
};