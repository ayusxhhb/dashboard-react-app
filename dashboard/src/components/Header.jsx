import React, { useState, useEffect } from 'react';
import { AiOutlineSearch, AiOutlineBell, AiOutlineMoon, AiOutlineSun } from 'react-icons/ai';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md dark:bg-gray-800">
      <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-200">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 border rounded-lg border-gray-300 focus:ring focus:ring-indigo-100 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          />
          <AiOutlineSearch className="h-5 w-5 absolute top-2 left-3 text-gray-400 dark:text-gray-300" />
        </div>
        <AiOutlineBell className="h-6 w-6 text-gray-600 cursor-pointer dark:text-gray-200" />
        <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
          {darkMode ? (
            <AiOutlineSun className="h-5 w-5 text-yellow-500" />
          ) : (
            <AiOutlineMoon className="h-5 w-5 text-gray-800" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
