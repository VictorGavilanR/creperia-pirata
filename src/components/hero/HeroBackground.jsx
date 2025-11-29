import React, { useEffect, useRef } from 'react';

const HeroBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let waves = [];

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    // Estrellas doradas titilantes
    class Star {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height * 0.6;
        this.size = Math.random() * 2 + 0.5;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.twinkleSpeed = Math.random() * 0.02 + 0.01;
        this.twinkleDirection = 1;
      }

      update() {
        this.opacity += this.twinkleSpeed * this.twinkleDirection;
        if (this.opacity >= 0.8 || this.opacity <= 0.2) {
          this.twinkleDirection *= -1;
        }
      }

      draw() {
        ctx.fillStyle = `rgba(245, 182, 29, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 3);
        gradient.addColorStop(0, `rgba(245, 182, 29, ${this.opacity * 0.3})`);
        gradient.addColorStop(1, 'rgba(245, 182, 29, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Olas del mar
    class Wave {
      constructor(yOffset, amplitude, frequency, speed, color, opacity) {
        this.yOffset = yOffset;
        this.amplitude = amplitude;
        this.frequency = frequency;
        this.speed = speed;
        this.color = color;
        this.opacity = opacity;
        this.phase = 0;
      }

      update() {
        this.phase += this.speed;
      }

      draw() {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);

        for (let x = 0; x < canvas.width; x++) {
          const y = canvas.height * this.yOffset + 
                    Math.sin(x * this.frequency + this.phase) * this.amplitude;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.closePath();
        ctx.fillStyle = this.color.replace('OPACITY', this.opacity);
        ctx.fill();
      }
    }

    // Burbujas flotantes
    class Bubble {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height * 0.7 + Math.random() * (canvas.height * 0.3);
        this.size = Math.random() * 4 + 2;
        this.speedY = Math.random() * 0.5 + 0.3;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.3 + 0.2;
      }

      update() {
        this.y -= this.speedY;
        this.x += this.speedX;

        if (this.y < canvas.height * 0.6) {
          this.y = canvas.height;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        ctx.fillStyle = `rgba(0, 179, 230, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity * 0.8})`;
        ctx.beginPath();
        ctx.arc(this.x - this.size * 0.3, this.y - this.size * 0.3, this.size * 0.3, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      waves = [];

      for (let i = 0; i < 100; i++) {
        particles.push(new Star());
      }

      for (let i = 0; i < 30; i++) {
        particles.push(new Bubble());
      }

      waves.push(new Wave(0.75, 30, 0.01, 0.02, 'rgba(0, 128, 163, OPACITY)', 0.3));
      waves.push(new Wave(0.8, 25, 0.015, 0.025, 'rgba(0, 179, 230, OPACITY)', 0.4));
      waves.push(new Wave(0.85, 20, 0.02, 0.03, 'rgba(0, 179, 230, OPACITY)', 0.5));
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGradient.addColorStop(0, '#050608');
      bgGradient.addColorStop(0.6, '#0a1520');
      bgGradient.addColorStop(1, '#00405a');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      waves.forEach(wave => {
        wave.update();
        wave.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      setCanvasSize();
      init();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />

      <div 
        className="absolute inset-0 opacity-10"
        style={{
          zIndex: 2,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div 
        className="absolute inset-0"
        style={{
          zIndex: 3,
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(5, 6, 8, 0.6) 100%)'
        }}
      />

      <div 
        className="absolute inset-0 opacity-20"
        style={{
          zIndex: 4,
          background: 'linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100%)',
          animation: 'mistMove 20s ease-in-out infinite alternate'
        }}
      />

    </>
  );
};

export default HeroBackground;