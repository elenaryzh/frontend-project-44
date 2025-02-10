import { runGame } from '../index.js';

const operators = ['+', '-', '*'];

const calculate = (num1, num2, operator) => {
    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else {
        console.log(`Error: Unknown operator '${operator}'. Please use +, -, *.`);
        return null;
    }
};

const generateCalcGame = () => {
    const num1 = Math.floor(Math.random() * 20);
    const num2 = Math.floor(Math.random() * 20);
    const operator = operators[Math.floor(Math.random() * operators.length)];

    return {
        question: `${num1} ${operator} ${num2}`,
        correctAnswer: String(calculate(num1, num2, operator)), 
    };
};

export default () => runGame(generateCalcGame, 'What is the result of the expression?');
