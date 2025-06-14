import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Section, Container, Title, Card, Grid, Text } from '../styles/shared';

const ContactCard = styled(Card)`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  text-decoration: none;
  color: ${props => props.theme.text};
  padding: 2rem;

  &:hover {
    border-color: ${props => props.theme.primary};
  }
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.theme.primary}20;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: ${props => props.theme.primary};
  transition: all 0.3s ease;

  ${ContactCard}:hover & {
    background: ${props => props.theme.primary};
    color: white;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
`;

const ContactLabel = styled(Text)`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const ContactValue = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${props => props.theme.text};
`;

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Section id="contact">
      <Container>
        <Title>{t('contact.title')}</Title>
        <Text>{t('contact.subtitle')}</Text>
        <Grid minWidth="300px" gap="2rem">
          <ContactCard as="a" href={`mailto:${t('contact.email.value')}`}>
            <IconWrapper>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </IconWrapper>
            <ContactInfo>
              <ContactLabel>{t('contact.email.label')}</ContactLabel>
              <ContactValue>{t('contact.email.value')}</ContactValue>
            </ContactInfo>
          </ContactCard>

          <ContactCard as="a" href={`tel:${t('contact.phone.value')}`}>
            <IconWrapper>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </IconWrapper>
            <ContactInfo>
              <ContactLabel>{t('contact.phone.label')}</ContactLabel>
              <ContactValue>{t('contact.phone.value')}</ContactValue>
            </ContactInfo>
          </ContactCard>

          <ContactCard as="a" href="https://www.linkedin.com/in/aksels-salavs-0abb82242/" target="_blank" rel="noopener noreferrer">
            <IconWrapper>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </IconWrapper>
            <ContactInfo>
              <ContactLabel>{t('contact.linkedin.label')}</ContactLabel>
              <ContactValue>{t('contact.linkedin.value')}</ContactValue>
            </ContactInfo>
          </ContactCard>
        </Grid>
      </Container>
    </Section>
  );
};

export default Contact; 