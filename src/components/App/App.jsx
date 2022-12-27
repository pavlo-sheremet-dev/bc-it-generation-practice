import { useEffect, useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Container, Header, Section, Text } from 'components';
import { Gallery, Todos } from 'tabs';

import { GlobalStylesComponent, theme as themeWithoutColors } from 'styles';
import { colorsTheme, THEME, THEME_LS_KEY } from 'styles/colors';
import { ThemeContext } from 'context/ThemeContext';

export const App = () => {
  const [themeTitle, setThemeTitle] = useState(
    () => localStorage.getItem(THEME_LS_KEY) ?? THEME.light
  );

  useEffect(() => {
    localStorage.setItem(THEME_LS_KEY, themeTitle);
  }, [themeTitle]);

  const toggleTheme = () => {
    setThemeTitle(prev => (prev === THEME.light ? THEME.dark : THEME.light));
  };

  const theme = {
    ...themeWithoutColors,
    colors: colorsTheme[themeTitle],
  };

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ toggleTheme, themeTitle }}>
        <GlobalStylesComponent theme={theme} />
        <Header />

        <Section>
          <Container>
            <Tabs>
              <TabList>
                <Tab>
                  <Text>Gallery</Text>
                </Tab>
                <Tab>
                  <Text>Todos</Text>
                </Tab>
              </TabList>

              <TabPanel>
                <Gallery />
              </TabPanel>

              <TabPanel>
                <Todos />
              </TabPanel>
            </Tabs>
          </Container>
        </Section>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};
