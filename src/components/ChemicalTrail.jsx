import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Canvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 1000;
`;

const ChemicalTrail = () => {
  const canvasRef = useRef(null);
  const [isBursting, setIsBursting] = useState(false);
  const particles = useRef([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const lastMousePos = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleClick = () => {
      setIsBursting(true);
      // Create burst particles
      for (let i = 0; i < 100; i++) {
        const angle = (Math.PI * 2 * i) / 100;
        const speed = 2 + Math.random() * 3;
        particles.current.push({
          x: mousePos.current.x,
          y: mousePos.current.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          color: `rgba(0, 255, 255, `, // Cyan color with alpha
          size: 3 + Math.random() * 4
        });
      }
      setTimeout(() => setIsBursting(false), 2000);
    };

    const createTrailParticle = () => {
      if (Math.random() < 0.3) { // Control trail density
        particles.current.push({
          x: mousePos.current.x,
          y: mousePos.current.y,
          vx: (mousePos.current.x - lastMousePos.current.x) * 0.5,
          vy: (mousePos.current.y - lastMousePos.current.y) * 0.5,
          life: 1,
          color: `rgba(0, 255, 255, `, // Cyan color with alpha
          size: 2 + Math.random() * 3
        });
      }
      lastMousePos.current = { ...mousePos.current };
    };

    const updateParticles = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw particles
      particles.current = particles.current.filter(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.1; // Gravity effect
        particle.life -= 0.02; // Faster fade out
        
        if (particle.life > 0) {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color + particle.life + ')';
          ctx.fill();
          
          // Add glow effect
          ctx.shadowBlur = 10;
          ctx.shadowColor = 'rgba(0, 255, 255, 0.5)';
          ctx.fill();
          ctx.shadowBlur = 0;
          
          return true;
        }
        return false;
      });

      // Create trail particles
      if (!isBursting) {
        createTrailParticle();
      }

      animationFrameId.current = requestAnimationFrame(updateParticles);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    updateParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isBursting]);

  return <Canvas ref={canvasRef} />;
};

export default ChemicalTrail;