import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Section, Container, Title, Card, Grid, Heading, Text } from '../styles/shared';
import profileImage from '../images/AkselsS.jpeg';

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border: 1px solid ${props => props.theme.border};
`;

const ProfileImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SkillsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SkillItem = styled(Card)`
  text-align: center;
  font-weight: 500;
  padding: 1rem;
`;

const About = () => {
  const { t } = useTranslation();

  const skills = [
    'JavaScript',
    'React',
    'Node.js',
    'Python',
    'SQL',
    'Git',
    'HTML/CSS',
    'TypeScript'
  ];

  return (
    <Section id="about">
      <Container>
        <Title>{t('about.title')}</Title>
        <AboutContent>
          <ImageContainer>
            <ProfileImage 
              src={profileImage}
              alt="Aksels Salavs"
              loading="lazy"
            />
          </ImageContainer>
          <TextContent>
            <Text size="1.1rem">{t('about.description')}</Text>
            <SkillsSection>
              <Heading size="1.8rem">{t('about.skills')}</Heading>
              <Grid minWidth="140px" gap="1rem">
                {skills.map((skill, index) => (
                  <SkillItem key={index}>{skill}</SkillItem>
                ))}
              </Grid>
            </SkillsSection>
          </TextContent>
        </AboutContent>
      </Container>
    </Section>
  );
};

export default About; 