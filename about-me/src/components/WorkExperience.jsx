import React from 'react';
import { useTranslation } from 'react-i18next';
import { Section, Container, Title } from '../styles/shared';
import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineTitle,
  TimelineSubtitle,
  TimelineDate,
  TimelineDescription
} from '../styles/timeline';

const WorkExperience = () => {
  const { t } = useTranslation();

  return (
    <Section id="experience">
      <Container>
        <Title>{t('workExperience.title')}</Title>
        <Timeline>
          <TimelineItem alignment="right">
            <TimelineContent>
              <TimelineTitle>{t('workExperience.current.title')}</TimelineTitle>
              <TimelineSubtitle>{t('workExperience.current.company')}</TimelineSubtitle>
              <TimelineDate>{t('workExperience.current.date')}</TimelineDate>
              <TimelineDescription>{t('workExperience.current.description')}</TimelineDescription>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem alignment="left">
            <TimelineContent>
              <TimelineTitle>{t('workExperience.previous.title')}</TimelineTitle>
              <TimelineSubtitle>{t('workExperience.previous.company')}</TimelineSubtitle>
              <TimelineDate>{t('workExperience.previous.date')}</TimelineDate>
              <TimelineDescription>{t('workExperience.previous.description')}</TimelineDescription>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem alignment="right">
            <TimelineContent>
              <TimelineTitle>{t('workExperience.internship.title')}</TimelineTitle>
              <TimelineSubtitle>{t('workExperience.internship.company')}</TimelineSubtitle>
              <TimelineDate>{t('workExperience.internship.date')}</TimelineDate>
              <TimelineDescription>{t('workExperience.internship.description')}</TimelineDescription>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Container>
    </Section>
  );
};

export default WorkExperience; 