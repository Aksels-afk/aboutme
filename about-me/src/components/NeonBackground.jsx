import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  backdrop-filter: blur(8px);
`;

const NeonBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let hue = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.baseSize = Math.random() * 8 + 12;
        this.size = this.baseSize;
        this.speedX = Math.random() * 0.3 - 0.15;
        this.speedY = Math.random() * 0.3 - 0.15;
        this.color = `hsla(${hue}, 100%, 50%, 0.3)`;
        this.angle = Math.random() * Math.PI * 2;
        this.angleSpeed = (Math.random() * 0.01) - 0.005;
        this.radius = Math.random() * 100 + 50;
        this.centerX = x;
        this.centerY = y;
        this.breathSpeed = Math.random() * 0.01 + 0.005;
        this.breathPhase = Math.random() * Math.PI * 2;
      }

      update() {
        this.angle += this.angleSpeed;
        this.x = this.centerX + Math.cos(this.angle) * this.radius;
        this.y = this.centerY + Math.sin(this.angle) * this.radius;

        this.breathPhase += this.breathSpeed;
        this.size = this.baseSize * (1 + Math.sin(this.breathPhase) * 0.2);

        this.color = `hsla(${hue}, 100%, 50%, 0.3)`;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        
        ctx.shadowBlur = 30;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const createParticles = () => {
      if (particles.length < 15) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      hue = (hue + 0.1) % 360;
      createParticles();

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <Canvas ref={canvasRef} />;
};

export default NeonBackground;