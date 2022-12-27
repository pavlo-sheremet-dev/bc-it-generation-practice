import { useContext } from 'react';
import { createContext } from 'react';
import { THEME } from 'styles/colors';

export const ThemeContext = createContext({
  themeTitle: THEME.light,
  toggleTheme: () => {},
});

export const useTheme = () => {
  const { themeTitle, toggleTheme } = useContext(ThemeContext);
  return { themeTitle, toggleTheme };
};
