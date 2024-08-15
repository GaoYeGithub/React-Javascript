import React, { createContext, useState, useContext } from 'react';
import { ThemeProvider as ThemeUIProvider } from 'theme-ui';
import theme from '@hackclub/theme';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const themeMode = {
    ...theme,
    colors: {
      ...theme.colors,
      background: isDark ? '#000' : '#fff',
      text: isDark ? '#fff' : '#000',
      primary: '#ec3750',
      secondary: '#3c4858',
    },
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <ThemeUIProvider theme={themeMode}>{children}</ThemeUIProvider>
    </ThemeContext.Provider>
  );
};
