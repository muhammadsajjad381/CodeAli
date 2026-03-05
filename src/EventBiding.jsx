import React, { useState } from 'react';

const EventBinding = () => {
  const [inputValue, setInputValue] = useState("");

  // 1. Simple Handler (Bina arguments ke)
  const handleSimpleClick = () => {
    alert("Simple button click hua!");
  };

  // 2. Handler with Arguments (Data ke saath)
  const handleWithData = (name) => {
    alert(`Hello ${name}! Ye data function mein pass hua hai.`);
  };

  // 3. Input Change Handler
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>React Event Binding Examples</h1>
      <hr />

      {/* Case 1: Simple Reference (Parenthasis nahi lagane) */}
      <section>
        <h3>1. Simple Click</h3>
        <button onClick={handleSimpleClick}>Click Me</button>
      </section>

      <br />

      {/* Case 2: Argument pass karne ke liye Arrow Function zaroori hai */}
      <section>
        <h3>2. Passing Data (Arguments)</h3>
        <button onClick={() => handleWithData("Gemini User")}>
          Greet User
        </button>
      </section>

      <br />

      {/* Case 3: Input handle karna */}
      <section>
        <h3>3. Input Change (Typing)</h3>
        <input 
          type="text" 
          placeholder="Yahan kuch type karein..." 
          onChange={handleInputChange} 
        />
        <p>Aapne type kiya: <strong>{inputValue}</strong></p>
      </section>
    </div>
  );
};

export default EventBinding; 