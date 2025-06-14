import { useEffect, useRef } from 'react';

const useFadeIn = (options = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    }, {
      threshold: 0.1,
      ...options
    });

    const currentElement = elementRef.current;
    if (currentElement) {
      currentElement.style.opacity = '0';
      currentElement.style.transform = 'translateY(20px)';
      currentElement.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return elementRef;
};

export default useFadeIn; 