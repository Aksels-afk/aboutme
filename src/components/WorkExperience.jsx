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

// Import company icons
import santaMonicaIcon from '../assets/icons/santa-monica.png';
import skontoIcon from '../assets/icons/skonto-plan.png';

const WorkExperience = () => {
  const { t } = useTranslation();

  const getCompanyIcon = (company) => {
    switch (company) {
      case 'Santa Monica Networks':
        return santaMonicaIcon;
      case 'Skonto Plan':
        return skontoIcon;
      default:
        return null;
    }
  };

  return (
    <Section id="experience">
      <Container>
        <Title>{t('workExperience.title')}</Title>
        <Timeline>
          {/* Santa Monica Networks */}
          <TimelineItem alignment="right">
            <TimelineContent>
              {getCompanyIcon(t('workExperience.current.company')) && (
                <CompanyIcon>
                  <img src={getCompanyIcon(t('workExperience.current.company'))} alt={t('workExperience.current.company')} />
                </CompanyIcon>
              )}
              <TimelineTitle>{t('workExperience.current.title')}</TimelineTitle>
              <TimelineSubtitle>{t('workExperience.current.company')}</TimelineSubtitle>
              <TimelineDate>{t('workExperience.current.date')}</TimelineDate>
              <TimelineDescription>{t('workExperience.current.description')}</TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          {/* Skonto Plan */}
          <TimelineItem alignment="left">
            <TimelineContent>
              {getCompanyIcon(t('workExperience.previous.company')) && (
                <CompanyIcon>
                  <img src={getCompanyIcon(t('workExperience.previous.company'))} alt={t('workExperience.previous.company')} />
                </CompanyIcon>
              )}
              <TimelineTitle>{t('workExperience.previous.title')}</TimelineTitle>
              <TimelineSubtitle>{t('workExperience.previous.company')}</TimelineSubtitle>
              <TimelineDate>{t('workExperience.previous.date')}</TimelineDate>
              <TimelineDescription>{t('workExperience.previous.description')}</TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          {/* Batsoft - No Icon */}
          <TimelineItem alignment="right">
            <TimelineContent>
              {getCompanyIcon(t('workExperience.internship.company')) && (
                <CompanyIcon>
                  <img src={getCompanyIcon(t('workExperience.internship.company'))} alt={t('workExperience.internship.company')} />
                </CompanyIcon>
              )}
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