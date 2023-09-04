import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Licznik: {count}</p>
      <button onClick={handleClick}>Zwiększ</button>
    </div>
  );
};
