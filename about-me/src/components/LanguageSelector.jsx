import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const SelectorContainer = styled.div`
  position: ${props => props.isFixed ? 'relative' : 'absolute'};
  top: ${props => props.isFixed ? 'auto' : '1.2rem'};
  right: ${props => props.isFixed ? 'auto' : '2rem'};
  z-index: 1000;
  transition: all 0.5s ease;
  opacity: ${props => props.show ? '1' : '0'};
  visibility: ${props => props.show ? 'visible' : 'hidden'};
`;

const SelectButton = styled.button`
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
  font-weight: 500;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background: ${props => props.theme.card};
  border: 1px solid ${props => props.theme.border};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 1000;
  transform-origin: top right;
  transform: ${props => props.show ? 'scale(1)' : 'scale(0.8)'};
  opacity: ${props => props.show ? '1' : '0'};
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
`;

const LanguageOption = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  background: none;
  color: ${props => props.theme.text};
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.9rem;
  text-align: left;

  &:hover {
    background: ${props => props.theme.primary}20;
  }

  &.active {
    background: ${props => props.theme.primary}40;
    font-weight: 500;
  }
`;

const LanguageSelector = ({ isFixed, show }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', name: 'English', display: 'EN' },
    { code: 'lv', name: 'Latvian', display: 'LV' },
    { code: 'no', name: 'Norwegian', display: 'NO' }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (languageCode) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <SelectorContainer ref={dropdownRef} isFixed={isFixed} show={show}>
      <SelectButton onClick={() => setIsOpen(!isOpen)}>
        {currentLanguage.display}
      </SelectButton>
      <Dropdown show={isOpen}>
        {languages.map((language) => (
          <LanguageOption
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={language.code === i18n.language ? 'active' : ''}
          >
            {language.name}
          </LanguageOption>
        ))}
      </Dropdown>
    </SelectorContainer>
  );
};

export default LanguageSelector; 