import React from 'react';
import styled from 'styled-components';

const FadeInWrapper = styled.div`
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  will-change: opacity, transform;
  background-color: ${props => props.theme.body};

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const FadeIn = ({ children, className, ...props }) => {
  const wrapperRef = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          entry.target.classList.add('visible');
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px',
      }
    );

    const currentElement = wrapperRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <FadeInWrapper 
      ref={wrapperRef} 
      className={className} 
      style={{ opacity: isVisible ? 1 : 0 }}
      {...props}
    >
      {children}
    </FadeInWrapper>
  );
};

export default FadeIn; 