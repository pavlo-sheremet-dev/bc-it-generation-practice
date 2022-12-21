import { IoLogoReact } from 'react-icons/io5';
import { NavBar, HeaderWrapper, NavText } from './Header.styled';
import { Container, ThemeSwitcher } from 'components';
import { useTheme } from '@emotion/react';

export const Header = ({ toggleTheme, themeTitle }) => {
  const theme = useTheme();

  return (
    <>
      <NavBar>
        <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
          <HeaderWrapper>
            <IoLogoReact size="40px" color={theme.colors.accent} />

            <NavText>Lesson 2</NavText>
          </HeaderWrapper>
          <ThemeSwitcher toggleTheme={toggleTheme} theme={themeTitle} />
        </Container>
      </NavBar>
    </>
  );
};
