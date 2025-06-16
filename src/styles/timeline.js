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
  padding: 10px 40px;
  position: relative;
  width: 50%;
  box-sizing: border-box;
  left: ${props => props.alignment === 'left' ? '0' : '50%'};

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    left: 0;
  }

  &::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: ${props => props.alignment === 'left' ? '-17px' : 'auto'};
    left: ${props => props.alignment === 'left' ? 'auto' : '-17px'};
    background-color: ${props => props.theme.background};
    border: 4px solid ${props => props.theme.primary};
    top: 15px;
    border-radius: 50%;
    z-index: 1;

    @media (max-width: 768px) {
      left: 15px;
      right: auto;
    }
  }
`;

export const TimelineContent = styled.div`
  padding: 20px;
  background: ${props => props.theme.card};
  position: relative;
  border-radius: 6px;
  border: 1px solid ${props => props.theme.border};
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    border-color: ${props => props.theme.primary};
  }
`;

export const CompanyIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  transition: all 0.3s ease;
  overflow: hidden;

  img {
    width: 55px;
    object-fit: contain;
  }
`;

export const TimelineTitle = styled.h3`
  margin: 0;
  color: ${props => props.theme.text};
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
`;

export const TimelineSubtitle = styled.h4`
  margin: 0.5rem 0;
  color: ${props => props.theme.primary};
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
`;

export const TimelineDate = styled.div`
  color: ${props => props.theme.secondary};
  font-size: 0.9rem;
  margin-bottom: 1rem;
  text-align: center;
`;

export const TimelineDescription = styled.p`
  margin: 0;
  color: ${props => props.theme.text};
  font-size: 0.95rem;
  line-height: 1.6;
  text-align: center;
`; 