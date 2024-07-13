import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    if (timeLeft === 0) return;

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  return (
    <div className="flex p-6 sm:p-12 rounded-lg flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-2xl font-bold mb-6 animate-pulse">Wait for</h1>
      <div className="bg-white text-blue-500 rounded-full px-20 shadow-lg text-2xl font-bold">
        {timeLeft} s
      </div>
    </div>
  );
};

export default CountdownTimer;
