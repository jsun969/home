import React, { useEffect, useState } from 'react';

const ThemeToggleButton: React.FC = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.theme === 'dark' ||
      (!Reflect.has(localStorage, 'theme') &&
        window.matchMedia('(prefers-color-scheme: dark)').matches),
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      className={`${darkMode ? 'ri-moon-fill' : 'ri-sun-fill'} dark:text-white`}
      onClick={() => {
        setDarkMode(!darkMode);
      }}
    />
  );
};

export default ThemeToggleButton;
