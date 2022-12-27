import { BsSun, BsMoonFill } from 'react-icons/bs';
import { THEME } from 'styles/colors';
import { useTheme } from 'context/ThemeContext';

export const ThemeSwitcher = () => {
  const { themeTitle, toggleTheme } = useTheme();

  return (
    <button style={{ padding: 10 }} type="button" onClick={toggleTheme}>
      {themeTitle === THEME.light ? (
        <BsSun size={30} color="black" />
      ) : (
        <BsMoonFill size={30} color="white" />
      )}
    </button>
  );
};
