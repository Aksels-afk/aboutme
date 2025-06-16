import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { I18nextProvider } from 'react-i18next';
import styled from 'styled-components';
import i18n from './i18n';
import { darkTheme, lightTheme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import Landing from './components/Landing';
import About from './components/About';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FadeIn from './components/FadeIn';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.background};
`;

const Main = styled.main`
  flex: 1;
  background: ${props => props.theme.background};
  position: relative;
`;

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    const handleScroll = () => setShowHeader(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <I18nextProvider i18n={i18n}>
        <GlobalStyle />
        <AppContainer>
          <Header show={showHeader} onThemeToggle={() => setIsDarkMode(!isDarkMode)} isDarkMode={isDarkMode} />
          <Main>
            <Landing showHeader={showHeader} />
            <FadeIn>
              <About />
            </FadeIn>
            <FadeIn>
              <Education />
            </FadeIn>
            <FadeIn>
              <WorkExperience />
            </FadeIn>
            <FadeIn>
              <Hobbies />
            </FadeIn>
            <FadeIn>
              <Contact />
            </FadeIn>
          </Main>
          <FadeIn>
            <Footer />
          </FadeIn>
        </AppContainer>
      </I18nextProvider>
    </ThemeProvider>
  );
};

export default App;
