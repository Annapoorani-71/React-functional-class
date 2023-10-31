import React, { useState } from 'react';

function Extra() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const backgroundColor = theme === 'light' ? '#fff' : '#333';
  const textColor = theme === 'light' ? '#333' : '#fff';

  return (
    <div className="App" style={{ backgroundColor, color: textColor }}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>This content can be styled based on the selected theme.</p>
    </div>
  );
}

export default Extra;
