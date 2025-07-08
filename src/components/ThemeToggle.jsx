import React from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme, isLight } = useTheme();

  return (
    <button 
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
      title={`Switch to ${isLight ? 'dark' : 'light'} mode`}
    >
      <div className="toggle-container">
        <div className={`toggle-slider ${isLight ? 'light' : 'dark'}`}>
          <div className="toggle-icon">
            {isLight ? <MdLightMode /> : <MdDarkMode />}
          </div>
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;