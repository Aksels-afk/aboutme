import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Section, Container, Title, Card, Grid, Heading, Text } from '../styles/shared';

const HobbyCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  text-align: center;
`;

const WebsiteCard = styled(HobbyCard)`
  grid-column: 1 / -1;  /* This makes the card span all columns */
  margin-top: 1rem;     /* Add some spacing from the other cards */
`;

const HobbyTitle = styled(Heading)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-align: center;

  &::before {
    content: '•';
    color: ${props => props.theme.primary};
    font-size: 2rem;
  }
`;

const Hobbies = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <Container>
        <Title>{t('hobbies.title')}</Title>
        <Grid>
          <HobbyCard>
            <HobbyTitle>{t('hobbies.carRepair.title')}</HobbyTitle>
            <Text>{t('hobbies.carRepair.description')}</Text>
          </HobbyCard>
          <HobbyCard>
            <HobbyTitle>{t('hobbies.gym.title')}</HobbyTitle>
            <Text>{t('hobbies.gym.description')}</Text>
          </HobbyCard>
          <HobbyCard>
            <HobbyTitle>{t('hobbies.other.title')}</HobbyTitle>
            <Text>{t('hobbies.other.description')}</Text>
          </HobbyCard>
          <WebsiteCard>
            <HobbyTitle>{t('hobbies.website.title')}</HobbyTitle>
            <Text>{t('hobbies.website.description')}</Text>
          </WebsiteCard>
        </Grid>
      </Container>
    </Section>
  );
};

export default Hobbies; 