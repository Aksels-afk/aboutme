import styled from 'styled-components';

export const Section = styled.section`
  padding: 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.background};
  position: relative;
  z-index: 1;

  &:last-of-type {
    padding-bottom: 1rem;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  background: ${props => props.theme.background};
  position: relative;
  z-index: 2;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${props => props.theme.text};
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: ${props => props.theme.primary};
    border-radius: 2px;
  }
`;

export const Card = styled.div`
  background: ${props => props.theme.card};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid ${props => props.theme.border};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`;

// Common text styles
export const Text = styled.p`
  color: ${props => props.theme.secondary};
  line-height: 1.6;
  font-size: ${props => props.size || '1rem'};
  margin-bottom: ${props => props.marginBottom || '1rem'};
  text-align: center;
`;

// Common heading styles
export const Heading = styled.h3`
  color: ${props => props.theme.primary};
  font-size: ${props => props.size || '1.4rem'};
  margin-bottom: ${props => props.marginBottom || '0.5rem'};
  font-weight: 500;
  text-align: center;
`;

// Common grid styles
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${props => props.minWidth || '300px'}, 1fr));
  gap: ${props => props.gap || '1.5rem'};
  width: 100%;
  margin-bottom: ${props => props.marginBottom || '1rem'};
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background: ${props => props.theme.primary};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-1px);
  }
`; 