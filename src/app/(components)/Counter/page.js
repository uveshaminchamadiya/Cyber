"use client"
import React, { useState, useEffect } from 'react';

function Counter() {
  // Initialize the count state with the value from localStorage or 0 if it doesn't exist
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem('count');
    return storedCount ? parseInt(storedCount) : 0;
  });

  // Function to handle incrementing the counter
  const increment = () => {
    setCount(prevCount => {
      const newCount = prevCount + 1;
      localStorage.setItem('count', newCount);
      return newCount;
    });
  };

  // Function to handle decrementing the counter
  const decrement = () => {
    setCount(prevCount => {
      const newCount = prevCount - 1;
      localStorage.setItem('count', newCount);
      return newCount;
    });
  };

  // useEffect to ensure localStorage is updated when count changes
  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  return (
    <div>
      <h2>Counter App</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
