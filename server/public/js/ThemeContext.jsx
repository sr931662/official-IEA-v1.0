// Create a new file called ThemeContext.js
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext({
  isSun: false,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [isSun, setIsSun] = useState(false);

  const toggleTheme = () => {
    setIsSun(!isSun);
    const updateUserTheme = async (userId, isSun) => {
      const themeValue = Number(isSun);
      await User.findByIdAndUpdate(userId, { theme: themeValue });
    };
    updateUserTheme();
  };

  return (
    <ThemeContext.Provider value={{ isSun, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// export default ThemeContext;