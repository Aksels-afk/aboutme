import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const TrailContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  opacity: ${props => props.isVisible ? 1 : 0};
  transition: opacity 0.3s ease;
`;

const CursorTrail = ({ containerRef }) => {
  const [isVisible, setIsVisible] = useState(true);
  const particlesRef = useRef([]);
  const animationFrameRef = useRef();
  const lastMousePos = useRef({ x: 0, y: 0 });
  const mouseVelocity = useRef({ x: 0, y: 0 });
  const lastTime = useRef(Date.now());

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate velocity
      const currentTime = Date.now();
      const deltaTime = currentTime - lastTime.current;
      if (deltaTime > 0) {
        mouseVelocity.current = {
          x: (x - lastMousePos.current.x) / deltaTime * 16,
          y: (y - lastMousePos.current.y) / deltaTime * 16
        };
      }
      lastTime.current = currentTime;
      lastMousePos.current = { x, y };

      // Create new particle
      const particle = document.createElement('div');
      particle.style.position = 'absolute';
      particle.style.width = '8px';
      particle.style.height = '8px';
      // Use primary color in light mode, white in dark mode
      particle.style.backgroundColor = document.documentElement.getAttribute('data-theme') === 'dark' 
        ? 'rgba(255, 255, 255, 0.8)' 
        : 'rgba(37, 99, 235, 0.8)'; // Using the blue color from your theme
      particle.style.borderRadius = '50%';
      particle.style.pointerEvents = 'none';
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.transform = 'translate(-50%, -50%)';
      particle.style.opacity = '1';
      particle.style.transition = 'opacity 0.5s ease-out';
      
      // Add velocity to the particle
      particle.velocity = {
        x: mouseVelocity.current.x * 0.5,
        y: mouseVelocity.current.y * 0.5
      };
      
      container.appendChild(particle);
      particlesRef.current.push(particle);

      // Remove particle after animation
      setTimeout(() => {
        if (particle.parentNode === container) {
          container.removeChild(particle);
          particlesRef.current = particlesRef.current.filter(p => p !== particle);
        }
      }, 1000);
    };

    const handleScroll = () => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;
      setIsVisible(isInView);
    };

    const animate = () => {
      if (!isVisible) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      particlesRef.current.forEach(particle => {
        if (!particle.parentNode) return;

        // Update position based on velocity
        const currentLeft = parseFloat(particle.style.left);
        const currentTop = parseFloat(particle.style.top);
        
        particle.style.left = `${currentLeft + particle.velocity.x}px`;
        particle.style.top = `${currentTop + particle.velocity.y}px`;

        // Gradually reduce velocity
        particle.velocity.x *= 0.95;
        particle.velocity.y *= 0.95;

        // Fade out based on velocity
        const speed = Math.sqrt(particle.velocity.x ** 2 + particle.velocity.y ** 2);
        const opacity = Math.max(0, 1 - speed * 0.1);
        particle.style.opacity = opacity;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    container.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    animate();

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      // Clean up particles
      particlesRef.current.forEach(particle => {
        if (particle.parentNode === container) {
          container.removeChild(particle);
        }
      });
      particlesRef.current = [];
    };
  }, [containerRef, isVisible]);

  return <TrailContainer isVisible={isVisible} />;
};

export default CursorTrail; 