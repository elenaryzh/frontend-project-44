import readlineSync from 'readline-sync';
import welcomeUser from './cli.js';

const MAX_ROUNDS = 3;

export const runGame = (gameLogic, description) => {
    const name = welcomeUser(); 
    console.log(description);

    for (let round = 0; round < MAX_ROUNDS; round += 1) {
        const { question, correctAnswer } = gameLogic();
        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ');

        if (userAnswer !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }

        console.log('Correct!');
    }

    console.log(`Congratulations, ${name}!`);
};
