import { runGame } from '../index.js';

const gcd = (num1, num2) => {
    if (num2 === 0) {
        return num1;
    }
    return gcd(num2, num1 % num2);
};

const generateGcdGame = () => {
    const num1 = Math.floor(Math.random() * 50);
    const num2 = Math.floor(Math.random() * 50);

    return {
        question: `${num1} and ${num2}`,
        correctAnswer: String(gcd(num1, num2)), 
    };
};

export default () => runGame(generateGcdGame, 'Find the greatest common divisor of given numbers.');
