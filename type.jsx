import React, { useState } from 'react';

function CharacterCounter() {
  const [count, setCount] = useState(0);

  const handleInputChange = (e) => {
    setCount(e.target.value.length);
  };

  return (
    <div>
      <input type="text" onChange={handleInputChange} />
      <div>{count} characters</div>
    </div>
  );
}

export default CharacterCounter;
