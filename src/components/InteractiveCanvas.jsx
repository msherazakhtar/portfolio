import React, { useRef, useEffect } from 'react';

export default function InteractiveCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Resolve the hero section container as the event listener target
    const eventTarget = canvas.closest('.hero-section') || canvas.parentElement || window;

    // Handle resizing to fill container
    const resizeCanvas = () => {
      const rect = eventTarget.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Simulation settings (larger area, more subtle connections)
    const particleCount = 80;
    const particles = [];
    const connectionDistance = 125;
    const mouse = {
      x: null,
      y: null,
      radius: 150,
    };

    // Subtly colored particles strictly in blue and orange brand shades
    // const colors = [
    //   'rgba(30, 58, 170, 0.22)',      // Deep Blue
    //   'rgba(59, 130, 246, 0.25)',     // Accent Blue
    //   'rgba(249, 115, 22, 0.25)',      // Vibrant Orange
    // ];

    const colors = [
      'rgba(30, 58, 170, .75)',      // Deep Blue
      'rgba(59, 130, 246, .5)',     // Accent Blue
      'rgba(249, 115, 22, .75)',      // Vibrant Orange
    ];

    class Particle {
      constructor(x, y) {
        this.x = x !== undefined ? x : Math.random() * canvas.width;
        this.y = y !== undefined ? y : Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.4; // very slow, smooth drift
        this.vy = (Math.random() - 0.5) * 0.4;
        this.baseRadius = Math.random() * 2 + 1;
        this.radius = this.baseRadius;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        // Bounce off canvas boundaries
        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

        // Apply mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            // Soft attraction drift
            this.x += (dx / dist) * force * 0.3;
            this.y += (dy / dist) * force * 0.3;
            this.radius = this.baseRadius + force * 1.5;
          } else {
            if (this.radius > this.baseRadius) {
              this.radius -= 0.05;
            }
          }
        } else {
          if (this.radius > this.baseRadius) {
            this.radius -= 0.05;
          }
        }

        this.x += this.vx;
        this.y += this.vy;
      }
    }

    // Populate particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      // Spawn new floating nodes
      for (let i = 0; i < 5; i++) {
        if (particles.length < 120) {
          particles.push(new Particle(clickX, clickY));
        }
      }
    };

    // Attach listeners to parent element (captures movements over links/texts)
    eventTarget.addEventListener('mousemove', handleMouseMove);
    eventTarget.addEventListener('mouseleave', handleMouseLeave);
    eventTarget.addEventListener('click', handleClick);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background connection lines
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            // Very light subtle lines
            const alpha = (1 - dist / connectionDistance) * 0.05;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(30, 58, 170, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Draw connections from particles to cursor
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p1.x;
          const dy = mouse.y - p1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            // Soft orange connection glow
            const alpha = (1 - dist / mouse.radius) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(249, 115, 22, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        p1.update();
        p1.draw();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (eventTarget) {
        eventTarget.removeEventListener('mousemove', handleMouseMove);
        eventTarget.removeEventListener('mouseleave', handleMouseLeave);
        eventTarget.removeEventListener('click', handleClick);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        display: 'block',
        width: '100%',
        height: '100%',
        background: 'transparent'
      }} 
    />
  );
}
