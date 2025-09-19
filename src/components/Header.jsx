import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import LanguageSelector from './LanguageSelector';

const HeaderContainer = styled.header`
  padding: 1.2rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.header};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid ${props => props.theme.border};
  transition: all 0.5s ease;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  transform: translateY(${props => props.show ? '0' : '-100%'});
  opacity: ${props => props.show ? '1' : '0'};

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${props => props.theme.header};
    padding: 1rem;
    gap: 1rem;
    border-bottom: 1px solid ${props => props.theme.border};
  }
`;

const NavLink = styled.a`
  color: ${props => props.theme.text};
  text-decoration: none;
  padding: 0.5rem;
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  position: relative;
  transition: all 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    background-color: ${props => props.theme.primary};
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }
  
  &:hover {
    color: ${props => props.theme.primary};
    
    &::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 0.75rem;
    text-align: center;
  }
`;

const Controls = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-left: auto;
`;

const ThemeToggle = styled.button`
  padding: 0.6rem;
  border: none;
  border-radius: 50%;
  background-color: ${props => props.theme.primary};
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  width: 2.5rem;
  height: 2.5rem;
  margin-left: 1rem;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = ({ show, onThemeToggle, isDarkMode }) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer show={show}>
      <MenuButton onClick={toggleMenu}>
        {isMenuOpen ? '✕' : '☰'}
      </MenuButton>
      <Nav isOpen={isMenuOpen}>
        <NavLink href="#home" onClick={() => setIsMenuOpen(false)}>{t('nav.home')}</NavLink>
        <NavLink href="#about" onClick={() => setIsMenuOpen(false)}>{t('nav.about')}</NavLink>
        <NavLink href="#projects" onClick={() => setIsMenuOpen(false)}>{t('nav.projects')}</NavLink>
        <NavLink href="#education" onClick={() => setIsMenuOpen(false)}>{t('nav.education')}</NavLink>
        <NavLink href="#experience" onClick={() => setIsMenuOpen(false)}>{t('nav.experience')}</NavLink>
        <NavLink href="#contact" onClick={() => setIsMenuOpen(false)}>{t('nav.contact')}</NavLink>
      </Nav>
      <Controls>
        <ThemeToggle onClick={onThemeToggle}>
          {isDarkMode ? '🌙' : '☀️'}
        </ThemeToggle>
        <LanguageSelector isFixed={true} show={show} />
      </Controls>
    </HeaderContainer>
  );
};

export default Header; 