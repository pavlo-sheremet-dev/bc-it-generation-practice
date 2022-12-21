import { Component } from 'react';
import { ThemeProvider } from '@emotion/react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Container, Header, Section, Text } from 'components';
import { Gallery, Todos } from 'tabs';

import { GlobalStylesComponent, theme as themeWithoutColors } from 'styles';
import { colorsTheme, THEME, THEME_LS_KEY } from 'styles/colors';

export class App extends Component {
  state = {
    themeTitle: localStorage.getItem(THEME_LS_KEY) ?? THEME.light,
  };

  componentDidUpdate = (_, prevState) => {
    const { themeTitle } = this.state;
    if (prevState.themeTitle !== themeTitle) {
      localStorage.setItem(THEME_LS_KEY, themeTitle);
    }
  };

  toggleTheme = () => {
    this.setState(prev => ({
      themeTitle: prev.themeTitle === THEME.light ? THEME.dark : THEME.light,
    }));
  };

  render() {
    const { themeTitle } = this.state;
    const theme = {
      ...themeWithoutColors,
      colors: colorsTheme[themeTitle],
    };

    return (
      <ThemeProvider theme={theme}>
        <GlobalStylesComponent theme={theme} />
        <Header toggleTheme={this.toggleTheme} themeTitle={themeTitle} />

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
      </ThemeProvider>
    );
  }
}
