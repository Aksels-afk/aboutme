import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Section, Container, Title, Card, Grid, Heading, Text } from '../styles/shared';

const ProjectCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const ProjectImageContainer = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  background: ${props => props.theme.card};
  border: 1px solid ${props => props.theme.border};
  margin-bottom: 1rem;
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const NavigationButtons = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  z-index: 10;
  pointer-events: none;
`;

const NavButton = styled.button`
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  pointer-events: auto;
  font-size: 1.2rem;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: white;
  padding: 1rem;
  font-size: 0.9rem;
  font-weight: 500;
`;

const ImageCounter = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled(Heading)`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  text-align: left;
  color: ${props => props.theme.primary};
`;

const ProjectSubtitle = styled(Text)`
  font-size: 0.9rem;
  color: ${props => props.theme.secondary};
  margin-bottom: 1rem;
  text-align: left;
  font-style: italic;
`;

const ProjectDescription = styled(Text)`
  text-align: left;
  margin-bottom: 1.5rem;
  flex: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechTag = styled.span`
  background: ${props => props.theme.primary};
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${props => props.theme.primary};
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const Projects = () => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: t('projects.taskManagement.title'),
      subtitle: t('projects.taskManagement.subtitle'),
      description: t('projects.taskManagement.description'),
      techStack: t('projects.taskManagement.techStack', { returnObjects: true }),
      githubLink: 'https://github.com/Aksels-afk/Task-management-system',
      images: [
        require('../assets/images/login.jpeg'),     // Login page
        require('../assets/images/register.jpeg'),   // Registration page
        require('../assets/images/Dashboard.jpeg') // Dashboard/Task list
      ]
    }
  ];

  const imageLabels = ['Login Page', 'Dashboard', 'Registration Page'];
  
  // Calculate next and previous image indices
  const nextImageIndex = currentImageIndex === projects[0].images.length - 1 ? 0 : currentImageIndex + 1;
  const prevImageIndex = currentImageIndex === 0 ? projects[0].images.length - 1 : currentImageIndex - 1;

  // Simple navigation functions
  const goToNext = () => {
    setCurrentImageIndex(nextImageIndex);
  };

  const goToPrevious = () => {
    setCurrentImageIndex(prevImageIndex);
  };

  return (
    <Section id="projects">
      <Container>
        <Title>{t('projects.title')}</Title>
        <Grid minWidth="350px" gap="2rem">
          {projects.map((project) => (
            <ProjectCard key={project.id}>
              <ProjectImageContainer>
                {/* Single Static Image */}
                <ProjectImage>
                  <Image 
                    src={project.images[currentImageIndex]} 
                    alt={`${project.title} - ${imageLabels[currentImageIndex]}`}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                      e.target.parentElement.innerHTML = `<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: white; font-size: 1.2rem; text-align: center; padding: 1rem;">${imageLabels[currentImageIndex]}</div>`;
                    }}
                  />
                </ProjectImage>
                
                {/* Navigation Buttons */}
                <NavigationButtons>
                  <NavButton onClick={goToPrevious} aria-label="Previous image">
                    ‹
                  </NavButton>
                  <NavButton onClick={goToNext} aria-label="Next image">
                    ›
                  </NavButton>
                </NavigationButtons>
                
                {/* Static Overlay Elements */}
                <ImageOverlay>
                  {imageLabels[currentImageIndex]}
                </ImageOverlay>
                <ImageCounter>
                  {currentImageIndex + 1} / {project.images.length}
                </ImageCounter>
              </ProjectImageContainer>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.techStack.map((tech, index) => (
                    <TechTag key={index}>{tech}</TechTag>
                  ))}
                </TechStack>
                <ProjectLinks>
                  <ProjectLink href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Projects; 