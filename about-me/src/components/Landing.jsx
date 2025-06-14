import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import LanguageSelector from './LanguageSelector';

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  position: relative;
  background: linear-gradient(
    135deg,
    ${props => props.theme.background} 0%,
    ${props => props.theme.card} 100%
  );
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at center,
      ${props => props.theme.primary}20 0%,
      transparent 70%
    );
    z-index: 0;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.text};
  animation: fadeIn 1s ease-out;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.secondary};
  animation: fadeIn 1s ease-out 0.5s backwards;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const LearnMoreButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background: ${props => props.theme.primary};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: fadeIn 1s ease-out 1s backwards;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const Landing = ({ showHeader }) => {
  const { t } = useTranslation();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section id="home">
      <LanguageSelector isFixed={false} show={!showHeader} />
      <Content>
        <Title>{t('landing.welcome')}</Title>
        <Subtitle>{t('landing.subtitle')}</Subtitle>
        <LearnMoreButton onClick={scrollToAbout}>
          {t('landing.learnMore')}
        </LearnMoreButton>
      </Content>
    </Section>
  );
};

export default Landing; 