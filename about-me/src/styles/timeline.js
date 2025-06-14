import styled from 'styled-components';

export const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;

  &::after {
    content: '';
    position: absolute;
    width: 4px;
    background: ${props => props.theme.primary};
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -2px;
    border-radius: 2px;

    @media (max-width: 768px) {
      left: 31px;
    }
  }
`;

export const TimelineItem = styled.div`
  padding: 1rem 2rem;
  position: relative;
  width: 50%;
  left: ${props => props.alignment === 'right' ? '50%' : '0'};
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    left: 0;
  }

  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: ${props => props.theme.primary};
    border-radius: 50%;
    top: 1.5rem;
    right: ${props => props.alignment === 'right' ? 'auto' : '-10px'};
    left: ${props => props.alignment === 'right' ? '-10px' : 'auto'};
    z-index: 1;

    @media (max-width: 768px) {
      left: 21px;
      right: auto;
    }
  }
`;

export const TimelineContent = styled.div`
  padding: 1.5rem;
  background: ${props => props.theme.card};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid ${props => props.theme.border};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const TimelineTitle = styled.h3`
  color: ${props => props.theme.primary};
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
`;

export const TimelineSubtitle = styled.h4`
  color: ${props => props.theme.text};
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

export const TimelineDate = styled.p`
  color: ${props => props.theme.secondary};
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

export const TimelineDescription = styled.p`
  color: ${props => props.theme.secondary};
  line-height: 1.6;
`; 