'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GuessNumberGameModal({ onClose }: { onClose: () => void }) {
  const [target, setTarget] = useState(generateNumber());
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('Guess a number between 1 and 100');
  const [attempts, setAttempts] = useState(0);
  const [highScore, setHighScore] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const MAX_ATTEMPTS = 10;

  function generateNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleGuess = () => {
    const num = parseInt(guess);
    if (isNaN(num) || num < 1 || num > 100) {
      setMessage('Please enter a valid number between 1 and 100.');
      return;
    }

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    if (num === target) {
      setMessage(`🎉 Correct! You guessed it in ${newAttempts} tries.`);
      if (!highScore || newAttempts < highScore) {
        setHighScore(newAttempts);
      }
      setGameOver(true);
    } else if (newAttempts >= MAX_ATTEMPTS) {
      setMessage(`❌ You've reached ${MAX_ATTEMPTS} attempts! The number was ${target}.`);
      setGameOver(true);
    } else if (num < target) {
      setMessage('Too low! Try a higher number.');
    } else {
      setMessage('Too high! Try a lower number.');
    }
  };

  const restartGame = () => {
    setTarget(generateNumber());
    setGuess('');
    setMessage('Guess a number between 1 and 100');
    setAttempts(0);
    setGameOver(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="bg-[var(--color-bg)] rounded-xl p-[3vw] shadow-xl w-full max-w-md relative"
      >
        <button
          onClick={onClose}
          className="absolute top-[1vw] right-[2vw] text-gray-600 hover:text-red-500 text-[1.5vw] font-bold"
        >
          &times;
        </button>
        <h1 className="text-[2.5vw] font-bold mb-[1vw] text-center text-[var(--color-text)]">Guess the Number</h1>
        <p className="mb-[1vw] text-center text-[1.2vw] text-[var(--color-text-muted)]">{message}</p>
        <p className="mb-[1vw] text-center text-[1vw] text-[var(--color-text-muted)]">
          Attempts left: {MAX_ATTEMPTS - attempts}
        </p>
        <div className="flex flex-col items-center gap-[1vw] mt-[1vw]">
          <input
            type="number"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            disabled={gameOver}
            className="w-full text-[1vw] px-[1.5vw] py-[1vw] border border-[var(--color-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            placeholder="Enter your guess"
          />
          <button
            onClick={handleGuess}
            disabled={gameOver}
            className="w-full py-[1vw] bg-[var(--color-primary)] text-white rounded-md hover:bg-teal-700 font-medium text-[1vw]"
          >
            Submit Guess
          </button>
          <button
            onClick={restartGame}
            className="w-full py-[1vw] bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 font-medium text-[1vw]"
          >
            Restart
          </button>
          {highScore !== null && (
            <p className="text-[0.9vw] text-[var(--color-text-muted)]">Best Score: {highScore} attempts</p>
          )}
        </div>
      </motion.div>
    </div>
  );
}
