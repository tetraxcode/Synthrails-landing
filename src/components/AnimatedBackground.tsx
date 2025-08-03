import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const mouse = {
      x: 0,
      y: 0,
      radius: 150
    }

    let width = canvas.width;
    let height = canvas.height;
    
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const charSet = katakana + characters;
    const fontSize = 16;
    let columns = 0;
    let drops: number[] = [];

    const setup = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / fontSize);
      drops = [];
      for (let x = 0; x < columns; x++) {
        drops[x] = 1 + Math.random() * height;
      }
    }

    const draw = () => {
      // Use gray-950 with low opacity for the fading trail effect
      ctx.fillStyle = 'rgba(10, 10, 15, 0.05)';
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < drops.length; i++) {
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        const dx = mouse.x - x;
        const dy = mouse.y - y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          ctx.fillStyle = '#ffffff'; // White for interactive glow
          ctx.font = `${fontSize + 1}px monospace`;
        } else {
          ctx.fillStyle = 'rgba(40, 60, 110, 0.7)'; // Dark blue hue
          ctx.font = `${fontSize}px monospace`;
        }

        const text = charSet[Math.floor(Math.random() * charSet.length)];
        ctx.fillText(text, x, y);

        // Reset drop to top randomly to create sparse rain effect
        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };
    
    let animationFrameId: number;
    const animate = () => {
      draw();
      animationFrameId = requestAnimationFrame(animate);
    }
    
    const handleResize = () => {
        setup();
    }
    
    const handleMouseMove = (e: MouseEvent) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    setup();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 -z-10" />;
};

export default AnimatedBackground; 