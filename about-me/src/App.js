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
  const [showHeader, setShowHeader] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const landingSection = document.getElementById('home');
      if (landingSection) {
        const landingHeight = landingSection.offsetHeight;
        const scrollPosition = window.scrollY;
        setShowHeader(scrollPosition > landingHeight * 0.8);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <AppContainer>
          <Header show={showHeader} onThemeToggle={handleThemeToggle} isDarkMode={isDarkMode} />
          <Main>
            <FadeIn>
              <Landing showHeader={showHeader} />
            </FadeIn>
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
      </ThemeProvider>
    </I18nextProvider>
  );
};

export default App;
