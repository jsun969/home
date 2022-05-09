import React, { useEffect, useState } from 'react';

const ThemeToggleButton: React.FC = () => {
  const [darkMode, setDarkMode] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches,
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
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
