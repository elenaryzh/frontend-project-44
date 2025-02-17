import { runGame, generateRandomNumber } from '../index.js'; 
const isEven = (num) => num % 2 === 0;

const generateEvenGame = () => {
    const num = generateRandomNumber(100); 
    return {
        question: `${num}`,
        correctAnswer: isEven(num) ? 'yes' : 'no',
    };
};

export default () => runGame(generateEvenGame, 'Answer "yes" if the number is even, otherwise answer "no".');
