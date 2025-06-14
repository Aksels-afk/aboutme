import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 1.5rem;
  text-align: center;
  background: ${props => props.theme.card};
  border-top: 1px solid ${props => props.theme.border};
  color: ${props => props.theme.text};
  font-size: 0.9rem;
`;

const Copyright = styled.div`
  opacity: 0.8;
`;

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <FooterContainer>
      <Copyright>
        {t('footer.copyright')} {t('footer.rights')}
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 