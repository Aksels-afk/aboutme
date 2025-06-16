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
  TimelineDescription,
  CompanyIcon
} from '../styles/timeline';

// Import university icon
import luIcon from '../assets/icons/lu.png';

const Education = () => {
  const { t } = useTranslation();

  return (
    <Section id="education">
      <Container>
        <Title>{t('education.title')}</Title>
        <Timeline>
          <TimelineItem alignment="right">
            <TimelineContent>
              <CompanyIcon>
                <img src={luIcon} alt="University of Latvia" />
              </CompanyIcon>
              <TimelineTitle>{t('education.current.degree')}</TimelineTitle>
              <TimelineSubtitle>{t('education.current.school')}</TimelineSubtitle>
              <TimelineDate>{t('education.current.date')}</TimelineDate>
              <TimelineDescription>{t('education.current.description')}</TimelineDescription>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem alignment="left">
            <TimelineContent>
              <TimelineTitle>{t('education.previous.degree')}</TimelineTitle>
              <TimelineSubtitle>{t('education.previous.school')}</TimelineSubtitle>
              <TimelineDate>{t('education.previous.date')}</TimelineDate>
              <TimelineDescription>{t('education.previous.description')}</TimelineDescription>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Container>
    </Section>
  );
};

export default Education; 