import { runGame } from '../index.js';

function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num !== 1;
  };

  const generatePrimeGame = () => {
    const num = Math.floor(Math.random() * 50);
    return {
        question: `${num}`,
        correctAnswer: isPrime(num) ? 'yes' : 'no',
    };
};

const startPrimeGame = () => runGame(generatePrimeGame, 'Answer "yes" if given number is prime. Otherwise answer "no".');

export default startPrimeGame;
