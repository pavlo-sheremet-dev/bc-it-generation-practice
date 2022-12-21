import { BsSun, BsMoonFill } from 'react-icons/bs';
import { THEME } from 'styles/colors';

export const ThemeSwitcher = ({
  theme = THEME.light,
  toggleTheme = () => {},
}) => {
  return (
    <button style={{ padding: 10 }} type="button" onClick={toggleTheme}>
      {theme === THEME.light ? (
        <BsSun size={30} color="black" />
      ) : (
        <BsMoonFill size={30} color="white" />
      )}
    </button>
  );
};
